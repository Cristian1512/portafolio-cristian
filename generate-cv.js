const path = require("path");
process.env.LD_LIBRARY_PATH = [
  path.resolve(__dirname, ".chrome-libs/usr/lib/x86_64-linux-gnu"),
  process.env.LD_LIBRARY_PATH || "",
].join(":");
const puppeteer = require("puppeteer");

(async () => {
  // Sin executablePath fijo: puppeteer resuelve automáticamente el Chrome
  // cacheado en ~/.cache/puppeteer, evitando que un cambio de versión (como
  // ocurrió aquí — chrome-headless-shell fue reemplazado por chrome a plano)
  // rompa la ruta codificada a mano.
  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });
  const page = await browser.newPage();
  const filePath = "file://" + path.resolve(__dirname, "cv/cv.html");
  await page.goto(filePath, { waitUntil: "networkidle0" });

  // networkidle0 no garantiza que las imágenes ya estén decodificadas y
  // pintadas (especialmente file:// locales) — esperar explícitamente a que
  // cada <img> termine de cargar (o falle) y a que las fuentes web resuelvan
  // antes de exportar, para que el PDF no se genere con huecos en blanco.
  await page.evaluate(async () => {
    await document.fonts.ready;
    await Promise.all(
      Array.from(document.images).map((img) =>
        img.complete
          ? Promise.resolve()
          : new Promise((resolve) => {
              img.addEventListener("load", resolve, { once: true });
              img.addEventListener("error", resolve, { once: true });
            })
      )
    );
  });

  await page.pdf({
    path: path.resolve(__dirname, "cv/Portafolio-Cristian-Cardenas.pdf"),
    format: "A4",
    printBackground: true,
    margin: { top: "0mm", bottom: "0mm", left: "0mm", right: "0mm" },
  });
  await browser.close();
  console.log("PDF generado correctamente");
})();

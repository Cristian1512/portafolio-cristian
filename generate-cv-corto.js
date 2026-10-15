const path = require("path");
process.env.LD_LIBRARY_PATH = [
  path.resolve(__dirname, ".chrome-libs/usr/lib/x86_64-linux-gnu"),
  process.env.LD_LIBRARY_PATH || "",
].join(":");
const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });
  const page = await browser.newPage();
  const filePath = "file://" + path.resolve(__dirname, "cv/cv-corto.html");
  await page.goto(filePath, { waitUntil: "networkidle0" });

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
    path: path.resolve(__dirname, "cv/CV-Cristian-Cardenas.pdf"),
    format: "A4",
    printBackground: true,
    margin: { top: "0mm", bottom: "0mm", left: "0mm", right: "0mm" },
  });
  await browser.close();
  console.log("PDF generado correctamente");
})();

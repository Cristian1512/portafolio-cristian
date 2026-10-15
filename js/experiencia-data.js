/**
 * Datos de experiencia profesional, agrupados en 3 categorías:
 * "bim", "diseno" (diseño y consultoría), "obra" (construcción y obra).
 *
 * Para agregar o editar un cargo: agrega/edita un objeto en EXPERIENCIA.
 * El sitio genera las pestañas y la línea de tiempo automáticamente.
 */

const CATEGORIAS_EXPERIENCIA = {
  obra: {
    label: "Construcción y Obra",
    lead: "Más de 100.000 m² y más de 3 mil ml en vías, en proyectos en los que he participado en interventoría, dirección y residencia de obra, edificación, infraestructura y vivienda.",
  },
  bim: {
    label: "Experiencia BIM",
    lead: "Más de 150.000 m² en proyectos en los que he participado en coordinación BIM, entre modelado y federación de modelos en Revit y Navisworks, de forma presencial, remota e híbrida.",
  },
  diseno: {
    label: "Diseño, Consultoría y Docencia",
    lead: "Más de 5 mil m² en proyectos en los que he participado en consultoría independiente, formulación de proyectos inmobiliarios y docencia universitaria en construcción y metodología BIM.",
  },
};

const EXPERIENCIA = [
  // ---------------- Experiencia BIM ----------------
  {
    categoria: "bim",
    anio: "2026 – Actual",
    rol: "Apoyo a la coordinación VCD - BIM",
    empresa: "Consorcio Alianza CCB",
    lugar: "Bogotá D.C. (remoto e híbrido ocasional)",
    descripcion:
      "Apoyo a la coordinación BIM del Campus de Ciencia, Tecnología e Innovación de Bogotá – Región (CTIB), Fase 1A (44.000 m²).",
  },
  {
    categoria: "bim",
    anio: "2017 – 2024",
    rol: "Coordinador BIM / Modelador BIM",
    empresa: "Ekoobim S.A.S.",
    lugar: "Envigado – Bogotá – Manizales (tiempo parcial)",
    descripcion:
      "Modelado BIM de arquitectura y redes sanitarias (18.000 m²), estructura y RCI en Revit. Coordinación y federación de modelos en Navisworks (30.045 m²); extracción de cantidades, producción planimétrica y modelos As-Built.",
  },
  {
    categoria: "bim",
    anio: "2020 – 2021",
    rol: "Apoyo modelado arquitectura + estructura (remoto)",
    empresa: "Entrez Ingenieros Civiles",
    lugar: "Bogotá D.C. (remoto)",
    descripcion:
      "Apoyo en el modelado de arquitectura y estructura en etapa de preconstrucción de C.E Connecta 80 — Torre Fura, proyecto corporativo de gran altura (37.000 m²).",
  },
  {
    categoria: "bim",
    anio: "2015 – 2018",
    rol: "Residente Administrativo / Coordinador BIM",
    empresa: "Payc S.A.S.",
    lugar: "Manizales, Caldas (tiempo completo)",
    descripcion:
      "Coordinación BIM e interventoría administrativa y técnica del Centro Comercial Mallplaza Manizales (110.000 m²), fases 1 y 2: control de programación, presupuesto, calidad y documentación técnica.",
  },

  // ---------------- Diseño y Consultoría ----------------
  {
    categoria: "diseno",
    anio: "2023 – 2026",
    rol: "Docente de Cátedra — Escuela de Arquitectura y Urbanismo",
    empresa: "Universidad Nacional de Colombia — Sede Manizales",
    lugar: "Manizales, Caldas",
    descripcion:
      "Docencia universitaria de pregrado en construcción, estructuración de proyectos inmobiliarios, tecnología de la construcción, patologías de la edificación, sostenibilidad y metodología BIM.",
  },
  {
    categoria: "diseno",
    anio: "2024",
    rol: "Diseño arquitectónico",
    empresa: "Caballerizas",
    lugar: "Cerritos, Pereira",
    descripcion: "Diseño arquitectónico y modelado RVT de caballerizas (593 m²).",
  },
  {
    categoria: "diseno",
    anio: "2019",
    rol: "Diseño Arquitectónico",
    empresa: "Vivienda Municipio de Filadelfia",
    lugar: "Filadelfia, Caldas",
    descripcion: "Diseño arquitectónico de una vivienda de 4 plantas en el municipio de Filadelfia (358 m²).",
  },
  {
    categoria: "diseno",
    anio: "2015",
    rol: "Diseño Arquitectónico",
    empresa: "EDS Hotel Las Lajas",
    lugar: "Vereda La Ye, Chocó",
    descripcion: "Diseño del hotel y zona comercial de la estación de servicio Las Lajas (445 m²).",
  },
  {
    categoria: "diseno",
    anio: "2011",
    rol: "Diseño arquitectónico y renderizado",
    empresa: "Vivienda Agua de Dios — Los Lagos",
    lugar: "Agua de Dios, Cundinamarca",
    descripcion: "Diseño arquitectónico y renderizado de una vivienda de dos niveles (228 m²).",
  },
  {
    categoria: "diseno",
    anio: "2010",
    rol: "Apoyo en Diseño Arquitectónico",
    empresa: "Multifamiliar El Sol",
    lugar: "Manizales, Caldas",
    descripcion: "Apoyo en el diseño arquitectónico de un edificio multifamiliar en altura.",
  },
  {
    categoria: "diseno",
    anio: "2010",
    rol: "Apoyo en Diseño Arquitectónico",
    empresa: "Multifamiliar en Villamaría, Caldas",
    lugar: "Villamaría, Caldas",
    descripcion: "Apoyo en el diseño arquitectónico de un conjunto multifamiliar.",
  },
  {
    categoria: "diseno",
    anio: "2009",
    rol: "Propuesta Arquitectónica",
    empresa: "Casa de Campo Villa Rubí",
    lugar: "Vía Palestina, Caldas",
    descripcion:
      "Propuesta arquitectónica de una casa de campo con cubierta a cuatro aguas y porche perimetral en madera y piedra (315 m²).",
  },
  {
    categoria: "diseno",
    anio: "2009",
    rol: "Apoyo en Diseño Arquitectónico",
    empresa: "Casa Las Palmas",
    lugar: "Medellín, Antioquia",
    descripcion:
      "Apoyo en el diseño arquitectónico de una vivienda unifamiliar, en conjunto con el arquitecto Gustavo Cortez (320 m²).",
  },
  {
    categoria: "diseno",
    anio: "2009",
    rol: "Diseño de Fachada y Renderizado",
    empresa: "Multifamiliar en Santiago de Cali",
    lugar: "Cali, Valle del Cauca",
    descripcion: "Diseño de fachada y renderizado de un edificio residencial multifamiliar de cuatro pisos.",
  },
  {
    categoria: "diseno",
    anio: "2009",
    rol: "Propuesta Arquitectónica",
    empresa: "Vivienda Familia Restrepo",
    lugar: "Pereira, Risaralda",
    descripcion: "Propuesta arquitectónica de una vivienda unifamiliar de dos plantas (396 m²).",
  },
  {
    categoria: "diseno",
    anio: "2009",
    rol: "Propuesta Arquitectónica",
    empresa: "Propuesta Remodelación Vivienda Unifamiliar Seidel",
    lugar: "Manizales, Caldas",
    descripcion:
      "Propuesta de remodelación de una vivienda unifamiliar, con integración de cocina, comedor y zona social (187 m²).",
  },
  {
    categoria: "diseno",
    anio: "2008",
    rol: "Apoyo en Diseño de Fachada y Renderizado",
    empresa: "Casa La Colina",
    lugar: "Funza, Cundinamarca",
    descripcion:
      "Apoyo en el diseño de fachada y renderizado de una vivienda unifamiliar de dos plantas en cubierta metálica y fachada en ladrillo (213 m²).",
  },
  {
    categoria: "diseno",
    anio: "2008",
    rol: "Renderizado de Fachada",
    empresa: "Conjunto Arrayanes",
    lugar: "Zarzal, Valle del Cauca",
    descripcion:
      "Renderizado de la fachada de un edificio residencial en ladrillo, con balcones ajardinados y terraza verde en cubierta.",
  },
  {
    categoria: "diseno",
    anio: "2008",
    rol: "Diseño de Fachada",
    empresa: "Conjunto Trébol Alto",
    lugar: "Cali, Valle del Cauca",
    descripcion: "Diseño de la fachada de un edificio residencial en ladrillo, con balcones y antejardín arbolado (1.400 m²).",
  },
  {
    categoria: "diseno",
    anio: "2008",
    rol: "Auxiliar de Proyectos / Propuesta Arquitectónica",
    empresa: "Edificio de Extensión UNAL",
    lugar: "Manizales, Caldas",
    descripcion:
      "Propuesta arquitectónica del edificio de extensión de la Universidad Nacional, con auditorio semicircular y volúmenes articulados sobre el talud (626 m²).",
  },
  {
    categoria: "diseno",
    anio: "2007",
    rol: "Diseño Arquitectónico",
    empresa: "Diseño Arquitectónico Cabaña Villamayara",
    lugar: "Conjunto Campestre Las Margaritas, Palestina, Caldas",
    descripcion: "Diseño arquitectónico de una cabaña en ladrillo a la vista, con cubierta a dos aguas y torreón cilíndrico (295 m²).",
  },

  // ---------------- Construcción y Obra ----------------
  {
    categoria: "obra",
    anio: "2021 – 2026",
    rol: "Coordinador / Residente de Interventoría",
    empresa: "Consorcio Interprosperidad — Gavinco Ingenieros Consultores S.A.S.",
    lugar: "Filadelfia, Aranzazu, Belalcázar, Anserma (Caldas), La Virginia, Santa Rosa (Risaralda)",
    descripcion:
      "Interventoría integral (técnica, administrativa, legal, financiera y ambiental) a contratos del Departamento para la Prosperidad Social (DPS): mejoramiento de 122 viviendas, 3.260 ml de vías urbanas y rurales y 5.207 m² en plaza de mercado y equipamiento comunitario. Control de cronogramas, presupuestos, actas de obra y cumplimiento contractual.",
  },
  {
    categoria: "obra",
    anio: "2020 – 2021",
    rol: "Residente de Interventoría",
    empresa: "Consorcio Prosperidad Colombia",
    lugar: "Belalcázar, Caldas",
    descripcion:
      "Interventoría técnica y administrativa a proyectos de mejoramiento de vivienda DPS (52 viviendas).",
  },
  {
    categoria: "obra",
    anio: "2018 – 2020",
    rol: "Coordinador de Obra",
    empresa: "Gálvez y Garrido Grupo Gerencial S.A.S.",
    lugar: "Manizales, Caldas",
    descripcion:
      "Coordinación de obra, implementación BEP-BIM, revisión de diseños y presupuestos (4.973 m²). Gestión de licencias urbanísticas y procesos licitatorios para vivienda y ampliación del Centro Comercial MP Manizales.",
  },
  {
    categoria: "obra",
    anio: "2018",
    rol: "Director de Interventoría",
    empresa: "Consorcio Cigecon 2018",
    lugar: "Manizales, Caldas",
    descripcion:
      "Interventoría técnica, administrativa y financiera para la adecuación física, dotación, redes eléctricas y climatización de la oficina Colpensiones Manizales (674 m²).",
  },
  {
    categoria: "obra",
    anio: "2014 – 2015",
    rol: "Residente de Interventoría",
    empresa: "Civing Ingenieros Contratistas S. en C.",
    lugar: "Manizales, Caldas",
    descripcion:
      "Interventoría técnica, administrativa y financiera para obras de adecuación, reparación, construcción, mantenimiento y dotación de la sede DIAN Manizales (2.846 m²).",
  },
  {
    categoria: "obra",
    anio: "2013 – 2014",
    rol: "Residente de Obra",
    empresa: "Constructora Berlín S.A.S.",
    lugar: "Villamaría, Caldas",
    descripcion:
      "Coordinación de la construcción de 200 viviendas en sistema industrializado y zona social: control técnico, cantidades, APU, nómina, personal, planos, materiales y equipos. Conjunto Residencial Valles de la Florida (84.674 m²).",
  },
  {
    categoria: "obra",
    anio: "2013 – 2014",
    rol: "Director de Obra",
    empresa: "Arquitecto Héctor Jaramillo Botero",
    lugar: "Manizales, Caldas",
    descripcion: "Construcción de locales comerciales y vivienda unifamiliar (185 m²).",
  },
  {
    categoria: "obra",
    anio: "2013",
    rol: "Residente de Obra",
    empresa: "Conmezclas S.A.",
    lugar: "Medellín, Antioquia",
    descripcion:
      "Construcción de la Institución Educativa Doce de Octubre: control técnico, presupuesto, cantidades de obra, coordinación de personal, materiales y ejecución (2.382 m²).",
  },
  {
    categoria: "obra",
    anio: "2011 – 2013",
    rol: "Director de Obra",
    empresa: "Estación de Servicio Energy S.A.S.",
    lugar: "Quibdó, Chocó",
    descripcion:
      "Dirección arquitectónica y coordinación de la construcción de una estación de servicio: diseño, especificaciones técnicas, presupuesto, gestión documental y ejecución de obras civiles (5.251 m²).",
  },
  {
    categoria: "obra",
    anio: "2009 – 2011",
    rol: "Director de Proyectos / Residente de Obra",
    empresa: "Cuervo Construcciones LTDA.",
    lugar: "El Rosal, Cundinamarca",
    descripcion:
      "Supervisión técnica del Centro de Espiritualidad María Reina de la Paz (1.568 m²); posteriormente dirección y coordinación de proyectos, diseño arquitectónico, cuantificación y presupuestos.",
  },
  {
    categoria: "obra",
    anio: "2008",
    rol: "Auxiliar de Residencia de Obra",
    empresa: "Universidad Nacional de Colombia — Sede Manizales",
    lugar: "Manizales, Caldas",
    descripcion:
      "Apoyo al plan de conservación de edificios del Campus El Cable y auxiliar de residencia en la restauración de la cafetería de la Facultad de Arquitectura (802 m²).",
  },
];

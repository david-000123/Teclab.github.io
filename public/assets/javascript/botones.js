document.addEventListener("DOMContentLoaded", () => {
  const langButtons = document.querySelectorAll(".lang-btn");

  // Traducciones
  const translations = {
  ES: {
    // Menú de navegación
    trabajar: "Inicio",
    servicios: "Servicios",
    cultura: "Cultura",
    blog: "Trabajar",
    // Hero section
    hero_subtitle: "UX/UI y desarrollo",
    hero_title1: "Diseñamos",
    hero_title2: "soluciones digitales",
    hero_desc:
      "Desarrollamos soluciones digitales innovadoras que impulsan el crecimiento de las empresas y conectan con sus clientes. Somos el aliado confiable que convierte ideas en realidades tecnológicas.",
    cta: "Iniciar un proyecto",
    // Secciones de servicio
    servicio_marca: "Servicios de marca",
    marca_desc1: "Conocimiento de usuario y marca",
    marca_desc2: "Contenido funcional y estratégico",
    marca_desc3: "Iteración guiada por datos",
    web_a_medida: "Web a medida",
    web_desc1: "Código limpio y escalable",
    web_desc2: "Interfaces responsivas y accesibles",
    web_desc3: "Optimización y rendimiento web",
    backend_dev: "Desarrollo back-end",
    backend_desc1: "Arquitectura robusta y escalable",
    backend_desc2: "Gestión eficiente de datos",
    backend_desc3: "Seguridad y rendimiento óptimo",
    estrategia_digital: "Consultoría Digital",
    estrategia_desc1: "Análisis y diagnóstico digital",
    estrategia_desc2: "Estrategia y canalización",
    estrategia_desc3: "Monitoreo y mejora continua",
    disenio_movimiento: "Diseño de movimiento",
    disenio_desc1: "Guionismo",
    disenio_desc2: "Diseño gráfico",
    disenio_desc3: "Composición y animaciones",
    tipografia: "Tipografía",
    tipografia_desc1: "Creación",
    tipografia_desc2: "Personalización",
    tipografia_desc3: "Letras",
    culture_title_solid:"SOBRE",
    culture_title_outline:"NOSOTROS",
    culture_subtitle:"HOLA DESDE BUENOS AIRES",
    culture_section_heading:"Quiénes somos y qué hacemos",
    culture_description:"Somos una agencia digital que fusiona tecnología, creatividad y estrategia para ofrecer soluciones a medida. Nos especializamos en crear experiencias digitales que se adaptan perfectamente a las necesidades de tu marca y negocio. Desde el desarrollo de sitios web y tiendas online hasta la automatización de procesos y la creación de productos digitales personalizados,nuestra misión es simplificar tu día a día, mejorar la experiencia de tus clientes y potenciar tu presencia digital.Juntos, descubrimos nuevas oportunidades y diseñamos estrategias para llevar tu crecimiento digital al siguiente nivel.",
    texto_principal_p:"La visión estratégica no es solo nuestro punto de partida: es la forma en que concebimos y ejecutamos cada proyecto. Para nosotros, la tecnología no es un fin, sino un medio para construir marcas potentes, relevantes y memorables. A través del branding, el desarrollo web y soluciones digitales innovadoras, ayudamos a las marcas a expresar su identidad, conectar con sus audiencias y evolucionar con agilidad en mercados cada vez más dinámicos. La creatividad impulsa lo que hacemos. La estrategia le da dirección. Y la tecnología lo hace posible.",
    nombre:"KACZ JORGE DAVID, FOUNDADOR",
    title_work_h2: "TRABAJA CON NOSOTROS",
    work_vertical_text_left:"INSPIRACIÓN",
    work_vertical_text_right:"IMAGINACIÓN",
    // footer
    inicio_section_one:"INICIO",
    servicio_section_two: "SERVICIO",
     left_h2_span:"Estamos",
    center_h2_span:"disponibles para",
    right_h2_span:"resolver tus dudas.",
    footer_contact_section:"Redes sociales",
    escríbenos_aquí:"Escríbenos aquí",
    wasaap:"Consultas directas Whatsapp",
    footer_form_title:"¿Estás preparado para iniciar tu proyecto?",
    enviar_mensaje:"Enviar mensaje",
    Name:"Nombre",
    Phone:"Telefono",
    serviss:"Tipo de servicio o profesión requerido",
    pri:"",
    priv:"",
  },
  EN: {
    // Menú de navegación
    trabajar: "Home",
    servicios: "Services",
    cultura: "Culture",
    blog: "Work",
    // Hero section
    hero_subtitle: "UX/UI and Development",
    hero_title1: "We design",
    hero_title2: "digital solutions",
    hero_desc:
      "JDKit develops innovative digital solutions that drive business growth and connect with customers. We are the trusted partner that turns ideas into technological realities.",
    cta: "Start a project",
    // Secciones de servicio
    servicio_marca: "Brand Services",
    marca_desc1: "User and brand knowledge",
    marca_desc2: "Functional and strategic content",
    marca_desc3: "Data-driven iteration",
    web_a_medida: "Custom Web Development",
    web_desc1: "Clean and scalable code",
    web_desc2: "Responsive and accessible interfaces",
    web_desc3: "Web optimization and performance",
    backend_dev: "Back-end Development",
    backend_desc1: "Robust and scalable architecture",
    backend_desc2: "Efficient data management",
    backend_desc3: "Security and optimal performance",
    estrategia_digital: "Digital Strategy Service",
    estrategia_desc1: "Digital analysis and diagnosis",
    estrategia_desc2: "Strategy and channeling",
    estrategia_desc3: "Continuous monitoring and improvement",
    disenio_movimiento: "Motion Design",
    disenio_desc1: "Screenwriting",
    disenio_desc2: "Graphic design",
    disenio_desc3: "Composition and animation",
    tipografia: "Typography",
    tipografia_desc1: "Creation",
    tipografia_desc2: "Customization",
    tipografia_desc3: "Letters",
    // Secciones de cultura
    culture_title_solid:"ABOUT",
    culture_title_outline:"US",
    culture_subtitle:"HELLO FROM BUENOS AIRES",
    culture_section_heading: "Who we are and what we do",
    culture_description:"We are a digital agency that combines technology, creativity, and strategy to deliver tailor-made solutions. We specialize in creating digital experiences that perfectly align with the needs of your brand and business. From website and online store development to process automation and the creation of custom digital products, our mission is to simplify your day-to-day operations, enhance your customer experience, and strengthen your digital presence. Together, we discover new opportunities and design strategies to take your digital growth to the next level.",
    texto_principal_p:"Strategic vision is not just our starting point: it is how we conceive and execute every project. For us, technology is not an end in itself, but a means to build powerful, relevant, and memorable brands. Through branding, web development, and innovative digital solutions, we help brands express their identity, connect with their audiences, and evolve with agility in increasingly dynamic markets. Creativity drives what we do. Strategy gives it direction. And technology makes it possible",
    nombre:"KACZ JORGE DAVID, FOUNDER",
    title_work_h2: "WORK WITH US",
    work_vertical_text_left:"INSPIRATION",
    work_vertical_text_right:"IMAGINATION",
    // footer
    inicio_section_one:"START",
    servicio_section_two: "SERVICE",
    left_h2_span:"We are",
    center_h2_span:"available to",
    right_h2_span:"answer your questions.",
    footer_contact_section:"Social networks",
    escríbenos_aquí:"Write to us here",
    wasaap:"Direct inquiries via WhatsApp",
    footer_form_title:"Are you ready to start your project?",
    enviar_mensaje:"Send message",
    Name:"Name",
    Phone:"Phone",
    serviss:"Type of service or profession required",
  },
};


  // Asignar claves de idioma a los textos existentes
  const elementsMap = {
    // Menú de navegación
    trabajar: document.querySelector(".nav-menu li:nth-child(1) a"),
    servicios: document.querySelector(".nav-menu li:nth-child(2) a"),
    cultura: document.querySelector(".nav-menu li:nth-child(3) a"),
    blog: document.querySelector(".nav-menu li:nth-child(4) a"),
    contacto: document.querySelector(".nav-menu li:nth-child(5) a"),
    // Hero section
    hero_subtitle: document.querySelector(".hero-subtitle"),
    hero_title1: document.querySelector(".hero-title .line1"),
    hero_title2: document.querySelector(".hero-title .line2"),
    hero_desc: document.querySelector(".hero-description"),
    cta: document.querySelector(".hero-cta"),
    // Secciones de servicio
    servicio_marca: document.querySelector(".service-card:nth-child(1) h2"),
    marca_desc1: document.querySelector(".service-card:nth-child(1) p:nth-child(2)"),
    marca_desc2: document.querySelector(".service-card:nth-child(1) p:nth-child(3)"),
    marca_desc3: document.querySelector(".service-card:nth-child(1) p:nth-child(4)"),
    web_a_medida: document.querySelector(".service-card:nth-child(2) h2"),
    web_desc1: document.querySelector(".service-card:nth-child(2) p:nth-child(2)"),
    web_desc2: document.querySelector(".service-card:nth-child(2) p:nth-child(3)"),
    web_desc3: document.querySelector(".service-card:nth-child(2) p:nth-child(4)"),
    backend_dev: document.querySelector(".service-card:nth-child(3) h2"),
    backend_desc1: document.querySelector(".service-card:nth-child(3) p:nth-child(2)"),
    backend_desc2: document.querySelector(".service-card:nth-child(3) p:nth-child(3)"),
    backend_desc3: document.querySelector(".service-card:nth-child(3) p:nth-child(4)"),
    estrategia_digital: document.querySelector(".service-card:nth-child(4) h2"),
    estrategia_desc1: document.querySelector(".service-card:nth-child(4) p:nth-child(2)"),
    estrategia_desc2: document.querySelector(".service-card:nth-child(4) p:nth-child(3)"),
    estrategia_desc3: document.querySelector(".service-card:nth-child(4) p:nth-child(4)"),
    disenio_movimiento: document.querySelector(".service-card:nth-child(5) h2"),
    disenio_desc1: document.querySelector(".service-card:nth-child(5) p:nth-child(2)"),
    disenio_desc2: document.querySelector(".service-card:nth-child(5) p:nth-child(3)"),
    disenio_desc3: document.querySelector(".service-card:nth-child(5) p:nth-child(4)"),
    tipografia: document.querySelector(".service-card:nth-child(6) h2"),
    tipografia_desc1: document.querySelector(".service-card:nth-child(6) p:nth-child(2)"),
    tipografia_desc2: document.querySelector(".service-card:nth-child(6) p:nth-child(3)"),
    tipografia_desc3: document.querySelector(".service-card:nth-child(6) p:nth-child(4)"),
    // Secciones de cultura
    culture_title_solid: document.querySelector(".culture-title-solid"),
    culture_title_outline: document.querySelector(".culture-title-outline"),
    culture_subtitle: document.querySelector(".culture-subtitle"),
    culture_section_heading: document.querySelector(".culture-section-heading"),
    culture_description: document.querySelector(".culture-description"),
    texto_principal_p: document.querySelector(".texto-principal-p"),
    nombre: document.querySelector(".nombre"),
    title_work_h2: document.querySelector(".title-work-h2"),
    work_vertical_text_left: document.querySelector(".work-vertical-text-left"),
    work_vertical_text_right: document.querySelector(".work-vertical-text-right"),
    // footer
    inicio_section_one: document.querySelector(".inicio-section-one"),
    servicio_section_two: document.querySelector(".servicio-section-two"),
    left_h2_span: document.querySelector(".left-h2-span"),
    center_h2_span: document.querySelector(".center-h2-span"),
    right_h2_span: document.querySelector(".right-h2-span"),
    footer_contact_section: document.querySelector(".footer_contact_section"),
    escríbenos_aquí: document.querySelector(".escríbenos_aquí"),
     wasaap: document.querySelector(".wasaap"),
    footer_form_title: document.querySelector(".footer-form-title"),
    enviar_mensaje: document.querySelector(".enviar_mensaje"),
    Name: document.querySelector(".Name"),
    Phone: document.querySelector(".Phone"),
    serviss: document.querySelector(".serviss"),
    pri: document.querySelector(".pri"),
    priv: document.querySelector(".priv"),
    
  };

  function setLanguage(lang) {
    // Cambiar los textos según el idioma seleccionado
    for (const key in elementsMap) {
      if (elementsMap[key]) {
        elementsMap[key].textContent = translations[lang][key];
      }
    }
  }

  function toggleActive(button) {
    langButtons.forEach((btn) => {
      btn.classList.add("inactive");
      btn.style.background = "transparent";
    });

    button.classList.remove("inactive");
    button.style.background = "#4ade80";
  }

  langButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const lang = btn.textContent.trim();
      toggleActive(btn);
      setLanguage(lang);
    });
  });

  // Idioma inicial (ES por defecto)
  const defaultBtn = document.querySelector(".lang-btn:not(.inactive)");
  if (defaultBtn) {
    setLanguage(defaultBtn.textContent.trim());
  }
});


// Pausa para simular la escritura
    const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

    // Clase personalizada para el efecto de tipeo
    class TypeAsync extends HTMLElement {
      constructor() {
        super();
        // Shadow DOM opcional: si quieres mantenerlo en el DOM principal, quita esta línea y usa this directly
        this.attachShadow({ mode: 'open' });
        this.textSpan = document.createElement('span');
        this.shadowRoot.appendChild(this.textSpan);
      }

      get typeInterval() {
        const randomMs = 100 * Math.random();
        return randomMs < 50 ? 10 : randomMs;
      }

      async type(text) {
        for (let char of text) {
          this.textSpan.textContent += char;
          await sleep(this.typeInterval);
        }
      }

      async delete(text) {
        for (let _ of text) {
          this.textSpan.textContent = this.textSpan.textContent.slice(0, -1);
          await sleep(this.typeInterval);
        }
      }

      clear() {
        this.textSpan.textContent = "";
      }
    }

    // Registrar el nuevo elemento
    customElements.define('type-async', TypeAsync);

    // Iniciar animación
    async function init() {
      const node = document.querySelector("#type-text");
      
      // Espera inicial
      await sleep(1000);
      node.clear();

      await node.type("Work as:");

      const words = ["Graphic Designers", "UX/UI Designer", "Web Developer", "Account Manager", "Community Manager", "Digital Marketing Specialist","Project Manager"];

      while (true) {
        for (let word of words) {
          await node.type(word);
          await sleep(2000);
          await node.delete(word);
        }
      }
    }

    init();
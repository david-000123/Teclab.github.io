// Referencias básicas
const modal = document.getElementById("modalLegal");
const modalText = document.getElementById("modal-text");
const closeBtn = modal.querySelector(".close");

// Textos legales
const textos = {
  privacidad: `
    <h2>Política de Privacidad</h2>
    <p>
<b>Última actualización: [21/10/2025]</b><br><br>
JDKit (en adelante, “la Agencia”), comprometida con la protección de los datos personales de los usuarios y en cumplimiento de la Ley 25.326 de Protección de los Datos Personales, informa los términos bajo los cuales se recolectan, utilizan y protegen los datos personales que los usuarios brindan voluntariamente a través de nuestro sitio web o canales de contacto.<br><br>
<b>1. Responsable del Tratamiento</b><br><br>
JDKit actúa como responsable del tratamiento de los datos personales recolectados. Actualmente, no contamos con dirección física establecida. Para cualquier consulta o solicitud relacionada con sus datos personales, los usuarios pueden escribir a nuestro correo electrónico (en desarrollo).<br><br>
<b>2. Datos recolectados</b><br><br>
Reunimos únicamente los datos personales necesarios para cumplir con nuestras funciones, los cuales incluyen:<br>
•	Nombre completo<br>
•	Dirección de correo electrónico<br>
•	Número de teléfono<br>
•	Tipo de servicio solicitado<br>
No es necesario crear una cuenta ni iniciar sesión para acceder a nuestros servicios.<br><br>
<b>3. Finalidad del tratamiento</b><br><br>
Los datos personales son recolectados con las siguientes finalidades:<br>
•	Contactar a clientes interesados en nuestros servicios de diseño y desarrollo digital.<br>
•	Establecer comunicación con profesionales que deseen unirse a nuestro equipo o colaborar en proyectos.<br>
•	Responder consultas o solicitudes realizadas a través de formularios o medios de contacto.<br><br>
<b>4. Cesión de datos a terceros</b><br><br>
JDKit no comparte, cede, vende ni transfiere los datos personales recolectados a terceros, salvo requerimiento legal de autoridad competente.<br><br>
<b>5. Cookies y tecnologías similares</b><br><br>
Actualmente, no utilizamos cookies ni otras tecnologías de rastreo en nuestro sitio web. En caso de implementarse en el futuro, se notificará y solicitará el consentimiento correspondiente conforme a la normativa vigente.<br><br>
<b>6. Derechos de los titulares</b><br><br>
Los usuarios tienen derecho a:<br>
•	Acceder a los datos personales que poseemos sobre ellos.<br>
•	Solicitar la rectificación, actualización o supresión de dichos datos.<br>
•	Retirar el consentimiento otorgado previamente.<br>
Para ejercer estos derechos, deben enviar un correo electrónico a nuestro contacto institucional solicitando la acción correspondiente.<br><br>
<b>7. Seguridad de la información</b><br><br>
JDKit implementa medidas técnicas razonables para proteger los datos personales, incluyendo la protección contra ataques DDoS mediante el uso de nameservers proporcionados por Cloudflare.<br><br>
<b>8. Modificaciones a esta política</b><br><br>
Nos reservamos el derecho de actualizar esta Política de Privacidad en función de modificaciones normativas o cambios operativos. En caso de cambios sustanciales, los usuarios serán notificados por correo electrónico.
</p>
  `,
  terminos: `
    <h2>Términos y Condiciones</h2>
    <p>
<b>Última actualización: [21/10/2025]</b><br><br>
El presente documento establece los términos y condiciones aplicables al acceso y uso del sitio web y los servicios brindados por JDKit.<br>
1. Aceptación de los términos
Al acceder a nuestro sitio o interactuar con JDKit, el usuario acepta plenamente los presentes términos y condiciones.<br><br>
<b>2. Servicios ofrecidos</b><br><br>
JDKit es una agencia especializada en soluciones digitales que ofrece los siguientes servicios:<br>
•	Diseño Gráfico<br>
•	Diseño UX/UI<br>
•	Desarrollo Web<br>
•	Gestión de Cuentas<br>
•	Community Management<br>
•	Marketing Digital<br>
•	Gestión de Proyectos<br><br>
<b>3. Uso del sitio</b><br><br>
Los usuarios se comprometen a utilizar el sitio y los servicios de forma lícita, respetando la legislación vigente y los derechos de terceros. Queda prohibido el uso del sitio para actividades ilícitas, fraudulentas o que puedan dañar la imagen o funcionamiento de JDKit.<br><br>
<b>4. Propiedad intelectual</b><br><br>
Todo el contenido del sitio, incluyendo pero no limitado a textos, imágenes, logotipos, diseños, código fuente y documentación, es propiedad de JDKit o se encuentra debidamente licenciado para su uso. Queda prohibida su reproducción, distribución o modificación sin autorización expresa.<br><br>
<b>5. Protección de datos personales</b><br><br>
El tratamiento de los datos personales recolectados por JDKit se encuentra regulado por nuestra Política de Privacidad, la cual forma parte integral de estos Términos y Condiciones.<br><br>
<b>6. Responsabilidad</b><br><br>
JDKit no será responsable por daños derivados del uso indebido del sitio, interrupciones del servicio, accesos no autorizados o fallos técnicos ajenos a nuestro control razonable. <br><br>
<b>7. Modificaciones </b><br><br>
JDKit se reserva el derecho de modificar los presentes Términos y Condiciones en cualquier momento. Los cambios serán notificados por correo electrónico si afectan de forma sustancial la relación con los usuarios.<br><br>
<b>8. Legislación aplicable y jurisdicción</b><br><br>
Estos Términos y Condiciones se rigen por las leyes de la República Argentina. En caso de controversia, las partes se someten a la jurisdicción de los tribunales ordinarios de la Ciudad Autónoma de Buenos Aires, con renuncia expresa a cualquier otro fuero que pudiera corresponder.
</p>
  `
};
 
// Función para mostrar el contenido en el modal
function mostrarContenido(tipo) {
  modalText.innerHTML = textos[tipo];
  modal.style.display = "block";

  // Bloquear el desplazamiento del fondo
  document.body.style.overflow = 'hidden';

  // Medir y aplicar el relleno derecho para evitar el salto de contenido
  const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
  document.body.style.paddingRight = `${scrollbarWidth}px`;

  // Reiniciar opacidades al abrir
  modalText.querySelectorAll("*").forEach(el => {
    el.style.opacity = 0;
    el.style.transform = "translateY(20px)";
  });
  revealOnScroll(); // Revelar elementos visibles al abrir
}

// Enlaces que abren el modal
document.getElementById("linkPrivacidad").addEventListener("click", e => {
  e.preventDefault();
  mostrarContenido("privacidad");
});

document.getElementById("linkCondiciones").addEventListener("click", e => {
  e.preventDefault();
  mostrarContenido("terminos");
});

// Cerrar modal
closeBtn.onclick = () => {
  modal.style.display = "none";

  // Restaurar el desplazamiento del fondo y el relleno derecho
  document.body.style.overflow = '';
  document.body.style.paddingRight = '';
};
window.onclick = e => {
  if (e.target === modal) {
    modal.style.display = "none";

    // Restaurar el desplazamiento del fondo y el relleno derecho
    document.body.style.overflow = '';
    document.body.style.paddingRight = '';
  }
};

// Función para revelar elementos al hacer scroll
function revealOnScroll() {
  const elements = modalText.children;
  const containerTop = modalText.scrollTop;
  const containerHeight = modalText.clientHeight;

  for (let el of elements) {
    const elTop = el.offsetTop;
    const elHeight = el.offsetHeight;

    // Si el elemento entra en la zona visible
    if (elTop < containerTop + containerHeight) {
      el.style.opacity = 1;
      el.style.transform = "translateY(0)";
    }
  }
}

// Escuchar scroll dentro del contenedor
modalText.addEventListener("scroll", revealOnScroll);
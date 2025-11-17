document.addEventListener("DOMContentLoaded", () => {
  const loader = document.getElementById("lading");
  const content = document.getElementById("content-spinner");
  const models = document.querySelectorAll("model-viewer");
  const images = document.querySelectorAll("img");

  const promises = [];

  //Esperar que todas las imágenes normales terminen de cargar
  images.forEach((img) => {
    if (!img.complete) {
      promises.push(
        new Promise((resolve) => {
          img.addEventListener("load", resolve);
          img.addEventListener("error", resolve);
        })
      );
    }
  });

  //Esperar que cada modelo 3D renderice su primer frame (poster-change)
  models.forEach((model) => {
    promises.push(
      new Promise((resolve) => {
        model.addEventListener(
          "poster-change",
          () => {
            console.log(`Modelo renderizado: ${model.id || "sin id"}`);
            resolve();
          },
          { once: true }
        );

        // Timeout individual por si falla
        setTimeout(resolve, 1000);
      })
    );
  });

  //Esperar window.load para HTML, CSS y recursos pesados
  promises.push(
    new Promise((resolve) => {
      if (document.readyState === "complete") resolve();
      else window.addEventListener("load", resolve);
    })
  );

  //Cuando todo esté listo, ocultar loader
  Promise.all(promises).then(() => {
    loader.classList.add("fade-out");
    setTimeout(() => {
      loader.style.display = "none";
      content.style.display = "block";
    }, 600);
  });

  //Timeout global de seguridad
  setTimeout(() => {
    if (loader.style.display !== "none") {
      console.warn("Timeout global alcanzado, ocultando loader");
      loader.classList.add("fade-out");
      setTimeout(() => {
        loader.style.display = "none";
        content.style.display = "block";
      }, 600);
    }
  }, 8000);
});
function checkHideLoader() {
  if (minTimePassed && modelLoaded && modelVisible && !loaderHidden) {
    loaderHidden = true;
    loader.classList.add("fade-out");

    // Mostrar contenido suavemente
    setTimeout(() => {
      content.classList.add("visible");
    }, 800); // espera a que termine el fade-out del loader
  }
}










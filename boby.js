document.addEventListener("DOMContentLoaded", function () {

    const imagenes = document.querySelectorAll(".galeria img");

    imagenes.forEach(img => {

        img.addEventListener("click", () => {

            alert(`Has hecho clic en: ${img.alt}`);

        });

    });

}); 
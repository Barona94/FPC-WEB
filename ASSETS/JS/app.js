document.addEventListener("DOMContentLoaded", () => {
    const btnArriba = document.getElementById("btn-arriba");

    if (btnArriba) {
        btnArriba.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }
});
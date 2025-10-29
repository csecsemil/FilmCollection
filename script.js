// osszes gombmegkeresese
const buttons = document.querySelectorAll("gomb");

buttons.forEach((buttons, index) => {
    button.addEventListener("click", () => {
        const content = button.nextElementSibling;
        content.classList.toggle("aktiv");
    });
});
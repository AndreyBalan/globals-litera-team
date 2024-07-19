const selectElement = document.getElementById("subject");
let isOpen = false;

selectElement.addEventListener("mousedown", function () {
    isOpen = !isOpen;
    if (isOpen) {
        this.classList.add("open");
    } else {
        this.classList.remove("open");
    }
});

selectElement.addEventListener("blur", function () {
    this.classList.remove("open");
    isOpen = false;
});

selectElement.addEventListener("change", function () {
    this.classList.remove("open");
    isOpen = false;
});

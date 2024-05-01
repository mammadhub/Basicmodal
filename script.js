const modal = document.querySelector("#mymodal");
const closeButton = document.querySelector(".click");

function openModal() {
    modal.style.display = "block";
}

function closeModal() {
    modal.style.display = "none";
}
closeButton.addEventListener("click",function() {
    modal.style.display = "none";
})
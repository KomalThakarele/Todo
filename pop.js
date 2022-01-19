// const openModalButton = document.querySelectorAll("[data-modal-target]")
// const openModalButton = document.querySelectorAll("[data-close-button]")
// const overlay = document.getElementById("overlay")

// openModalButton.forEach(button => {
//     button.addEventListener("click", ()=> {
//         const modal = document.querySelector(button.dataset.modalTarget)
//         openModalButton(modal)
//     })
// })

// overlay.addEventListener("click", () => {
//     const modals = document.querySelectorAll(".modal.active")
//     modals.forEach(modal => {
//         closeModal(modal)
//     })
// })

// closeModalButton.forEach(button => {
//     button.addEventListener("click", ()=> {
//         const modal = button.closest("modal")
//         closeModal(modal)
//     })
// })

// function openModalButton(modal) {
//     if (modal == null) return
//     modal.classList.add("active")
//     overlay.classList.add("active")
// }

// function classModal(modal) {
//     if (modal == null) return
//     modal.classList.remove("active")
//     overlay.classList.remove("active")
// }

///////////////////////////////////////////

function togglePopup() {
    document.getElementById("popup-1").classList.toggle("active");
}
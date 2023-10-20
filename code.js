const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const openModalbtn = document.querySelector('.quick_view');

const closebtn = document.querySelector(".close_btn");
const imgContainer = document.querySelector('.change_image');

const allImages = document.querySelectorAll(".small_img_containers img");

openModalbtn.addEventListener("click", (e) => {
    e.preventDefault();
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
})

const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};
allImages.forEach((image) => {
    image.addEventListener('click', () => {
        imgContainer.src = image.src;
    });
});
overlay.addEventListener("click", (e) => {
    e.preventDefault();
    closeModal();
})
closebtn.addEventListener("click", (e) => {
    e.preventDefault();
    closeModal();
})
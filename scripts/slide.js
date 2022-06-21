let sliderTrigger = document.querySelectorAll("li.trigger");
const sliders = document.querySelectorAll(".slide");

function activateSliders() {
    sliderTrigger.forEach((trigger) => {
        trigger.addEventListener("click", function () {
            sliderTrigger.forEach((btn) => btn.classList.remove("active"));
            trigger.classList.add("active");
            const activeTrigger = document.querySelector(".trigger.active");
            var index = [].indexOf.call(sliderTrigger, activeTrigger);
            sliders.forEach((slide) => {
                slide.classList.remove("active");
            });
            sliders[index].classList.add("active");
        });
    });
}
activateSliders();

class ChangeCurrentProduct {
  btnsEl = document.querySelectorAll(".smallProdImg");
  prodEl = document.querySelectorAll(".slide");
  slideImg = document.querySelectorAll(".slide");

  addHandlerRender(handler) {
    document.addEventListener(
      "click",
      function (e) {
        const btn = e.target.closest(".smallProdImg");
        if (!btn) return;

        this.slideImg.forEach((slide, i) => {
          slide.style.transform = `translateX(${100 * (i - btn.id)}%)`;
        });
        this.btnsEl.forEach((btn) => btn.classList.remove("currentImage"));
        // btnsEl
        e.target.classList.add("currentImage");
        handler(btn.id);
      }.bind(this)
    );
  }
}
export default new ChangeCurrentProduct();

class controlSlide {
  slide = document.querySelectorAll(".slide");
  btnsEl = document.querySelectorAll(".smallProdImg");
  lightBoxSlide = document.querySelectorAll(".lightBoxSlide");
  maxSlide = this.slide.length - 1;
  curClick = 0;
  initSlide() {
    this.slide.forEach((slide, i) => {
      slide.style.transform = `translateX(${100 * i}%)`;
      setTimeout(function () {
        slide.style.transition = "transform .3s";
      }, 0.2);
    });
  }

  renderCurrentProd(e) {
    const btn = e.target.closest(".controller");
    if (!btn) return;
    if (btn.classList.contains("prev")) {
      return this.curClick === 0
        ? (this.curClick = this.maxSlide)
        : this.curClick--;
    } else
      return this.curClick >= this.maxSlide
        ? (this.curClick = 0)
        : this.curClick++;
  }

  checkCurrentMobileProd(currProd) {
    if (currProd === null) return;
    this.btnsEl.forEach((btn) => {
      if (+btn.id === currProd) {
        btn.classList.add("currentImage");
      } else btn.classList.remove("currentImage");
    });
  }

  checkDesktopClick(click) {
    if (!click) return;
    this.curClick = click;
  }
  addHandlerRender(handler) {
    document.addEventListener(
      "click",
      function (e) {
        const btn = e.target.closest(".controller");
        if (!btn) return;
        this.renderCurrentProd(e);
        if (btn) {
          this.slide.forEach((slide, i) => {
            slide.style.transform = `translateX(${100 * (i - this.curClick)}%)`;
          });
        }
        handler(this.curClick);
      }.bind(this)
    );
  }
}
export default new controlSlide();

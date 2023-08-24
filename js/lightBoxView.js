class lightBoxSlide {
  lightBoxSlide = document.querySelectorAll(".lightBoxSlide");
  btnsEl = document.querySelectorAll(".lightBoxSmallProdImg");
  curClick = 0;
  maxSlide = this.lightBoxSlide.length - 1;
  initSlide() {
    this.lightBoxSlide.forEach((slide, i) => {
      slide.style.transform = `translateX(${100 * i}%)`;
      setTimeout(function () {
        slide.style.transition = "transform .3s";
      }, 0.2);
    });
  }

  checkCurrentMobileProd(currProd) {
    if (currProd === null) return;
    this.btnsEl.forEach((btn) => {
      if (+btn.id === currProd) {
        btn.classList.add("currentImage");
      } else btn.classList.remove("currentImage");
    });
  }

  renderCurrentProd(e) {
    const btn = e.target.closest(".lightBoxController");
    if (!btn) return;
    if (btn.classList.contains("lightBoxPrev")) {
      return this.curClick === 0
        ? (this.curClick = this.maxSlide)
        : this.curClick--;
    } else
      return this.curClick >= this.maxSlide
        ? (this.curClick = 0)
        : this.curClick++;
  }

  addHandlerRender(handler) {
    document.addEventListener(
      "click",
      function (e) {
        const btn = e.target.closest(".lightBoxController");
        if (!btn) return;
        this.renderCurrentProd(e);
        if (btn) {
          this.lightBoxSlide.forEach((slide, i) => {
            slide.style.transform = `translateX(${100 * (i - this.curClick)}%)`;
          });
        }

        handler(this.curClick);
      }.bind(this)
    );
  }

  changeCurrSlide() {
    document.addEventListener(
      "click",
      function (e) {
        const btn = e.target.closest(".lightBoxSmallProdImg");
        if (!btn) return;
        this.curClick = btn.id;
        this.lightBoxSlide.forEach((slide, i) => {
          slide.style.transform = `translateX(${100 * (i - btn.id)}%)`;
        });
        this.btnsEl.forEach((btn) => btn.classList.remove("currentImage"));
        e.target.classList.add("currentImage");
      }.bind(this)
    );
  }
}

export default new lightBoxSlide();

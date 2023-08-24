class displayLightBox {
  lightBoxEl = document.querySelector(".lightBox");
  showLightBox() {
    document.addEventListener(
      "click",
      function (e) {
        const btn = e.target.closest(".slide");
        if (!btn) return;
        if (window.innerWidth >= 1000)
          this.lightBoxEl.classList.toggle("hideLightBox");
      }.bind(this)
    );
  }

  closeLightBox() {
    document.addEventListener(
      "click",
      function (e) {
        const btn = e.target.closest(".closeLightBox");
        if (!btn) return;
        this.lightBoxEl.classList.add("hideLightBox");
      }.bind(this)
    );
  }
}

export default new displayLightBox();

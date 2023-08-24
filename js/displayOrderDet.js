class DisplayOrderDet {
  parentEl = document.querySelector(".orderDetails");
  ShowOrderEl = document.querySelector(".cartDiv");

  checkOrderDet(order) {
    if (order !== 0) {
      this.ShowOrderEl.classList.remove("emptyOrder");
      return;
    } else {
      this.ShowOrderEl.classList.add("emptyOrder");
      this.ShowOrderEl.innerHTML = "Your cart is empty";
    }
  }
  addHandlerRender(handler) {
    document.addEventListener(
      "click",
      function (e) {
        const btn = e.target.closest(".cartCont");
        if (!btn) return;
        this.parentEl.classList.toggle("showOrder");
        handler();
      }.bind(this)
    );
  }

  removeOrderDet() {
    document.addEventListener(
      "click",
      function (e) {
        if (
          this.parentEl.classList.contains("showOrder") &&
          !e.target.closest(".orderDetails") &&
          !e.target.closest(".cartCont")
        ) {
          this.parentEl.classList.remove("showOrder");
        }
      }.bind(this)
    );
  }
}

export default new DisplayOrderDet();

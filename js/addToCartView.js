class AddToCart {
  showOrder = document.querySelector(".cartCont p");
  OrderEl = document.querySelector(".cartDiv");
  checkOrder(order) {
    if (order !== 0) {
      this.showOrder.classList.remove("hide");
      this.showOrder.innerHTML = order;
      this.OrderEl.classList.remove("emptyOrder");
    } else {
      this.OrderEl.classList.add("emptyOrder");
      this.OrderEl.innerHTML = "Your cart is empty";
      this.showOrder.classList.add("hide");
    }
  }
  renderCurrentOrder(handler) {
    document.addEventListener(
      "click",
      function (e) {
        const btn = e.target.closest(".orderBtn");
        if (!btn) return;
        handler();
      }.bind(this)
    );
  }
}

export default new AddToCart();

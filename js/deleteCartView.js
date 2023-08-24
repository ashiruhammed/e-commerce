class DeleteCartView {
  OrderEl = document.querySelector(".cartDiv");
  addHandlerRender(handler) {
    document.addEventListener(
      "click",
      function (e) {
        const btn = e.target.closest(".closeCart");
        if (!btn) return;

        handler(0);
      }.bind(this)
    );
  }
}

export default new DeleteCartView();

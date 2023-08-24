class OrderQuantity {
  showOrderEl = document.querySelector(".orderBtnCont h4");
  orderNum;

  renderOrderNum(data) {
    this.showOrderEl.textContent = data;
  }
  addHandlerRender(handler) {
    document.addEventListener(
      "click",
      function (e) {
        const btn = e.target.closest(".quantBtn");
        if (!btn) return;
        this.orderNum = +this.showOrderEl.textContent;

        if (btn.classList.contains("addBtn")) {
          this.orderNum++;
        } else {
          this.orderNum === 0 ? (this.orderNum = 0) : this.orderNum--;
        }
        this.renderOrderNum(this.orderNum);
        handler(+this.showOrderEl.textContent);
      }.bind(this)
    );
  }
}

export default new OrderQuantity();

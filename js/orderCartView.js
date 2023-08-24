import delImage from "url:../images/icon-delete.svg"


class OrderCartView {
  parentEl = document.querySelector(".cartDiv");
  img  = document.querySelectorAll('.smallProdImg')

  renderOrder(order, currProd) {
    const markup = `
    <div>
    <div>
    <img
        src="${this.img[currProd].src}"
        alt=""
        class="cartImage"
    />
    <div>
        <p>Fall Limitied Edition Sneakers</p>
        <p>$125.00 x ${order} <span>$${order * 125}</span></p>
    </div>
    </div>
    <img src="${delImage}" alt="" class="closeCart"/>
    </div>
    <button>Checkout</button>
`;
    this.parentEl.innerHTML = "";
    this.parentEl.insertAdjacentHTML("beforeend", markup);
  }
}

export default new OrderCartView();

class ControlMenu {
  navList = document.querySelector(".list");
  menuBtns = document.querySelectorAll(".menu");
  overLay = document.querySelector(".overlay");
  addHandlerRender() {
    document.addEventListener(
      "click",
      function (e) {
        const btn = e.target.closest(".menu");
        if (!btn) return;
        this.navList.classList.toggle("return_list");
        this.overLay.classList.toggle("hide");
        this.menuBtns.forEach((menus) => menus.classList.toggle("hide"));
      }.bind(this)
    );
  }

  removeNav() {
    document.addEventListener(
      "click",
      function (e) {
        const btn = e.target.closest(".overlay");
        if (!btn) return;

        this.overLay.classList.toggle("hide");
        this.menuBtns.forEach((menus) => menus.classList.toggle("hide"));
        this.navList.classList.remove("return_list");
      }.bind(this)
    );
  }
}

export default new ControlMenu();

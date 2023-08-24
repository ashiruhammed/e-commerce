import controlSlide from "./controlSlide.js";
import controlMenu from "./controlMenu.js";
import DisplayOrderDet from "./displayOrderDet.js";
import orderQuantity from "./orderQuantity.js";
import * as model from "./model.js";
import orderCartView from "./orderCartView.js";
import addToCartView from "./addToCartView.js";
import changeCurrentProd from "./changeCurrentProd.js";
import lightBoxView from "./lightBoxView.js";
import displayLightBoxView from "./displayLightBoxView.js";
import DeleteCartView from "./deleteCartView.js";

const initialData = function () {
  DisplayOrderDet.checkOrderDet(model.data.currentOrder);

  addToCartView.checkOrder(model.data.currentOrder);
  orderCartView.renderOrder(model.data.currentOrder, model.data.currentProduct);
};

const controlOrderBtn = function (order) {
  model.editOrder(order);
};

const controlCheckOrder = function () {
  DisplayOrderDet.checkOrderDet(model.data.currentOrder);
};

const controlCurrentProd = function (currProd) {
  model.editCurrentProduct(currProd);
  controlSlide.checkCurrentMobileProd(currProd);
};

const controlAddingToCart = function () {
  model.saveData();
  orderCartView.renderOrder(model.data.currentOrder, model.data.currentProduct);
  addToCartView.checkOrder(model.data.currentOrder);
};

const controlChangeProd = function (currProd) {
  model.editCurrentProduct(currProd);
  controlSlide.checkDesktopClick(currProd);
};

const controlLightBox = function (currProd) {
  lightBoxView.checkCurrentMobileProd(currProd);
};

const controlDelete = function (order) {
  model.editOrder(order);
  model.editCurrentProduct(order);
  model.saveData();
  addToCartView.checkOrder(model.data.currentOrder);
  orderQuantity.renderOrderNum(model.data.currentOrder);
};
const init = function () {
  initialData();
  controlSlide.initSlide();
  lightBoxView.initSlide();
  lightBoxView.addHandlerRender(controlLightBox);
  controlSlide.addHandlerRender(controlCurrentProd);
  lightBoxView.changeCurrSlide();
  controlMenu.addHandlerRender();
  controlMenu.removeNav();
  displayLightBoxView.showLightBox();
  displayLightBoxView.closeLightBox();
  DisplayOrderDet.addHandlerRender(controlCheckOrder);
  DisplayOrderDet.removeOrderDet();
  DeleteCartView.addHandlerRender(controlDelete);
  orderQuantity.addHandlerRender(controlOrderBtn);
  changeCurrentProd.addHandlerRender(controlChangeProd);
  addToCartView.renderCurrentOrder(controlAddingToCart);
};
init();

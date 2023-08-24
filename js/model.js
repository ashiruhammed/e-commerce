export const data = {
  currentOrder: 0,
  currentProduct: 0,
};

export const editOrder = function (order) {
  data.currentOrder = order;
};

export const editCurrentProduct = function (curr) {
  data.currentProduct = curr;
};

export const saveData = function (currOrder, currProd) {
  localStorage.setItem("currData", JSON.stringify(data.currentOrder));
  localStorage.setItem("currProd", JSON.stringify(data.currentProduct));
};

const getData = function () {
  const localData = JSON.parse(localStorage.getItem("currData"));
  const localProd = JSON.parse(localStorage.getItem("currProd"));
  if (!localData) return;
  data.currentOrder = localData;
  data.currentProduct = localProd;
};

getData();

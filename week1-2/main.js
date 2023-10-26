import Controller from "./Controller.js";
import { storage } from "./Storage.js";
import Store from "./Store.js";
import FilterView from "./views/FilterView.js";
import { firstRender } from "./views/FirstRender.js";
import FooterModalView from "./views/FooterModalView.js";
import ModalView from "./views/ModalView.js";
import MyAccountView from "./views/MyAccountView.js";
import NewCategoryView from "./views/newCategoryView.js";

const tag = "[main]";

document.addEventListener("DOMContentLoaded", main);

function main() {
  console.log(tag, "main");
  firstRender(storage.HISTORY_LIST);

  const store = new Store(storage);

  const views = {
    filterView: new FilterView(),
    myAccountView: new MyAccountView(),
    modalView: new ModalView(),
    footerModalView: new FooterModalView(store),
    newCategoryView: new NewCategoryView(store),
  };

  new Controller(store, views);
}

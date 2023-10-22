import Controller from "./Controller.js";
import { storage } from "./Storage.js";
import Store from "./Store.js";
import FilterView from "./views/FilterView.js";
import { firstRender } from "./views/FirstRender.js";
import MyAccountView from "./views/MyAccountView.js";

const tag = "[main]";

document.addEventListener("DOMContentLoaded", main);

function main() {
  console.log(tag, "main");
  firstRender(storage.HISTORY_LIST);
  const store = new Store(storage);

  const views = {
    // historyListView: new HistoryListView(),
    filterView: new FilterView(),
    myAccountView: new MyAccountView(),
  };

  new Controller(store, views);
}

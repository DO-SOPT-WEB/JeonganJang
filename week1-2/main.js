import Controller from "./Controller.js";
import { storage } from "./Storage.js";
import Store from "./Store.js";
import FilterView from "./views/FilterView.js";
import { firstRender } from "./views/FirstRender.js";
// import HistoryListView from "./views/HistoryListView.js";

const tag = "[main]";
console.log("main.js load");

document.addEventListener("DOMContentLoaded", main);

function main() {
  console.log(tag, "main");
  firstRender(storage.HISTORY_LIST);
  const store = new Store(storage);

  const views = {
    // historyListView: new HistoryListView(),
    filterView: new FilterView(),
  };

  new Controller(store, views);
}

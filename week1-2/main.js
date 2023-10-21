import Controller from "./Controller.js";
import { storage } from "./Storage.js";
import Store from "./Store.js";
import HistoryListView from "./views/HistoryListView.js";

const tag = "[main]";

document.addEventListener("DOMContentLoaded", main);

function main() {
  console.log(tag, "main");
  const store = new Store(storage);

  const views = {
    historyListView: new HistoryListView(),
  };

  new Controller(store, views);
}

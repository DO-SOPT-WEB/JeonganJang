const tag = "[Controller]";

export default class Controller {
  constructor(store, { historyListView, filterView }) {
    console.log(tag, "[Controller]");
    this.store = store;
    this.historyListView = historyListView;
    this.filterView = filterView;
  }
  //mvc 패턴으로 짜보려고 노력은 하는데, controller를 제대로 쓰지 못하고 있다....
}

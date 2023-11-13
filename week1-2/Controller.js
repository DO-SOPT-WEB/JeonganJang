import { on } from "./util/domHelper.js";

export default class Controller {
  constructor(store, { filterView, myAccountView, modalView }) {
    this.store = store;
    this.filterView = filterView;
    this.myAccountView = myAccountView;
    this.modalView = modalView;
  }
  //mvc 패턴으로 짜보려고 노력은 하는데, controller를 제대로 쓰지 못하고 있다....

  deleteList(keyword) {
    this.store.deleteList(keyword);
  }
}

import { on } from "./util/domHelper.js";

const tag = "[Controller]";

export default class Controller {
  constructor(store, { filterView, myAccountView, modalView }) {
    console.log(tag, "[Controller]"); //실행 순서 확인
    this.store = store;
    this.filterView = filterView;
    this.myAccountView = myAccountView;
    this.modalView = modalView;

    console.log("this.store", this.store);
  }
  //mvc 패턴으로 짜보려고 노력은 하는데, controller를 제대로 쓰지 못하고 있다....

  deleteList(keyword) {
    this.store.deleteList(keyword);
  }
}

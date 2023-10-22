const tag = "[Store]";

export default class Store {
  constructor(storage) {
    console.log(tag, "store");
    if (!storage) throw "no storage";
    this.storage = storage;
    console.log("store.js 내 this.storage", this.storage.HISTORY_LIST);
  }

  getCheckedData(type) {
    return this.storage.HISTORY_LIST.filter(
      (item) => item.SPEND_OR_INCOME === type
    ); //TODO 이 메서드를 사용해서 filter처리 하고 싶은데, 어떻게 이용할지 모르겠다. 마음이 급하다.
  }

  deleteList(keyword) {
    //x 버튼이 눌리면 삭제 이벤트 발행
    this.storage.HISTORY_LIST = this.storage.HISTORY_LIST.filter(
      (history) => history.keyword !== keyword
    );
    console.log(
      " deleteList 메서드 내 this.storage.HISTORY_LIST",
      this.storage.HISTORY_LIST
    );
  }
}

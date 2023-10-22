const tag = "[Store]";

export default class Store {
  constructor(storage) {
    console.log(tag, "constructor");
    if (!storage) throw "no storage";
    this.storage = storage; //여기서 this.storage는 HISTORY_LIST임.
    console.log("스토어 내 지출 내역", this.storage.HISTORY_LIST);
  }

  getCheckedData(type) {
    return this.storage.HISTORY_LIST.filter(
      (item) => item.SPEND_OR_INCOME === type
    ); //TODO 이 메서드를 사용해서 filter처리 하고 싶은데, 어떻게 이용할지 모르겠다. 마음이 급하다.
  }
}

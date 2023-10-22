import { on } from "../util/domHelper.js";

const tag = "[View]";

export default class View {
  constructor(element) {
    console.log(tag, "[View]");
    if (!element) throw "no element";

    this.element = element;

    return this;
  }

  on(eventName, handler) {
    on(this.element, eventName, handler);
    return this;
  }

  //삭제, 추가 로직 추가 TODO
}

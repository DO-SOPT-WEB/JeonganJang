import { on } from "../util/domHelper";

const tag = "[View]";

export default class View {
  constructor(element) {
    console.log(tag, "[View]");
    if (!element) throw "no element";

    this.element = element;
  }

  on(eventName, handler) {
    on(this.element, eventName, handler);
    return this;
  }
}

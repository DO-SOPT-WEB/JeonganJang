import { on } from "../util/domHelper.js";

export default class View {
  constructor(element) {
    if (!element) throw "no element";

    this.element = element;
    return this;
  }

  on(eventName, handler) {
    on(this.element, eventName, handler);
    return this;
  }
}

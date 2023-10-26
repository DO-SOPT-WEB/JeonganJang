export default class EventController {
  constructor() {
    this.events = {};
  }

  subscribe(eventName, listener) {
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }
    this.events[eventName].push(listener);
  }

  emit(eventName, data) {
    if (this.events[eventName]) {
      this.events[eventName].forEach((listener) => listener(data));
    }
  }
}
export const CATEGORY_CHANGED_EVENT = "categoryChanged";
export const eventController = new EventController();

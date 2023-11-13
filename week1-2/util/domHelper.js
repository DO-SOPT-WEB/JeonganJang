export function qs(className, target = document) {
  if (!className) throw "no className";
  return target.querySelector(className);
}

export function qsAll(className, target = document) {
  if (!className) throw "no className";
  return target.querySelectorAll(className);
}

export function on(target, eventName, handler) {
  target.addEventListener(eventName, handler);
}

const qs = (className) => {
  return document.querySelector(className);
};

const qsAll = (className) => {
  return document.querySelectorAll(className);
};

const getId = (idName) => {
  return document.getElementById(idName);
};

export { qs, qsAll, getId };

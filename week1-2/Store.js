const tag = "[Store]";

export default class Store {
  constructor(storage) {
    console.log(tag, "store");
    if (!storage) throw "no storage";
    this.storage = storage;
    console.log("store.js 내 this.storage", this.storage.HISTORY_LIST);
  }

  getCategory() {
    const defaultCategories = {
      income: ["급여", "용돈"],
      expense: ["식비", "교통"],
    };
    const storedCategories = JSON.parse(localStorage.getItem("categories"));

    return storedCategories || defaultCategories;
  }

  addCategory(type, newCategory) {
    const currentCategory = this.getCategory();

    currentCategory[type] = [...currentCategory[type], newCategory];

    localStorage.setItem("categories", JSON.stringify(currentCategory));
  }
}

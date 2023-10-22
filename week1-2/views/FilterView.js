import { storage } from "../Storage.js";
import { on, qs } from "../util/domHelper.js";
import { firstRender } from "./FirstRender.js";
import View from "./View.js";

const tag = "[FilterView]";
export default class FilterView extends View {
  constructor() {
    console.log(tag, "[FilterView]");
    super(qs("#filter_view"));
    this.incomeElement = qs("[name=income]", this.element);
    this.spendElement = qs("[name=spend]", this.element);
    this.bindIncomeEvent();
    this.bindSpendEvent();
  }

  bindIncomeEvent() {
    on(this.incomeElement, "change", () => this.handleIncomeClick());
  }

  bindSpendEvent() {
    on(this.spendElement, "change", () => this.handleSpendClick());
  }

  handleIncomeClick() {
    this.updateView();
  }

  handleSpendClick() {
    this.updateView();
  }

  updateView() {
    const incomeChecked = this.incomeElement.checked;
    const spendChecked = this.spendElement.checked;

    if (incomeChecked && spendChecked) {
      this.renderFilterItem(storage.HISTORY_LIST);
    } else if (incomeChecked) {
      const filterIncome = storage.HISTORY_LIST.filter(
        (item) => item.SPEND_OR_INCOME === "income"
      );
      this.renderFilterItem(filterIncome);
    } else if (spendChecked) {
      const filterSpend = storage.HISTORY_LIST.filter(
        (item) => item.SPEND_OR_INCOME === "spend"
      );
      this.renderFilterItem(filterSpend);
    } else {
      this.renderFilterItem([]);
    }
  }

  renderFilterItem(items) {
    firstRender(items || []);
  }
}

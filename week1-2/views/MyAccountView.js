import { storage } from "../Storage.js";
import { qs } from "../util/domHelper.js";
import View from "./View.js";

const tag = "[myAccountView]";
export default class MyAccountView extends View {
  constructor() {
    console.log(tag, "[myAccountView]");
    super(qs(".all_my_amount"));
    this.plusAmount = qs(".amount_detail_plus", this.element);
    this.minusAmount = qs(".amount_detail_minus", this.element);
    this.totalMyAccount(storage.HISTORY_LIST);
    this.detailPlus(storage.HISTORY_LIST);
  }

  calculateAccount(items) {
    let totalIncome = 0;
    let totalSpend = 0;

    items.forEach((item) => {
      if (item.SPEND_OR_INCOME === "income") {
        totalIncome += item.PRICE;
      } else if (item.SPEND_OR_INCOME === "spend") {
        totalSpend += item.PRICE;
      }
    });

    return { totalIncome, totalSpend };
  }

  totalMyAccount(items) {
    const { totalIncome, totalSpend } = this.calculateAccount(items);
    const myAmount = qs(".my_amount");
    const p = document.createElement("p");
    p.className = "my_amount_sub";

    myAmount.innerHTML = `
  <p class="my_amount_title">나의 자산</p>
<p class="my_amount_sub">${totalIncome - totalSpend}</p>
  `;
  }

  detailPlus(items) {
    const { totalIncome, totalSpend } = this.calculateAccount(items);

    const plusAccount = qs(".amount_detail_container");

    plusAccount.innerHTML = `
    <div class="amount_detail_plus_container">
              <p class="amount_detail_plus">+</p>
              <p class="amount_detail_plus">${totalIncome}</p> 
            </div>
            <div class="amount_detail_minus_container">
              <p class="amount_detail_minus">-</p>
              <p class="amount_detail_minus">${totalSpend}</p> 
            </div>
    `;
  }
}

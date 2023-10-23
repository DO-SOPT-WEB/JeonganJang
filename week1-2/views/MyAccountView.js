import { eventController } from "../EventController.js";
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
    this.detailPlusAndMinus(storage.HISTORY_LIST);

    //이벤트 발행(firstRender함수의 on메서드에서 이벤트 수신)
    eventController.subscribe("updatedList", (updatedList) => {
      console.log("이벤트발행", updatedList);
      this.totalMyAccount(updatedList);
      this.detailPlusAndMinus(updatedList);
    });
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
<p class="my_amount_sub">${(totalIncome - totalSpend).toLocaleString()}</p>
  `;
  } //TODO 하나하나 toLocaleString()를 붙이는 방법 말고 하나의 유틸로써 작성하는 방법을 찾아보자

  detailPlusAndMinus(items) {
    const { totalIncome, totalSpend } = this.calculateAccount(items);

    const plusAccount = qs(".amount_detail_container");

    plusAccount.innerHTML = `
    <div class="amount_detail_plus_container">
              <p class="amount_detail_plus">+</p>
              <p class="amount_detail_plus">${totalIncome.toLocaleString()}</p> 
            </div>
            <div class="amount_detail_minus_container">
              <p class="amount_detail_minus">-</p>
              <p class="amount_detail_minus">${totalSpend.toLocaleString()}</p> 
            </div>
    `;
  }
}

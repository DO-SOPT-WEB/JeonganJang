import { qs } from "../util/domHelper.js";

export function firstRender(items) {
  const container = qs(".pay_detail_contents");
  container.innerHTML = "";

  items.forEach((item, index) => {
    const itemList = document.createElement("ul");
    itemList.className = "pay_detail_item";

    const listItem = document.createElement("li");

    const amountString =
      item.SPEND_OR_INCOME === "income" ? `+${item.PRICE}` : `-${item.PRICE}`;

    listItem.innerHTML = `
        <p class="pay_detail_category">${item.CATEGORY}</p>
        <p class="pay_detail_content">${item.PLACE}</p>
        <p class="${
          item.SPEND_OR_INCOME === "income"
            ? "pay_detail_amount_income"
            : "pay_detail_amount_spend"
        }">${amountString}</p>
        <button class="pay_detail_btn">x</button>
      `;

    itemList.appendChild(listItem);

    container.appendChild(itemList);
  });
}

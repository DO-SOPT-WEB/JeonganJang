import { eventController } from "../EventController.js";
import { storage } from "../Storage.js";
import { on, qs } from "../util/domHelper.js";
import ModalView from "./ModalView.js";

const modalInstance = new ModalView();

export function firstRender(items) {
  const div = qs(".pay_detail_contents");
  div.innerHTML = "";

  items.forEach((item) => {
    const ul = document.createElement("ul");
    ul.className = "pay_detail_item";

    const li = document.createElement("li");

    const amountString =
      item.SPEND_OR_INCOME === "income"
        ? `+${item.PRICE.toLocaleString()}`
        : `-${item.PRICE.toLocaleString()}`;

    li.innerHTML = `
        <p class="pay_detail_category">${item.CATEGORY}</p>
        <p class="pay_detail_content">${item.PLACE}</p>
        <p class="${
          item.SPEND_OR_INCOME === "income"
            ? "pay_detail_amount_income"
            : "pay_detail_amount_spend"
        }">${amountString}</p>
        <button class="pay_detail_btn">x</button>
        `;

    ul.appendChild(li);
    div.appendChild(ul);

    deleteHistoryList(ul, item, items, li);
  });
}

function setupEventListeners() {
  eventController.subscribe("addData", (newData) => {
    storage.HISTORY_LIST.push(newData);
    firstRender(storage.HISTORY_LIST);
    eventController.emit("updatedList", storage.HISTORY_LIST);
  });
}

function deleteHistoryList(ul, item, items, li) {
  const deleteBtn = qs(".pay_detail_btn", ul);

  on(deleteBtn, "click", () => {
    modalInstance.show(() => {
      const index = items.findIndex((i) => i.id === item.id);
      if (index !== -1) {
        items.splice(index, 1);
        li.remove();
        modalInstance.hide();
        eventController.emit("updatedList", items); //MyAccountView에서 발행한 이벤트 수신
      } else {
        console.error("삭제할 지출 내역을 찾을 수 없습니다.");
      }
    });
  });
}
firstRender(storage.HISTORY_LIST);

setupEventListeners();

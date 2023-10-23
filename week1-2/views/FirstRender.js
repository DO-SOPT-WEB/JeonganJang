import { eventController } from "../EventController.js";
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

    //  const amountString = item.SPEND_OR_INCOME === "income" ? `+${item.PRICE}` : `-${item.PRICE}`;

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

    //지출 내역 리스트 삭제
    //TODO 삭제 기능도 추후 따로 분리하는게 좋으려나?
    const deleteBtn = qs(".pay_detail_btn", ul);

    on(deleteBtn, "click", () => {
      modalInstance.show(() => {
        const index = items.findIndex((i) => i.id === item.id);
        if (index !== -1) {
          items.splice(index, 1);
          li.remove();
          modalInstance.hide();
          eventController.emit("updatedList", items); //MyAccountView에서 발행한 이벤트 수신
          console.log("이벤트수신", items);
        } else {
          console.error("삭제할 지출 내역을 찾을 수 없습니다.");
        }
      });
    });
  });
}

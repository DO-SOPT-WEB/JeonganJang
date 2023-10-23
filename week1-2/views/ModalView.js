import { qs } from "../util/domHelper.js";

const tag = "[ModalView]";
export default class ModalView {
  constructor() {
    this.modal = this.createModal();
  }

  createModal() {
    const modal = document.createElement("div");
    modal.innerHTML = `
        <div class="modal-content">
          <span class="close-button">x</span>
          <p>정말로 삭제하시겠습니까?</p>
          <button id="confirmDelete">예</button>
          <button id="cancelDelete">아니오</button>
        </div>
      `;
    modal.classList.add("modal");
    modal.style.display = "none";
    document.body.appendChild(modal);

    modal.querySelector(".close-button").addEventListener("click", () => {
      this.hide();
    });

    return modal;
  }

  //TODO 모달창 관련 로직 추후 컨트롤러로 분리
  show(action) {
    this.modal.style.display = "block";
    const confirmBtn = qs("#confirmDelete", this.modal);
    confirmBtn.onclick = () => {
      action();
    };

    const refuseAction = () => this.hide();
    qs("#cancelDelete", this.modal).onclick = refuseAction;
    qs(".close-button", this.modal).onclick = refuseAction;
  }

  hide() {
    this.modal.style.display = "none";
  }
}

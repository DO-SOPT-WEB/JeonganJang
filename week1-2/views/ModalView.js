import { on, qs } from "../util/domHelper.js";

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
          <button id="cancelDelete">취소</button>
        </div>
      `;
    modal.classList.add("modal");
    modal.style.display = "none";
    document.body.appendChild(modal);

    on(qs(".close-button", modal), "click", () => this.hide());

    return modal;
  }

  show(callback) {
    this.modal.style.display = "block";
    const confirmBtn = qs("#confirmDelete", this.modal);
    confirmBtn.onclick = () => {
      callback();
    };

    const refuseAction = () => this.hide();
    qs("#cancelDelete", this.modal).onclick = refuseAction;
    qs(".close-button", this.modal).onclick = refuseAction;
  }

  hide() {
    this.modal.style.display = "none";
  }
}

const tag = "[FooterModalView]";
import { eventController } from "../EventController.js";
import { on, qs } from "../util/domHelper.js";
export default class FooterModalView {
  constructor() {
    this.modal = null;
    console.log(tag, "[FooterModalView]");
    this.OpenModalButton();
  }

  createModal() {
    this.modal = document.createElement("div");
    this.modal.className = "modal-overlay";
    this.modal.innerHTML = `
    <div class="modal-content">
    <div class="modal-header">
      <h5 class="modal-title">+버튼 모달창!!!!</h5>
      
    </div>
    <div class="modal-body">
      <!-- 수입/지출 선택 -->
      <div class="form-group">
        <label>수입/지출:</label>
        <div>
          <input type="checkbox" id="incomeCheckbox" value="income" checked>
          <label for="incomeCheckbox">수입</label>

          <input type="checkbox" id="expenseCheckbox"  value="expense">
          <label for="expenseCheckbox">지출</label>
        </div>
      </div>
      
      <!-- 카테고리 선택 -->
      <div class="form-group">
        <label for="category">카테고리:</label>
        <select class="form-control" id="category">

        </select>
      </div>
  
      <!-- 금액 입력 -->
      <div class="form-group">
        <label for="amount">금액:</label>
        <input type="text" class="form-control" id="amount" placeholder="금액을 입력하세요" />
        
      </div>
  
      <!-- 내용 입력 -->
      <div class="form-group">
        <label for="content">내용:</label>
        <input type="text" class="form-control" id="content" placeholder="내용을 입력하세요">
      </div>
    </div>

    <div class="modal-footer">
      <!-- 저장 버튼 -->
      <button type="button" class="btn btn-primary" id="saveButton">저장하기</button>
      
      <!-- 모달 닫기 버튼 -->
      <button type="button" class="btn btn-secondary" id="closeButton">닫기</button>
    </div>
  </div>
    `;
    document.body.appendChild(this.modal);

    const amountInput = qs("#amount", this.modal);
    on(amountInput, "input", this.validateAmountInput);

    const saveButton = qs("#saveButton", this.modal);
    on(saveButton, "click", () => this.saveTransaction());

    const closeButton = qs("#closeButton", this.modal);
    on(closeButton, "click", () => this.closeModal());

    this.modal.classList.add("slide-up");
    this.closeModalOverlay();
    this.handleCheckbox(true);
  }

  closeModal() {
    on(this.modal, "click", () => {
      document.body.removeChild(this.modal);
    });
  }
}

import { CATEGORY_CHANGED_EVENT, eventController } from "../EventController.js";
import { qs, on } from "../util/domHelper.js";

const tag = "[NewCategoryView]";

export default class NewCategoryView {
  constructor(store) {
    console.log(tag, "[NewCategoryView]");
    this.store = store;
    this.navigateToNewCategoryPage();
  }

  navigateToNewCategoryPage() {
    const newCategoryButton = qs(".new_category_btn");
    on(newCategoryButton, "click", () => {
      const mainContent = qs("#main_content", document);
      mainContent.innerHTML = "";

      const newContent = `
      <!DOCTYPE html>
      <html lang="ko">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>new Category Page</title>
        </head>
        <body>
          <div class="modal-content">
            <span class="close">닫기</span>
            <h2>카테고리 관리</h2>
            <div id="existing_categories"></div>
            <div class="new_category_section">
              <div class="income_section">
                <h3>수입 카테고리 추가</h3>
                <input type="text" id="new_income_category_name" />
                <button id="add_income_category">추가</button>
              </div>
              <div class="expense_section">
                <h3>지출 카테고리 추가</h3>
                <input type="text" id="new_expense_category_name" />
                <button id="add_expense_category">추가</button>
              </div>
            </div>
          </div>
        </body>
      </html>
    `;
      mainContent.innerHTML = newContent;
      this.init();
    });
  }

  init() {
    console.log("카테고리뷰 연결 완료!");
    this.showExistCategory();

    on(qs("#add_income_category", document), "click", () =>
      this.addNewCategory("income")
    );
    on(qs("#add_expense_category", document), "click", () =>
      this.addNewCategory("expense")
    );

    this.closeButton = qs(".close", document);

    on(this.closeButton, "click", () => {
      this.hide();
    });
  }

  hide() {
    const currentPage = qs("#main_content", document);
    currentPage.style.display = "none";

    const initialView = qs(".modal-content", document);
    initialView.style.display = "block";
  }
}

import { getId } from "./util/domHelper.js";

class App {
  play() {
    // const root = getId("root");
    // const appContent = this.template();
    // root.innerHTML = appContent;
  }

  // template() {
  //   return `<header class="header">
  //       <h1>정안이의 가계부</h1>
  //     </header>
  //     <main>
  //       <section class="all_my_amount">
  //         <article class="my_amount">
  //           <p class="my_amount_title">나의 자산</p>
  //           <p class="my_amount_sub">300,000</p>
  //         </article>
  //         <article class="amount_detail_container">
  //           <div class="amount_detail_plus_container">
  //             <p class="amount_detail_plus">+</p>
  //             <p class="amount_detail_plus">600,000</p>
  //           </div>
  //           <div class="amount_detail_minus_container">
  //             <p class="amount_detail_minus">-</p>
  //             <p class="amount_detail_minus">50,300</p>
  //           </div>
  //         </article>
  //       </section>
  //       <section class="pay_detail">
  //         <button class="date_btn"><-</button>
  //         <p>10월 13일</p>
  //         <button class="date_btn">-></button>
  //       </section>
  //       <article>
  //         <div class="pay_detail_list">
  //           <p>내역 리스트</p>
  //           <form>
  //             <input type="checkbox" name="income" value="income" checked />수입
  //             <input type="checkbox" name="spend" value="spend" checked />지출
  //           </form>
  //         </div>
  //       </article>
  //       <div class="pay_detail_contents">
  //         <ul class="pay_detail_item">
  //           <li>
  //             <p class="pay_detail_category">식비</p>
  //             <p class="pay_detail_content">맥도날드</p>
  //             <p class="pay_detail_amount_spend">-10,000</p>
  //             <button class="pay_detail_btn">x</button>
  //           </li>
  //         </ul>
  //         <ul class="pay_detail_item">
  //           <li>
  //             <p class="pay_detail_category">취미</p>
  //             <p class="pay_detail_content">따릉이</p>
  //             <p class="pay_detail_amount_spend">-1000</p>
  //             <button class="pay_detail_btn">x</button>
  //           </li>
  //         </ul>

  //         <ul class="pay_detail_item">
  //           <li>
  //             <p class="pay_detail_category">월급</p>
  //             <p class="pay_detail_content">Flo</p>
  //             <p class="pay_detail_amount_income">+500,000</p>
  //             <button class="pay_detail_btn">x</button>
  //           </li>
  //         </ul>

  //         <ul class="pay_detail_item">
  //           <li>
  //             <p class="pay_detail_category">식비</p>
  //             <p class="pay_detail_content">덮밥집</p>
  //             <p class="pay_detail_amount_spend">-8000</p>
  //             <button class="pay_detail_btn">x</button>
  //           </li>
  //         </ul>

  //         <ul class="pay_detail_item">
  //           <li>
  //             <p class="pay_detail_category">쇼핑</p>
  //             <p class="pay_detail_content">무신사</p>
  //             <p class="pay_detail_amount_spend">-70,000</p>
  //             <button class="pay_detail_btn">x</button>
  //           </li>
  //         </ul>

  //         <ul class="pay_detail_item">
  //           <li>
  //             <p class="pay_detail_category">취미</p>
  //             <p class="pay_detail_content">넷플릭스</p>
  //             <p class="pay_detail_amount_spend">-4000</p>
  //             <button class="pay_detail_btn">x</button>
  //           </li>
  //         </ul>
  //       </div>
  //     </main>
  //     <footer class="footer">
  //       <button class="footer_btn">+</button>
  //     </footer>
  // `;
  // }
}

document.addEventListener("DOMContentLoaded", () => {
  const app = new App();
  app.play();
});

const INIT_BALANCE = 0;

const storage = {
  HISTORY_LIST: [
    {
      id: 1,
      CATEGORY: "식비",
      PLACE: "맥도날드",
      SPEND_OR_INCOME: "spend",
      PRICE: 10000,
    },
    {
      id: 2,
      CATEGORY: "취미",
      PLACE: "따릉이",
      SPEND_OR_INCOME: "spend",
      PRICE: 1000,
    },
    {
      id: 3,
      CATEGORY: "월급",
      PLACE: "FLO",
      SPEND_OR_INCOME: "income",
      PRICE: 500000,
    },
    {
      id: 4,
      CATEGORY: "쇼핑",
      PLACE: "무신사",
      SPEND_OR_INCOME: "spend",
      PRICE: 70000,
    },
  ],
};

const categories = {
  income: ["용돈", "월급"],
  expense: ["쇼핑", "취미"],
};

export { storage, INIT_BALANCE, categories };

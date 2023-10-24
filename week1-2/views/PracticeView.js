import { qs } from "../util/domHelper.js";
import View from "./View.js";

const tag = "[HistoryListView]";

export default class PracticeView extends View {
  constructor() {
    console.log(tag, "[HistoryListView]");
    super(qs(".pay_detail_item"));
  }
}

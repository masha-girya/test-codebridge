import { Article } from "./Article";

export interface Data {
  status: string,
  totalResults: number,
  articles: Article[],
}
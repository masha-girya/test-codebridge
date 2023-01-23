import { Article } from "../types/Article";
import { Data } from "../types/Data";

const BASE_URL = 'https://newsapi.org/v2/everything?q=nasa&pageLimit=100';

const API_KEY = '&apiKey=7958779e1d5b404ba26c8c8dca0bde40';

function wait(delay: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}

function get<T>(url = ''): Promise<T> {
  const fullURL = BASE_URL + url + API_KEY;

  return wait(300)
    .then(() => fetch(fullURL))
    .then((response) => {
      if (!response.ok) {
        throw new Error('Data can not be loaded from server');
      }

      return response.json();
    });
}

export const getArticles = () => get<Data>();
export const getArticleById = (id: number) => get<Article>(`/${id}`);

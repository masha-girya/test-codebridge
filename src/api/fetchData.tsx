import { Article } from "../types/Article";

const BASE_URL = 'https://api.spaceflightnewsapi.net/v3/articles';

function wait(delay: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}

function get<T>(url: string): Promise<T> {
  const fullURL = BASE_URL + url;

  return fetch(fullURL)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Data can not be loaded from server');
      }

      return response.json();
    });
}

export const getArticles = () => get<Article[]>('?_limit=100');
export const getArticleById = (id: number) => get<Article>(`/${id}`);
export const getArticlesWithQuery = (query: string) => get<Article[]>(`?_limit=100&title_contains=${query}&summary_contains=${query}`);
// export interface Article {
//   id: number,
//   featured: boolean,
//   title: string,
//   url: string,
//   imageUrl: string,
//   newsSite: string,
//   summary: string,
//   publishedAt: string,
//   launches: [
//     {
//       id: string,
//       provider: string
//     }
//   ],
//   events: [
//     {
//       id: string,
//       provider: string
//     }
//   ]
// }

export interface Article {
  source: {
    id: string,
    name: string,
  }
  author: string,
  title: string,
  description: string,
  url: string,
  urlToImage: string,
  publishedAt: string,
  content: string,
}
const NewsAPI = require('newsapi');
const dotenv = require('dotenv');
dotenv.config();
const newsapi = new NewsAPI(process.env.API_KEY);

const appService = {
  getAllNews: (body) => {
    return newsapi.v2.topHeadlines({
      language: body.language,
      country: body.country,
      sortBy: 'publishedAt',
      category: body.category,
      source: body.sources,
      pageSize: 50
    }).then(response => {
      return response;
    }).catch(error => {
      return error;
    });
  },
  getFilteredNews: (body) => {
    return newsapi.v2.everything({
      language: body.language,
      q: body.q,
      source: body.sources,
      sortBy: 'publishedAt',
      pageSize: 50
    }).then(response => {
      return response;
    }).catch(error => {
      return error;
    });
  }
}

module.exports = appService;
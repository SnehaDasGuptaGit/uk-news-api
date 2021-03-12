const NewsAPI = require('newsapi');
const dotenv = require('dotenv');
dotenv.config();
const newsapi = new NewsAPI(process.env.API_KEY);

const appService = {
  getAllNews: (body) => {
    return newsapi.v2.topHeadlines({
      q: body.q,
      language: body.language,
      country: body.country,
      sortBy: 'publishedAt',
      category: body.category,
      source: body.sources
    }).then(response => {
      return response;
    }).catch(error => {
      return error;
    });
  }
}

module.exports = appService;
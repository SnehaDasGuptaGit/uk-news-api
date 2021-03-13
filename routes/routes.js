//Route Details

const service = require("../services/service.js");

const appRouter = function (app) {
    app.get("/news", async function(req, res) {
        let language = req.query.lang;
        let country = req.query.country;
        let querySearch = req.query.q;
        let category = req.query.q;
        let sources = req.query.q;
        try {
            let apiData = await service.getAllNews({ 
                language: language, 
                country: country, 
                q: querySearch,
                category: category,
                sources: sources
            });
            res.json(apiData);
        } catch (error) {
            res.json(error);
        }    
    });
  }
  
  module.exports = appRouter;
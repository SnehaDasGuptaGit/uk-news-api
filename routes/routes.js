//Route Details

const service = require("../services/service.js");

const appRouter = function (app) {
    app.get("/news", async function(req, res) {
        let language = req.query.lang;
        let country = req.query.country;
        let category = req.query.category;
        let sources = req.query.sources;
        try {
            let apiData = await service.getAllNews({ 
                language: language, 
                country: country, 
                category: category,
                sources: sources
            });
            res.json(apiData);
        } catch (error) {
            res.json(error);
        }    
    });

    app.get("/newsFilter", async function(req, res) {
        let language = req.query.lang;
        let q = req.query.q;
        let sources = req.query.sources;
        try {
            let apiData = await service.getFilteredNews({ 
                language: language, 
                q: q,
                sources: sources
            });
            res.json(apiData);
        } catch (error) {
            res.json(error);
        }    
    });
  }
  
  module.exports = appRouter;
# uk-news-api

To Start the api -> npm start.

API details:

1. Get API: getAllNews
    Gets the top headline of UK from the newsapi.org
    Parameters:
        lang = The 2-letter ISO-639-1 code of the language you want to get headlines for. Ex. en(English)
        country = The 2-letter ISO 3166-1 code of the country you want to get headlines for. Ex. gb(United Kingdom)
        q = filter with keyword
    sample - host:port/news?lang=en&country=gb&q=Guardian
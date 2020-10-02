## imdb-movie-search
This project scraps through movie list from the url https://www.imdb.com/search/title/?count=100&groups=top_1000&sort=user_rating and saves the data into data.json
located in database folder.
To scape the movies list again use the following api on localhost i.e http://localhost:5000/api/crawler/fetch-movies . The movies list api for the saved data is http://localhost:5000/api/movies


## TODO
- Getting the images of the movie 
- adding pagination to the result

## Quick Start

``` bash
# Install dependencies for server
npm install

# Install dependencies for client
npm run client-install

# Run the client & server with concurrently
npm run dev

# Run the Express server only
npm run server

# Run the React client only
npm run client

# Server runs on http://localhost:5000 and client on http://localhost:3000
```

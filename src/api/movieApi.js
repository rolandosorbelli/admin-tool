import delay from './delay';
require('isomorphic-fetch');

async function callApi() {

  const apiObj = await new Promise(
    res => fetch('https://ghibliapi.herokuapp.com/films')
      .then(res => res.json())
      .then(res)
      .catch(e => {
        throw new Error(e)
      })
  )

  return apiObj
}

async function apiMovies() {

  const movies = await callApi()
  // console.log(movies)

  function replaceAll(str, find, replace) {
    return str.replace(new RegExp(find, 'g'), replace);
  }

  //This would be performed on the server in a real app. Just stubbing in.
  const generateId = (movie) => {
    return replaceAll(movie.title, ' ', '-');
  };

  class MovieApi {
    static getAllMovies() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(Object.assign([], movies));
        }, delay);
      });
    }

    static saveMovie(movie) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          // Simulate server-side validation
          const minMovieTitleLength = 1;
          if (movie.title.length < minMovieTitleLength) {
            reject(`Title must be at least ${minMovieTitleLength} characters.`);
          }

          if (movie.id) {
            const existingMovieIndex = movies.findIndex(a => a.id == movie.id);
            movies.splice(existingMovieIndex, 1, movie);
          } else {
            //Just simulating creation here.
            //The server would generate ids and watchHref's for new movies in a real app.
            //Cloning so copy returned is passed by value rather than by reference.
            movie.id = generateId(movie);
            movie.watchHref = `http://www.pluralsight.com/movies/${movie.id}`;
            movies.push(movie);
          }

          resolve(Object.assign({}, movie));
        }, delay);
      });
    }

    static deleteMovie(movieId) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const indexOfMovieToDelete = movies.findIndex(movie => {
            movie.movieId == movieId;
          });
          movies.splice(indexOfMovieToDelete, 1);
          resolve();
        }, delay);
      });
    }
  }
}

export default MovieApi;

apiMovies()

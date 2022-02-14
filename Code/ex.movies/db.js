const movies = [];

let count = 1;

exports.findall = () => {
    return movies;
};

exports.findbyid = (id) => {
    const movieindex = movies.map(movie => movie.id).indexOf(parseInt(id));
    if (movieindex === -1) {
        console.log(`Id not valid`);
    }
    return movies[movieindex];
};

exports.create = (movie) => {
  const newmovie = {
      id: count,
      name: movie.name
  };
  count++;
  movies.push(newmovie);
  console.log(`Movie with id: ${newmovie.id} has been created`);
  return newmovie;  
};

exports.update = (movie, id) => {
    const movieindex = movies.map(movie => movie.id).indexOf(parseInt(id));
    movies[movieindex].name = movie.name;
    return movies[movieindex];
};

exports.delete = (id) => {
    const movieindex = movies.map(movie => movie.id).indexOf(parseInt(id));
    movies.splice(movieindex, 1);
    console.log(`Movie with id: ${id} has been deleted`);
    return {message: "deleted movie"}
};
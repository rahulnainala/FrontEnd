const movies = [
  {
    title: "a",
    year: 2018,
    rating: 4.5,
  },
  {
    title: "b",
    year: 2017,
    rating: 4.8,
  },
  {
    title: "c",
    year: 2018,
    rating: 4.9,
  },
];

SortMovies(movies);
function SortMovies(array) {
  const filteredMovies = array
    .filter((movie) => movie.year === 2018 && movie.rating > 4)
    .sort((a, b) => b.rating - a.rating)
    .reverse()
    .forEach((movie) => console.log(movie.title));
  return filteredMovies;
}

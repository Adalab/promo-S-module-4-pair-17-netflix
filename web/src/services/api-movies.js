// login

const getMoviesFromApi = (params) => {
  console.log(params);
  return fetch(`//localhost:4000/movies/?genre=${params.genre}`, {
    method: "GET",
    headers: { "content-type": "application/json" },
  })
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
};

const objToExport = {
  getMoviesFromApi: getMoviesFromApi,
};

export default objToExport;

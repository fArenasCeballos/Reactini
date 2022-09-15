export const UseDetalle = () => {

const getAllDetalle = async (numberPage) => {
    try {
      var requestOptions = {
        method: "GET",
        redirect: "follow",
      };
      await fetch(
        `https://swapi.dev/api/people/${numberPage}`,
        requestOptions
      )
        .then((response) => response.json())
        .then((result) => setDataPeople(result.results))
        .catch((error) => console.log("error", error));
    } catch (error) {
      console.log(error);
    }
  };
  return {
    getAllDetalle,
  };
}
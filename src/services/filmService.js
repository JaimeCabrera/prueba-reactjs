import axios from "axios";

export const getFilmInfo = async (films) => {
  // const response = await axios.get(url);
  // return response.data;
  const response = [];
  await Promise.all(
    films.map((url) =>
      axios.get(url).then((res) => {
        response.push(res.data);
      })
    )
  );

  // console.log(newResponse);
  return response;
};

export const getFilmDetails = async (films) => {
  // modificando la respuesta añadiendole el valor del nombre de mundo
  const response = [];
  await Promise.all(
    films.map((el) =>
      axios.get(el.homeworld).then((res) => {
        response.push({ ...el, homeworld_name: res.data.name });
      })
    )
  );
  return response;
};

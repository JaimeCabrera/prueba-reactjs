import axios from "axios";

export const getFilmInfo = async (films) => {
  // const response = await axios.get(url);
  // return response.data;
  const response = [];
  await Promise.all(
    films.map((url) =>
      axios.get(url).then((res) => {
        // console.log(res.data);
        response.push(res.data);
      })
    )
  );
  return response;
};

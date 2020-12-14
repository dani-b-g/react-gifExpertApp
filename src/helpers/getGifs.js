export const getGifs = async (category) => {
  //   axios
  //     .get(
  //       `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
  //         category
  //       )}&limit=10&api_key=bWQUspX1DF1LLDMGPCDtsDN9vBZfzxI7`
  //     )
  //     .then((res) => {
  //       const { data } = res.data;
  //       const gifs = data.map((img) => {
  //         return {
  //           id: img.id,
  //           title: img.title,
  //           url: img.images?.downsized_medium.url,
  //         };
  //       });
  //       console.log(gifs);
  //       return gifs;
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //     });

  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
    category
  )}&limit=10&api_key=bWQUspX1DF1LLDMGPCDtsDN9vBZfzxI7`;
  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifs = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url,
    };
  });
  return gifs;
};

export const getData = async (query) => {
  const KEY_API = '563492ad6f91700001000001b13fdfef0b8b45e7bbc33c02891bd117'
  console.log(process.env);
  const responsive = await fetch(`https://api.pexels.com/v1/search?query=${query}&per_page=20`, {
    headers: {
      Authorization: KEY_API
    }
  });
  if (responsive.ok) {
    return await responsive.json()
  }
  throw new Error('Network error')

}

export const getData = async (query) => {
  const responsive = await fetch(`https://api.pexels.com/v1/search?query=${query}&per_page=20`, {
    headers: {
      Authorization: '563492ad6f91700001000001b13fdfef0b8b45e7bbc33c02891bd117'
    }
  });
  if (responsive.ok) {
    return await responsive.json()
  }
  throw new Error('Network error')

}
// 563492ad6f91700001000001b13fdfef0b8b45e7bbc33c02891bd117
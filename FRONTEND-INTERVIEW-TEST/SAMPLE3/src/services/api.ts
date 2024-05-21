export async function getAllProducts(
  page: number = 0,
  subscription?: string,
  tagsLike?: string
) {
  const sub = subscription ? `&subscription=${subscription}` : '';
  const tags = tagsLike ? `&tags_like=${tagsLike}` : '';
  const response = await fetch(
    `${process.env.REACT_APP_SERVER}/products?${sub}&${tags}&_page=${page}`
  );
  if (response.status !== 200) {
    throw new Error('Error fetching products');
  }
  return response.json();
}

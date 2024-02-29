const shortText = (text) => {
  return text.split(" ").slice(0, 3).join(" , ");
};

const searchProducts = (products, search) => {
  if (!search) return products;
  const searchedProducts = products.filter((p) =>
    p.title.toLowerCase().includes(search)
  );
  return searchedProducts;
};

const filterProducts = (products, category) => {
  if (category == "all" || !category) return products;
  const filtered = products.filter((p) => p.category == category);
  return filtered;
};

const createQueryObject = (currentQuery, newQuery) => {
  if (newQuery.search == "") {
    const { search, ...rest } = currentQuery;
    return rest;
  }
  if (newQuery.category == "all") {
    const { category, ...rest } = currentQuery;
    return rest;
  }
  return { ...currentQuery, ...newQuery };
};

const getInItioalQuery = (searchParams) => {
  const category = searchParams.get("category");
  const search = searchParams.get("search");
  const query = {};
  if (category) query.category = category;
  if (search) query.search = search;
  return query;
};

const sumQUantity = (products) => {
  return products.reduce((count, product) => count + product.quantity, 0);
};

const sumPrice = (products) => {
  return products
    .reduce((total, product) => total + product.price * product.quantity, 0)
    .toFixed(2);
};
const productsQuantity = (state, id) => {
  const index = state.selectedItems.findIndex((item) => item.id == id);

  if (index == -1) {
    return 0;
  } else {
    return state.selectedItems[index].quantity;
  }
};

export {
  shortText,
  searchProducts,
  filterProducts,
  createQueryObject,
  getInItioalQuery,
  sumPrice,
  sumQUantity,
  productsQuantity,
};

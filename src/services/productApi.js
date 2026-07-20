import api from "./api";

export const getProductDetails = async (id) => {
  const response = await api.get(`/products/${id}`);
  return response.data;
};

export const getAllProducts = async () => {
  const response = await api.get("/products");
  return response.data.products;
};

export const searchProducts = async (search) => {
  const response = await api.get(`/products/search?q=${search}`);
  return response.data.products;
};
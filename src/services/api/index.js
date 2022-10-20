const API = process.env.NEXT_PUBLIC_API_URL;
const VERSION = process.env.NEXT_PUBLIC_API_VERSION;

const endPoints = {
  auth: {
    login: `${API}/api/${VERSION}/auth/login`,
    profile: `${API}/api/${VERSION}/auth/profile`,
  },
  products: {
    // https://api.escuelajs.co/api/v1/products/8
    getProduct: (id) => `${API}/api/${VERSION}/products/${id}`,
    getProducts: (limit, offset) => `${API}/api/${VERSION}/products?limit=${limit}
    &offset=${offset}`,
  },
  categories: {
    // https://api.escuelajs.co/api/v1/categories?limit=5
    getCategories: `${API}/api/${VERSION}/categories?limit=5`,
  },
};

export default endPoints;

import axios from 'axios';
import endPoints from 'services/api/index';

const addProduct = async (body) => {
  const config = {
    Headers: {
      accept: '*/*',
      'Content-type': 'application/json',
    },
  };
  const response = await axios.post(endPoints.products.addProducts, body, config);
  return response.data;
};

export { addProduct };

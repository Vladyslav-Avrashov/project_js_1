import axios from 'axios';

axios.defaults.baseURL = 'https://portfolio-js.b.goit.study/api/reviews/';

export const getData = async () => {
  try {
    const response = await axios.get();
    return response.data;
  } catch (error) {
    console.log('Something went wrong with receiving feedback');
    throw error;
  }
};

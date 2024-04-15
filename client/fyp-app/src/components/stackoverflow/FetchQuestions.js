import axios from 'axios';

const client_id = '28481';
const client_secret = 'UPhXm3iCFOOjxCnX8GbOAg((';
const key = 'K6EdTLoFz65XNCJglUHNTQ((';

const fetchQuestions = async () => {
  try {
    const response = await axios.get('https://api.stackexchange.com/2.3/questions', {
      params: {
        order: 'desc',
        sort: 'activity',
        site: 'stackoverflow',
        client_id: client_id,
        client_secret: client_secret,
        key: key
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export default fetchQuestions;

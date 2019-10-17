const API_URL = 'http://localhost:8000';
    
const getTenCards = async () => {
  const url = `${API_URL}`;
  const result = await fetch(url);
  console.log(result);   
  return extractResult(result);
};

const getCards = async () => {
  const url = `${API_URL}`;
  const result = await fetch(url);
  console.log(result);   
  return extractResult(result);
}; 

const sendCard = async (data) => {
  const endpoint = 'add';
  const url = `${API_URL}/${endpoint}`;
  const result = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  });
  return extractResult(result);
};

const getOneNews = async id => {
  const endpoint = `news/${id}`;
  const url = `${API_URL}/${endpoint}`;
  const result = await fetch(url);
  return extractResult(result);
};

const getHotNews = async () => {
  const endpoint = 'hotnews';
  const url = `${API_URL}/${endpoint}`;
  const result = await fetch(url);
  return extractResult(result);
};

const getTagNews = async tag => {
  const endpoint = `tags/${tag}`;
  const url = `${API_URL}/${endpoint}`;
  const result = await fetch(url);
  return extractResult(result);
};

const extractResult = async result => {
  const entity = await result.json();
  const success = result.statusText === 'OK';
  return { success, entity };
};

export { 
  getCards,
  getTenCards,
  sendCard,
  getOneNews,
  getHotNews,
  getTagNews
};

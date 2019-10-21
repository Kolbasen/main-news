const API_URL = 'http://localhost:8000';
    
const getTenCards = async () => {
  const url = `${API_URL}`;
  const result = await fetch(url);
  console.log(result);   
  return extractResult(result);
};

const getCards = async token => {
  const endpoint = `${token}`
  const url = `${API_URL}/admin/${endpoint}`;
  const result = await fetch(url);
  console.log(result);   
  return extractResult(result);
}; 

const sendCard = async (header, tags, text, token) => {
  const endpoint = 'admin/add';
  const url = `${API_URL}/${endpoint}`;
  const data = { header, tags, text, token }
  const result = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  });
  return extractResult(result);
};

const editCard = async (id, header, text, tags, token) => {
  const endpoint = `admin/edit`
  const url = `${API_URL}/${endpoint}`
  const data = { id, header, text, tags, token }
  const result = await fetch(url, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  })
  return extractResult(result)
}

const deleteCard = async (id, token) => {
  const endpoint = `admin/delete`
  const url = `${API_URL}/${endpoint}`
  const result = await fetch(url, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({id , token})
  })
  // return extractResult(result)
  return result;  
}

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

const loginQuery = async (data) => {
  const endpoint = `admin/login`;
  const url = `${API_URL}/${endpoint}`;
  const result = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  })
  return extractResult(result)
}

const extractResult = async result => {
  const entity = await result.json();
  const success = result.statusText === 'OK';
  return { success, entity };
};

export { 
  getCards,
  getTenCards,
  sendCard,
  deleteCard, 
  editCard,
  getOneNews,
  getHotNews,
  getTagNews,
  loginQuery
};

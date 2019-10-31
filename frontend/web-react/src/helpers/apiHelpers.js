const API_URL = 'http://localhost:8000';
    
const getTenCards = async currID => {
  const url = `${API_URL}`;
  const result = await fetch(url, {
    method: 'GET',
    headers: {
      'CurrentId': `${currID}`
    }
  }); 
  return extractResult(result);
};

const getCards = async token => {
  const endpoint = ``;
  const url = `${API_URL}/admin/${endpoint}`;
  const result = await fetch(url, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`,
    }
  });
  console.log(result);   
  return extractResult(result);
}; 

const sendCard = async (formData, token) => {
  const endpoint = 'admin/add';
  const url = `${API_URL}/${endpoint}`;
  console.log(formData)
  const result = await fetch(url, {
    method: 'PUT',
    headers: {
      'Authorization': `Bearer ${token}`,
    },
    body: formData
  });
  return extractResult(result);
};

const editCard = async (formData, token) => {
  console.log(token)
  const endpoint = 'admin/edit';
  const url = `${API_URL}/${endpoint}`;
  const result = await fetch(url, {
    method: 'PUT',
    headers: {
      'Authorization': `Bearer ${token}`,
    },
    body: formData
  });
  return extractResult(result);
};

const deleteCard = async (id, token) => {
  const endpoint = 'admin/delete';
  const url = `${API_URL}/${endpoint}`;
  const result = await fetch(url, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify({id})
  });
  // return extractResult(result)
  return result;  
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

const loginQuery = async (data) => {
  const endpoint = 'admin/login';
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

const sendPhoto = async formData => {
  const endpoint = 'photo/upload';
  const url = `${API_URL}/${endpoint}`;
  const result = await fetch(url, {
      method: 'PUT',
      body: formData
  });
  return extractResult(result)
};

const getPhoto = async () => {

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
  deleteCard, 
  editCard,
  getOneNews,
  getHotNews,
  getTagNews,
  loginQuery,
  sendPhoto,
  getPhoto
};

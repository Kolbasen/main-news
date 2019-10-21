import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom'
import Form from '../Form/Form';
// import Info from '../Info/Info'
import { sendCard, getCards, editCard, deleteCard } from '../../../helpers/apiHelpers';
import { getToken } from '../../../helpers/tokenHelpers';

export default function Admin() {
  const [isLoading ,setIsLoading] = useState(true);
  const [cards, setCards] = useState(null);
  const [data, setData] = useState({})
  const [addingNews, setAddingNews] = useState(false);
  const [redirect, setRedirect] = useState(false);

  const addNews = async (header, tags, text, token) => {
    const result = await sendCard(header, tags, text, token);
    console.log(result)
  };

  const editNews = async (id ,header, tags, text, token) => {
    const result = await editCard(id, header, tags, text, token)
    console.log(result)
  }

  const deleteNews = async (id, token) => {
    const result = await deleteCard(id, token)
    console.log(result)
  }

  const submitData = (id, header, tags, text, type, token) => {
    
    if (type === 'add') {
      addNews(header, tags, text, token)
    }
    if (type === 'edit') {
      editNews(id ,header, tags, text, token)
    }
    if (type === 'delete') {
      deleteNews(id)
    }
  };

  useEffect(() => {
    const token = getToken();
    if (!token) setRedirect(true); 
  }, []);

  useEffect(() => {
    const fetchStartingData = async () => {
      const result = await getCards(getToken());
      if (result.success) {
        console.log(result.entity);
        setCards(result.entity);
        setIsLoading(false);
      } else {
        console.log('Something went wrong');
      }
    };
    fetchStartingData();
        
  }, []); 

  if (isLoading) return <h1>Is Loading...</h1>;

  if (redirect) return <Redirect to='/adminlogin'/>

  return (
    <div>
      <button onClick={() => setAddingNews(prevState => !prevState)}>Add news</button>
      <Form 
        submitData={submitData} 
        value={{id: null, header: '', tags: '', text: ''}} 
        addingNews={addingNews}
        setAddingNews={setAddingNews}
      />
      {
        cards.map((value) => (
          <div key={value.id}>
          <div style={{display: 'flex', alignItems: 'center '}}>
            <h2>{value.name}</h2>
            <p>{value.text}</p>
          </div>
          <Form submitData={submitData} value={value}/>
        </div>
        ))
      }
    </div>
  );
}
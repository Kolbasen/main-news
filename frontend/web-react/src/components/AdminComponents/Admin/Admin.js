import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import Form from '../Form/Form';
import { sendCard, getCards, editCard, deleteCard, sendPhoto } from '../../../helpers/apiHelpers';
import { getToken } from '../../../helpers/tokenHelpers';
import useStyles from './style'

const API_URL = process.env.NODE_ENV === 'production' ? `${process.env.REACT_APP_API_URL}` : 'http://localhost:8000';


export default function Admin() {
  const [isLoading ,setIsLoading] = useState(true);
  const [cards, setCards] = useState(null);
  const [addingNews, setAddingNews] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const classes = useStyles();

  const addNews = async (shortHeader,header, tags, text, photo, token) => {
    const formData = new FormData();
    formData.append('shortHeader', shortHeader);
    formData.append('header', header);
    formData.append('tags', tags);
    formData.append('text', text);
    formData.append('photo', photo);
    try {
      const result = await sendCard(formData, token);
    } catch (error) {
      console.log('API call error:', error);
    }
  };

  const editNews = async (id, shortHeader, header, tags, text, photo, token) => {
    const formData = new FormData();
    formData.append('id', id);
    formData.append('shortHeader', shortHeader);
    formData.append('header', header);
    formData.append('tags', tags);
    formData.append('text', text);
    formData.append('photo', photo);
    try {
      const result = await editCard(formData, token);
    } catch (error) {
      console.log('API call error:', error);
    }
  };

  const deleteNews = async (id, token) => {
    try {
      const result = await deleteCard(id, token);
    } catch (error) {
      console.log('API call error:', error);
    }
  };

  const submitData = (id, shortHeader, header, tags, text, type, photo, token) => {
    if (type === 'add') {
      addNews(shortHeader, header, tags, text, photo, token);
    }
    if (type === 'edit') {
      editNews(id ,shortHeader ,header, tags, text, photo, token);
    }
    if (type === 'delete') {
      deleteNews(id, token);
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
        setCards(result.entity);
        setIsLoading(false);
      } else {
        console.log('Something went wrong');
      }
    };
    fetchStartingData();    
  }, []); 

  if (isLoading) return <h1>Is Loading...</h1>;

  if (redirect) return <Redirect to='/adminlogin'/>;

  return (
    <div>
      <button onClick={() => setAddingNews(prevState => !prevState)}>Add news</button>
      <Form 
        submitData={submitData} 
        value={{id: null, shortHeader: '', header: '', tags: '', text: ''}} 
        addingNews={addingNews}
        setAddingNews={setAddingNews}
      />
      {
        cards.map((value) => (
          <div key={value.id} >
            <div className={classes.card}>
              <img src={`${API_URL}/${value.photo}`} className={classes.image}/>
              <h1>{value.shortHeader} </h1>
              <h2>{value.header} </h2>
              <p>{value.text} </p>
            </div>
            <Form submitData={submitData} value={value} />
            <div style={{borderBottom: '2px solid black', marginBottom: 50, marginTop: 50}}/>
          </div>
        ))
      }
    </div>
  );
}
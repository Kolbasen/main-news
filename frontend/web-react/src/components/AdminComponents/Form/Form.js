import React, { useState, useRef } from 'react'; 
import { Container, Typography, TextField, Slide, Grid, CssBaseline, Button, TextareaAutosize  } from '@material-ui/core';
// import useStyles from './  style';
import ImageCrop from '../ImageCrop/ImageCrop';
import { getToken } from '../../../helpers/tokenHelpers';
import './index.css';

export default function AddForm(props) {
  const { value, submitData, addingNews, setAddingNews } = props;
  // const classes = useStyles(); 
  const [header, setHeader] = useState(value.header);
  const [shortHeader, setShortHeader] = useState(value.shortHeader);
  const [tags, setTags] = useState(value.tags);
  const [text, setText] = useState(value.text);
  const [token, setToken] = useState(getToken());
  const [editingNews, setEditingNews] = useState(false);
  const [img, setImg] = useState(null);
  
  const setImageUrl = url => {
    console.log(url)
    setImg(url);
  };
  return (
    <Container component='main'>
      <CssBaseline/>
      <button onClick={() => {
        setEditingNews((prevState) => !prevState);
      }}>
        Edit news
      </button>
      <button onClick={() => {
        submitData(value.id, shortHeader ,header, tags, text, 'delete', img, token);
      }
      }>
        Delete news
      </button>
      <Slide 
        direction='up' 
        in={editingNews || addingNews} 
        mountOnEnter 
        unmountOnExit
      >
        <div className='root'>
          <Typography>
            Add New Marker 
          </Typography>
          <button onClick={() => {
            addingNews ?
              setAddingNews(false) :
              setEditingNews(false);
          }}>Close</button>
          <form className='form'>
            <Grid>
              <ImageCrop setImageUrl={setImageUrl}/>
            </Grid>
            <Grid>
              <TextField
                className='input'
                label='Short Header'
                onChange={({target}) => setShortHeader(target.value)}
                value={shortHeader}
                autoFocus
                fullWidth
                required
              />
            </Grid>
            <Grid>
              <TextField
                className='input'
                label='Header'
                onChange={({target}) => setHeader(target.value)}
                value={header}
                autoFocus
                fullWidth
                required
              />
            </Grid>
            <Grid>
              <TextField
                className='input'
                label='Tags'
                onChange={({target}) => setTags(target.value)}
                value={tags}
                fullWidth
                required
              />
            </Grid>
            <Grid>
              <TextareaAutosize
                className='input'
                label='Text'
                onChange={({target}) => setText(target.value)}
                value={text}
                fullWidth
                required
              />
            </Grid>
            <Grid>
              {
                addingNews ? 
                  <Button 
                    className='input'
                    color='secondary' 
                    variant='contained' 
                    onClick={() => {
                      submitData(value.id, shortHeader,header, tags, text, 'add', img, token);
                      setShortHeader('');
                      setHeader('');
                      setTags('');
                      setText('');
                      setAddingNews(false);
                    }}>
								Save Info
                  </Button> 
                  :
                  <Button 
                    className='input'
                    color='secondary' 
                    variant='contained' 
                    onClick={() => {
                      submitData(value.id, shortHeader ,header, tags, text, 'edit', img, token);
                      setEditingNews(false);
                    }}>
								Edit Info
                  </Button> 
              }
            </Grid>
          </form>
        </div>
      </Slide>
    </Container>
  );  
}
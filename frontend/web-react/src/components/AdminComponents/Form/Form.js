import React, { useState, useEffect } from 'react'; 
import { Container, Typography, TextField, Slide, Grid, CssBaseline, Button, TextareaAutosize  } from '@material-ui/core';
import useStyles from './style';
import { getToken } from '../../../helpers/tokenHelpers';


export default function AddForm(props) {
  const { value, submitData, addingNews, setAddingNews } = props;
  const classes = useStyles(); 
  const [header, setHeader] = useState(value.name);
  const [tags, setTags] = useState(value.tags);
  const [text, setText] = useState(value.text);
  const [token, setToken] = useState(getToken());
  const [editingNews, setEditingNews] = useState(false)
	
  return (
    <Container component='main'>
      <CssBaseline/>
      <button onClick={() => {
            setEditingNews((prevState) => !prevState)
      }}>
        Edit news
      </button>
      <button onClick={() => {submitData(value.id, header, tags, text, 'delete', token)}}>Delete news</button>
      <Slide 
        direction='up' 
        in={editingNews || addingNews} 
        mountOnEnter 
        unmountOnExit
      >
        <div className={classes.elements}>
          <Typography>
            Add New Marker 
          </Typography>
          <button onClick={() => {
            addingNews ?
            setAddingNews(false) :
            setEditingNews(false)
          }}>Close</button>
          <form className={classes.form}>
            <Grid>
              <TextField
                className={classes.input}
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
                className={classes.input}
                label='Tags'
                onChange={({target}) => setTags(target.value)}
                value={tags}
                autoFocus
                fullWidth
                required
              />
            </Grid>
            <Grid>
              <TextareaAutosize
                className={classes.input}
                label='Text'
                onChange={({target}) => setText(target.value)}
                value={text}
                autoFocus
                fullWidth
                required
              />
            </Grid>
            <Grid>
              {
                addingNews ? 
                <Button 
                className={classes.input} 
                color='secondary' 
                variant='contained' 
                onClick={() => {
                  submitData(value.id, header, tags, text, 'add', token);
                  setAddingNews(false)
                }}>
								Save Info
              </Button> 
              :
              <Button 
                className={classes.input} 
                color='secondary' 
                variant='contained' 
                onClick={() => {
                  submitData(value.id, header, tags, text, 'edit', token);
                  setEditingNews(false)
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
import React, { useState } from 'react' 
import { Container, Typography, TextField, Slide, Grid, CssBaseline, Button, TextareaAutosize  } from '@material-ui/core'
import useStyles from './style';


export default function AddForm(props) {
    console.log(props)
    const { submitNews, addingNews } = props;
    const classes = useStyles(); 
    const [header, setHeader] = useState('');
    const [text, setText] = useState('');

    console.log(addingNews)
    return (
        <Container component='main' maxWidth='xs'>
			<CssBaseline/>
			<Slide 
				direction='up' 
				in={addingNews} 
				mountOnEnter 
				unmountOnExit
			>
				<div className={classes.elements}>
					<Typography>
                    Add New Marker
					</Typography>
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
							<Button 
								className={classes.input} 
								color='secondary' 
								variant='contained' 
								onClick={() => {
                                    submitNews(header, text);
                                    setHeader('');
                                    setText('');
								}}>
								Save Info
							</Button>
						</Grid>
					</form>
				</div>
			</Slide>
		</Container>
    );  
}
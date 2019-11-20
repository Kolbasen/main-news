import React from 'react'
import useStyles from './style'
import { Link, ListItem, List } from '@material-ui/core'
import Email from '@material-ui/icons/Email'
import Telegram from '../../telegram-icon.png'
import { useHistory } from 'react-router-dom'

export default function Contacts() {
    const classes = useStyles()
    const history = useHistory()

    return (
        <div className={(history.location.pathname.match(/news\/([0-9])+/)) ? classes.currentNewsContent : classes.content}>
            <List className={classes.list} disablePadding>
                <ListItem  button component='a' href='mailto:realmainnews@gmail.com' target='__blank'>
                    <Email className={classes.button}/>
                </ListItem>
                <ListItem button component='a' href='https://t.me/realmainnews' target='__blank'>
                    <img  src={Telegram} height='45' width='45'/>
                </ListItem>
            </List>
        </div>
    )
}
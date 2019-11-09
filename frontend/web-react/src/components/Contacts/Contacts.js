import React from 'react'
import useStyles from './style'
import { Link } from '@material-ui/core'

export default function Contacts() {
    const classes = useStyles()
    return (
        <div className={classes.content}>
            <Link href='https://www.google.com.ua/?hl=ru'  target="_blank">>
                Link
            </Link>
        </div>
    )
}
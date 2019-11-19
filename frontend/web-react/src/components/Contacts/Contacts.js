import React from 'react'
import useStyles from './style'
import { Link } from '@material-ui/core'

export default function Contacts() {
    const classes = useStyles()
    return (
        <div className={classes.content}>
            <Link href='https://t.me/realmainnews'  target="_blank">>
                Телеграм канал
            </Link>
        </div>
    )
}
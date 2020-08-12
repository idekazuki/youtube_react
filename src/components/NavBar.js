import React from 'react'
import { withCookies } from 'react-cookie';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import { FiLogOut } from 'react-icons/fi'
import { FaYoutube } from 'react-icons/fa'

const useStyles = makeStyles((theme) => ({
    title: {
        flexGrow: 1,
    },
}));

export const NavBar = (props) => {
    const classes = useStyles();

    const Logout = () => {
        // クッキートークンを消す
        props.cookies.remove('jwt-token');
        // login画面に戻す
        window.location.href = '/';
    }
    return (
        <AppBar position="static">
            <Toolbar>
                <button className="logo">
                    <FaYoutube />
                </button>
                <Typography variant="h5" className={classes.title}>Youtube App</Typography>
                <button className="logout" onClick={() => Logout()}>
                    <FiLogOut />
                </button>
            </Toolbar>
        </AppBar>
    )
}

export default withCookies(NavBar)
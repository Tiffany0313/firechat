import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import ChatIcon from '@material-ui/icons/Chat';
import { auth } from '../firebase'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
    },
}));

export default function ButtonAppBar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="fixed">
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="chat">
                        <ChatIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        線上簡易聊天室
                    </Typography>
                    <Button color="inherit" onClick={() => auth.signOut()} disableRipple={true}>登出</Button>
                </Toolbar>
            </AppBar>
        </div >
    );
}

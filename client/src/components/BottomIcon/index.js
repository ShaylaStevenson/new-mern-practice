import React from "react";
import Avatar from '@material-ui/core/Avatar'
import MenuIcon from '@material-ui/icons/MenuRounded';
import CloseIcon from '@material-ui/icons/CloseRounded'
import { makeStyles } from '@material-ui/core/styles';
import { pink, green, grey, lightGreen, lime, teal } from '@material-ui/core/colors'


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        position: "fixed",

        //center on x-axis
        right: 0,
        left: 0,
        marginRight: "auto",
        marginLeft: "auto",

        // center on y-axis
        // top: 0,
        // bottom: 0,
        // marginTop: "auto",
        // marginBottom: "auto",
        
        top: 0,
        bottom: 0,
        marginTop: "75vh",
        marginBottom: "auto",

        // add dementions for "fixed" elements
        minHeight: "80px",
        minWidth: "80px",
        height: "80px",
        width: "80px",

        // set higher than drawer and modal
        zIndex: 1350
    },
    menuStyles: {
        fontSize: 60
    },
    teal: {
        color: "#000000",
        backgroundColor: teal[400],
    },  
    grey: {
        color: theme.palette.getContrastText(grey[500]),
        backgroundColor: grey[700],
    },
    large: {
        width: theme.spacing(10),
        height: theme.spacing(10),
    },
}));

export const BottomHamburger = () => {
    const classes = useStyles();
    return(
        <div className={classes.root}>
            <Avatar className={`${classes.teal} ${classes.large}`}>
                <MenuIcon className={classes.menuStyles} />
            </Avatar>

        </div>  
    )
}

export const BottomClose = () => {
    const classes = useStyles();
    return(
        <div className={classes.root}>
            <Avatar className={`${classes.grey} ${classes.large}`}>
                <CloseIcon className={classes.menuStyles} />
            </Avatar>
        </div>  
    )
}
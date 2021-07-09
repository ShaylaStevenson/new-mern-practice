import React from "react";
import Avatar from '@material-ui/core/Avatar'
import MenuIcon from '@material-ui/icons/MenuRounded';
import { makeStyles } from '@material-ui/core/styles';
import { pink, green } from '@material-ui/core/colors'


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
          margin: theme.spacing(1),
        },
        justifyContent: "flex-end",
        position: "fixed",
        right: 0,
        bottom: 0,
        padding: "8px",
    },
    menuStyles: {
        fontSize: 40
    },
    green: {
        color: '#fff',
        backgroundColor: green[500],
    },  
    pink: {
        color: theme.palette.getContrastText(pink[500]),
        backgroundColor: pink[500],
    },
    large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
    },
}));

const BottomHamburger = ({ hamburgerHandle }) => {
    const classes = useStyles();

    return(
        <div onClick={hamburgerHandle} className={classes.root}>
            <Avatar className={classes.pink}>
            {/* , classes.large */}
                <MenuIcon className={classes.menuStyles} />
            </Avatar>
        </div>
    )
}

export default BottomHamburger;
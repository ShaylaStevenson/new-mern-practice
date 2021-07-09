import React from 'react';
//, { useState }
//import { BottomNavigation } from "@material-ui/core"
//import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
//import GitHubIcon from '@material-ui/icons/GitHub';
//import ShareIcon from '@material-ui/icons/Share';
//import ContactMailIcon from '@material-ui/icons/ContactMail';
//import { makeStyles } from '@material-ui/core/styles';
import BottomHamburger from "../BottomHamburger"
import SideMenu from '../SideMenu';

function Footer() {

    // state, state-setter, and initial state
    // const [navIsOpen, setIsOpen] = useState(false)
    // console.log("NavIsOpen: " + navIsOpen)

    //use achorEl instead of state open when using mui Menu
    const [anchorEl, setAnchorEl] = React.useState(null);
    console.log("anchorEl: " + anchorEl)

    const hamburgerHandle = (event) => {
        if (!anchorEl) {
            //setIsOpen(true)
            setAnchorEl(event.currentTarget);
            //console.log(event.currentTarget)
        } else {
            //setIsOpen(false)
            setAnchorEl(null);
        }
    }
    
    function closeMenu() {
        setAnchorEl(null)
    }

    return(
        <div>
            <SideMenu 
               //navIsOpen={navIsOpen}
               open={Boolean(anchorEl)}
               anchorEl={anchorEl}
               closeMenu={closeMenu}
                
            />
            <BottomHamburger
                hamburgerHandle={hamburgerHandle}
            />
        </div>
    )
}

export default Footer;

{/* <div className="fixed-bottom">
<BottomNavigation
    value={value}
    onChange={(event, newValue) => {
        setValue(newValue);
    }}
    showLabels
    className={classes.root}
>
    <BottomNavigationAction label="Github" icon={<GitHubIcon />}/>
    <BottomNavigationAction label="Share" icon={<ShareIcon />} />
    <BottomNavigationAction label="Contact Me" icon={<ContactMailIcon />} /> 
    
</BottomNavigation>
</div> */}

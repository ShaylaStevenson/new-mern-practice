import React from "react"
import { Menu, MenuItem } from "@material-ui/core";

const SideMenu = ({ open, anchorEl, closeMenu }) => {
    return (
        <Menu open={open} anchorEl={anchorEl}>
            <MenuItem >Login</MenuItem>
            <MenuItem >Test Page</MenuItem>
            <MenuItem onClick={closeMenu}>Close Menu</MenuItem>
        </Menu>
    )
}

export default SideMenu;
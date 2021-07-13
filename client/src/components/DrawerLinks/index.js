import React from 'react'
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { List, ListItem, ListItemText }
//ListItemIcon
    from '@material-ui/core';
//import AccountCircleIcon from '@material-ui/icons/AccountCircle';

export default function DrawerLinks({ toggleModal, closeDrawer, modalIsOpen }) {

    return (
        <div>
            <Link to='/' onClick={closeDrawer} >
                <List>
                    <ListItem button key='Home'>
                        {/* <ListItemIcon><AccountCircleIcon/>
                        </ListItemIcon> */}
                        <ListItemText style={{fontSize: 4, textAlign:'right', flex:1}} primary='Home' />
                    </ListItem>
                </List>
            </Link>
            <Link to='/test-page' onClick={closeDrawer}>
                <List>
                    <ListItem button key='Test Page'>
                        {/* <ListItemIcon><AccountCircleIcon/>
                        </ListItemIcon> */}
                        <ListItemText style={{fontSize: 18, textAlign:'right', flex:1}} primary='Test Page' />
                    </ListItem>
                </List>
            </Link>
            
            {!modalIsOpen ? 
            <Link to='#' onClick={toggleModal}>      
                <List>
                    <ListItem button key='Login'>
                        {/* <ListItemIcon><AccountCircleIcon/>
                        </ListItemIcon> */}
                        <ListItemText style={{fontSize: 18, textAlign:'right', flex:1}} primary='Login' />
                    </ListItem>
                </List>
            </Link>
            :
            <Link to="#" disabled>
                <List>
                    <ListItem button key='Login'>
                        {/* <ListItemIcon><AccountCircleIcon/>
                        </ListItemIcon> */}
                        <ListItemText style={{fontSize: 18, textAlign:'right', flex:1}} primary='Login' />
                    </ListItem>
                </List>
                
            </Link>
            }
        </div>
    )
}

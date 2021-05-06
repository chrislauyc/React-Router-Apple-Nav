import React from 'react';
import {
    AppBar,Toolbar, IconButton, List, ListItem, ListItemText, makeStyles, Container
} from '@material-ui/core';
import {Home} from '@material-ui/icons';
import {Link} from 'react-router-dom';

function Header(props){
    const {navLinks} = props;
    const useStyles = makeStyles({
        navDisplayFlex:{
          display:'flex',
          justifyContent:'space-between'
        },
        linkText:{
          textDecoration:'none',
          textTransform:'uppercase',
          color:'white'
        }
      })
      const classes = useStyles();
      return (
          <header className="App-header">
            <AppBar>
              <Toolbar>
                <Container className={classes.navDisplayFlex}>
                  <IconButton>
                    <Link to='/'>
                      <Home />
                    </Link>
                  </IconButton>
                  <List className={classes.navDisplayFlex}>
                    {
                      navLinks.map(({title,path})=>(
                        <Link to={path} key={title} className={classes.linkText}>
                          <ListItem button>
                            <ListItemText primary={title} />
                          </ListItem>
                        </Link>
                      ))
                    }
                  </List>
                </Container>
              </Toolbar>
            </AppBar>
          </header>
      );
}
export default Header;
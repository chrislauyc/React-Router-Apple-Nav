import './App.css';
import Header from './components/Header';
import {Route, Switch} from 'react-router-dom';
import Products from './components/Products';
import Blog from './components/Blog';
import Contacts from './components/Contacts';
import About from './components/About';
const navLinks = [
  {title:'Products',path:'/products'},
  {title:'Blog',path:'/blog'},
  {title:'Contacts',path:'/contacts'},
  {title:'About',path:'/about'}
];
function App() {
  return (
    <div className="App">
      <Header navLinks={navLinks}/>
      <Switch>
        <Route exact path='/'>
          <div>This is Home</div>
        </Route>
        <Route path='/products'>
          <Products></Products>
        </Route>
        <Route path='/blog'>
          <Blog></Blog>
        </Route>
        <Route path='/contacts'>
          <Contacts></Contacts>
        </Route>
        <Route path='/about'>
          <About></About>
        </Route>
      </Switch>
    </div>
  );
}

export default App;

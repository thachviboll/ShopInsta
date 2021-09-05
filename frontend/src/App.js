import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import HomeScreen from './Screens/HomeScreen';
import ItemScreen from './Screens/ItemScreen'; 


function App() {
  const openSidebar = () =>{
    document.querySelector(".sidebar").classList.add("open");
  }

  const closeSidebar = () =>{
    document.querySelector(".sidebar").classList.remove("open");
  }
  return (
    <BrowserRouter>      
      <div className="grid-Container">
          <header className="header">
              <div className="name">
                  <button onClick={openSidebar}>
                      &#9776;
                  </button>
                  <Link to="/">InstaShop</Link>  
              </div>
              <div className="menu">
                  <a href="cart.html">Cart </a>
                  <a href="signin.html">Sign-In</a>
              </div>
          </header>
          <aside className="sidebar">
              <h3>
                  Shopping Categories
              </h3>
              <button className="sidebarCloseButton" onClick={closeSidebar}>
                  x
              </button>
              <ul>
                  <li>
                      <a href="cakes.html"> Cakes</a>
                  </li>
                  <li>
                      <a href="sushibake.html"> Sushi Bakes</a>
                  </li>              
              </ul>
          </aside>
          <main className="main">
                  <Route path="/item/:id" component={ItemScreen} />
                  <Route path="/" exact={true} component={HomeScreen} />  
                  
          </main>
      </div>
    </BrowserRouter>      
    );
  }

export default App;

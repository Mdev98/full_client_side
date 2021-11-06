import React from "react";
import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar"
import Home from "./pages/home/Home";
import Transaction from "./pages/transactions/Transaction";
import Trans from "./pages/transaction/Trans";
import Stockage from "./pages/stockage/Stockage";
import Stock from "./pages/stock/Stock";
import NewStock from "./pages/newStock/NewStock";
import Commandes from "./pages/commandes/Commandes";
import Login from "./pages/auth/Login";
import axios from "axios";

import { useSelector } from "react-redux";


import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Navigate
} from "react-router-dom";

function App() {
  const user = useSelector((state) => state.user.currentUser);
  {user ? axios.defaults.headers.common['Authorization'] = `Bearer ${user.token}` : axios.defaults.headers.common['Authorization'] = `Bearer `};
  return (
    <Router>
    <Switch>
    {!user ? 
      <Route path='/'>
        {!user && <Login />}
      </Route>
      :
      <>
      <Topbar />
      <div className="container">
        <Sidebar /> 
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/transactions">
            <Transaction />
          </Route>
          <Route path="/transaction/:transactionId">
            <Trans />
          </Route>
          <Route path="/stockages">
            <Stockage />
          </Route>
          <Route path="/stockage/:stockId">
            <Stock />
          </Route>
          <Route path="/newstockage">
            <NewStock />
          </Route>
          <Route path="/commandes">
            <Commandes />
          </Route>
      </div>
      </>
    }
      </Switch>
    </Router>
  );
}

export default App;

import { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.scss';
import Header from './components/Header';
import InvoiceDetails from './components/InvoiceDetails';
import InvoiceList from './components/InvoiceList';
import Sidebar from './components/Sidebar';
import useFetch from './hooks/useFetch';

const App = () => {

  const { data: invoices } = useFetch('http://localhost:8000/data');

  return (
    <div className="App">
    <Sidebar />
      <div className="container">
        <Switch>
          <Route exact path="/">
            <Header invoices={invoices}/>
            <InvoiceList invoices={invoices} />
          </Route>
          <Route path="/invoice/:id">
            <InvoiceDetails />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;

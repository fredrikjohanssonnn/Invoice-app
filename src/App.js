import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.scss';
import Header from './components/Header';
import ViewInvoice from './components/ViewInvoice';
import InvoiceList from './components/InvoiceList';
import Sidebar from './components/Sidebar';
import useFetch from './hooks/useFetch';

const App = () => {

  const { data: invoices, isLoading } = useFetch('http://localhost:8000/data');

  return (
    <div className="App">
    <Sidebar />
      <div className="container">
        <Switch>
          <Route exact path="/">
            {invoices && (
              <React.Fragment>
                <Header invoices={invoices}/>
                <InvoiceList invoices={invoices} />
              </React.Fragment>
            )}
          </Route>
          <Route path="/invoice/:id">
            <ViewInvoice />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;

import { useEffect, useState } from 'react';
import './App.scss';
import Header from './components/Header';
import InvoiceList from './components/InvoiceList';

const App = () => {

  const [invoices, setInvoices] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/data', {
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }})
      .then(res => res.json())
      .then(data => {
        setInvoices(data)
      })
  }, [])

  return (
    <div className="App">
      <div className="container">
        <Header invoices={invoices}/>
        <InvoiceList invoices={invoices} />
      </div>
    </div>
  );
}

export default App;

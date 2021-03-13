import './App.scss';
import Header from './components/Header';
import InvoiceList from './components/InvoiceList';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <InvoiceList />
      </div>
    </div>
  );
}

export default App;

import './App.css';

import Header from './components/Header';
import Product from './components/Product';

function App() {
  return (
    <div className="App">
      <Header />
      <section className="product-cards">
        <Product title="A Sign of Four" author="Sir Arthur Conan Doyle" text="Lorem..." />
        <Product title="A Study In Scarlet" author="Sir Arthur Conan Doyle" text="Lorem..." />
        <Product title="Baskervilles Hound" author="Sir Arthur Conan Doyle" text="Lorem..." />
        <Product title="The Adventures of Sherlock Holmes" author="Sir Arthur Conan Doyle" text="Lorem..." />
      </section>
    </div>
  );
}

export default App;

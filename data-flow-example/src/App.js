import './App.css';

import TodoItem from './components/TodoItem';

function App() {
  const title = 'Todo App';

  return (
    <div className="App">
      <h1>{ title }</h1>
      
      <ul>
        <TodoItem task="Köp kaffe" done={ true } />
        <TodoItem task="Köp tidning" done={ false } />
        <TodoItem task="Brygg kaffe" done={ false } />
        <TodoItem task="Drick kaffe" done={ false } />
      </ul>
    </div>
  );
}

export default App;

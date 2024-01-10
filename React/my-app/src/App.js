import List from './components/com_List.js';

function App() {
  return (
    <div className="m-5">
      <h1>Liste</h1>
      <List beverage="coffee" />
      <List beverage="Tea" />
      <List beverage="Beer" />
    </div>
  );
}

export default App;

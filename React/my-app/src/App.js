import List from './components/com_List.js';
import Button from './components/com_Button.js';

function App() {
  return (
    <div className="m-5">
      <h1>Liste</h1>
      <List beverage="coffee" />
      <List beverage="Tea" />
      <List beverage="Beer" />

      <h1 className="mt-5">Button</h1>
      <Button buttonName="Sendar" />
    </div>
  );
}

export default App;

import List from './components/com_List.js';
import Button from './components/com_Button.js';
import Card from './components/com_Card.js';

function App() {
  return (
    <div className="m-5">
      <h1 className="mb-2">Liste</h1>
      <List beverage="coffee" />
      <List beverage="Tea" />
      <List beverage="Beer" />

      <h1 className="mt-10 mb-2">Button</h1>
      <Button buttonName="Sendar" />

      <h1 className="mt-10 mb-2">Card</h1>
      <Card cardName="John Doe" profession="Architect & Engineer" />
    </div>
  );
}

export default App;

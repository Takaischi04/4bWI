import List from './components/organisms/List_Organism.js';
import Content from './components/organisms/Content_Organism.js'

function App() {
  return (
    <div className="h-screen w-screen bg-black flex">
      <List />
      <Content />
    </div>
  );
}

export default App;

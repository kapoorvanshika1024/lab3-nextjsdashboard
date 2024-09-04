import Header from './components/Header';
import './App.css';
import Grocery from './components/Grocery';
const grocery = [
  {
    name: 'Apple',
    quantity: 3,
    id: 1,
  },
  {
    name: 'Oranges',
    quantity: 2,
    id: 2,
  },
  {
    name: 'Cucumber',
    quantity: 4,
    id: 3,
  },
  {
    name: 'Potatos',
    quantity: 4,
    id: 4,
  },
];

function App() {
  return (
    <div>
      <Header title='Grocery List' total={grocery.length} />
      {grocery.map((g) => (
        <Grocery name={g.name} quantity={g.quantity} id={g.id} key={g.id} />
      ))}
    </div>
  );
}

export default App;
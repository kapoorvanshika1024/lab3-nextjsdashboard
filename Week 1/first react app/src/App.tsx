import { useState } from 'react';
import Header from './components/Header';
import './App.css';
import Grocery from './components/Grocery';
import Search from './components/Search';
import AddGroceryForm from './components/AddGroceryForm';

function App() {
  const [search, setSearch] = useState('');
  const [grocery, setGrocery] = useState([
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
  ]);

  const handleDelete = (id: number) => {
    setGrocery((currentState) => currentState.filter((g) => g.id !== id));
  };

  const handleQuantityChange = (id: number, data: number) => {
    setGrocery((currentGrocery) =>
      currentGrocery.map((g) =>
        g.id === id
          ? {
              ...g,
              quantity:
                data > 0
                  ? g.quantity + data
                  : g.quantity > 0
                  ? g.quantity + data
                  : 0,
            }
          : g
      )
    );
  };

  const filterGrocery = (name: string) => {
    if (name) {
      setSearch(name);
    } else {
      setSearch('');
    }
  };
  const handleAddGrocery = (name: string) => {
    setGrocery((currState) => [
      ...currState,
      { name: name, quantity: 0, id: Math.floor(Math.random() * 1000) },
    ]);
  };
  return (
    <>
      <div>
        <AddGroceryForm onAddGrocery={handleAddGrocery} />
        <Header title='Grocery List' total={grocery.length} />
        <Search onFilter={filterGrocery} />
        {grocery
          .filter((st) => st.name.toLowerCase().includes(search.toLowerCase()))
          .map((g) => (
            <Grocery
              name={g.name}
              quantity={g.quantity}
              id={g.id}
              key={g.id}
              onDelete={handleDelete}
              onQuantityChange={handleQuantityChange}
            />
          ))}
      </div>
      <p></p>
    </>
  );
}

export default App;
type GroceryProps = {
    name: string;
    quantity: number;
    id: number;
  };
  function Grocery({ name, quantity, id }: GroceryProps) {
    return (
      <div className='grocery'>
        <span className='grocery-name'>{name}</span>
        <button className='counter-action increment'>+</button>
        <span className='counter-items'>{quantity}</span>
        <button className='counter-action decrement'>-</button>
      </div>
    );
  }
  export default Grocery;
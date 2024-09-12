type GroceryProps = {
  name: string;
  quantity: number;
  id: number;
  onDelete: (id: number) => void;
  onQuantityChange: (id: number, data: number) => void;
};
function Grocery({
  name,
  quantity,
  id,
  onDelete,
  onQuantityChange,
}: GroceryProps) {
  return (
    <div className='grocery'>
      <span className='grocery-name'>
        <button className='remove-grocery' onClick={() => onDelete(id)}>
          X
        </button>
        {name}
      </span>
      <button
        className='counter-action increment'
        onClick={() => onQuantityChange(id, 1)}
      >
        +
      </button>
      <span className='counter-items'>{quantity}</span>
      <button
        className='counter-action decrement'
        onClick={() => onQuantityChange(id, -1)}
      >
        -
      </button>
    </div>
  );
}
export default Grocery;
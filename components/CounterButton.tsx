import { useState } from 'react';

const CounterButton = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-white flex items-center justify-center h-screen">
      <button
        className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
        onClick={() => setCount(count + 1)}
      >
        count = {count}
      </button>
    </div>
  );
};

export default CounterButton;
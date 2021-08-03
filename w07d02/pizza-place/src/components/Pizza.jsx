import {useState} from 'react';

const Pizza = () => {
  // const [toppings, setToppings] = useState([]);
  // const [crustType, setCrustType] = useState('deep dish');

  // axios.post('/pizza', { toppings, crustType, glutenFree })
  // axios.post('/pizza', pizza)
  // { day, days, interviewers, appointments }
  // { days, interviewers, appointments }

  const [pizza, setPizza] = useState({
    toppings: [],
    crustType: '',
    glutenFree: false 
  });

  const [newTopping, setNewTopping] = useState('');

  const updateCrust = (event) => {
    setPizza(prevPizza => ({
      ...prevPizza,
      crustType: event.target.value
    }));
  };

  const addTopping = () => {
    // DON'T DO THIS!
    // toppings.push(newTopping);

    // setToppings((prevToppings) => {
    //   const newState = [...prevToppings];
    //   newState.push(newTopping);
    //   return newState;
    // });

    // setToppings((prevToppings) => (
    //   [
    //     ...prevToppings,
    //     newTopping
    //   ]
    // ));

    setPizza((prevPizza) => ({
      ...prevPizza,
      toppings: [
        ...prevPizza.toppings,
        newTopping
      ]
    }));

    setNewTopping('');
  };

  return (
    <div>
      <h2>Create your own pizza!</h2>

      <div>
        <h2>Crust: {pizza.crustType}</h2>
        <label>New Crust:</label>
        <input 
          value={pizza.crustType}
          onChange={updateCrust}
        />
      </div>

      <div>
        <label>New Topping:</label>
        <input
          value={newTopping}
          onChange={(event) => setNewTopping(event.target.value)}
        />
        <button onClick={addTopping}>Add topping!</button>
      </div>

      <div>
        { pizza.toppings.map((topping, index) => {
          return <h4 key={index}>{topping}</h4>
        })}
      </div>
    </div>
  );
};

export default Pizza;

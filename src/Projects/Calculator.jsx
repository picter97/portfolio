
import React, { useState, useEffect} from "react";

export default function Calculator() {
  let [pizzas, setPizzas] = useState(10)
  let [orders, setOrders] = useState(5)

  useEffect(() => {

    setPizzas(orders*2)

  }, [orders]);

  return(
    <div>
      <div>Calculator</div>
      <div>{orders},{pizzas}</div>
      <button onClick={() => setOrders (orders+1)}>+</button>

    </div>

  )
}
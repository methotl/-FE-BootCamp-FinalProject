import React from 'react'
import { OrderForm } from './OrderForm'
import { getOrders } from '../serviceAPI/orderService'
import { OrderEditMode } from './OrderEditMode'

export default function OrderList() {
    const [orders, setOrders] = React.useState([])
    React.useEffect(() => {
        getOrders().then(setOrders)
    }, [])

    //filters out the order with the passed in id
    function handleRemove(id){
        setOrders(e => e.filter(o => o.id !== id))
    }

    function handleAdd(order) {
        setOrders(e => [...e, order])
    }

    //when updating remaps the orders and replaces the 
    function handleUpdate(order) {
        setOrders(e => e.map(o => o.id === order.id ? order: o))
    }

  return (
    <div>
        <h1 className="ordertitle">Orders</h1>
          <div className="gridContainer">
            <OrderForm onSave={handleAdd}/>
            {/* maps new order with its props and sends it to the edit mode */}
            {orders.map(({ id, name, flavor, size, toppings}) => (
               <OrderEditMode 
               key={id}
               id={id}
               onRemove={handleRemove}
               onUpdate={handleUpdate}
               name={name}
               flavor={flavor}
               size={size}
               toppings={toppings}
               /> 
            ))}
            
          </div>
    </div>
  )
}

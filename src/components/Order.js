import React from "react";
import  Button  from "react-bootstrap/Button";
import { removeOrder } from '../serviceAPI/orderService'


export function Order({name, flavor, size, toppings, id, onEdit, onRemove}) {

    //function to handle deletes of created orders
    function handleDelete() {
        
        const confirm = window.confirm(`Are you sure you wish to remove "${name}"'s Order?`)
            if(confirm){
                removeOrder(id).then(() => {
                onRemove && typeof onRemove === 'function' && onRemove(id)
                })
            }
    }

    return (
        <div className="order">
            <h4 className="orderName">{name}</h4>
                <div>
                    <h3>{size} of {flavor} with {toppings}</h3>
                    <Button type="button" onClick = {onEdit}>edit</Button>
                    <Button variant="danger"type="button" onClick={handleDelete}>delete</Button>
                </div>
        </div>
    )
}

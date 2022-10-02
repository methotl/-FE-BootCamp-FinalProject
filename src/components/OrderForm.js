import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import { saveOrder } from '../serviceAPI/orderService'
import Button from 'react-bootstrap/Button'

export function OrderForm({onSave, onCancel, order}) {

    const id = order && order.id ? order.id : undefined

    const [name, setName] = useState(id ? order.name : '')
    const [flavor, setFlavor] = useState(id ? order.flavor : '')
    const [size, setSize] = useState(id ? order.size : '')
    const [toppings, setToppings] = useState(id ? order.toppings : '') 

    function handleSubmit(e) {
        e.preventDefault()
        saveOrder( { name, flavor, size, toppings, id }).then(order => {
            clearForm()
            onSave && typeof onSave === 'function' && onSave(order)
        })
    }

    function clearForm() {
        setName('')
        setFlavor('')
        setSize('')
        setToppings('')
        onCancel && typeof onCancel === 'function' && onCancel()
    }
//functions to handle changing of each input
    function handleNameChange(e) {
        const { value } = e.target
        setName(value)
    }

    function handleFlavorChange(e) {
        const{ value } = e.target
        setFlavor(value)
    }

    function handleSizeChange(e) {
        const{ value } = e.target
        setSize(value)
    }
    function handleToppingsChange(e) {
        const{ value } = e.target
        setToppings(value)
    }

    return(
        <div className="addOrder">
        <h5>{id ? 'Update Order' : ''} </h5>
        <form onReset={clearForm} onSubmit={handleSubmit}>
            <div className="orderGrid">
                <label htmlFor={`order_name_${id ? id : 'new'}`}></label>
                <input type="text"
                    id={`order_name_${id ? id : 'new'}`}//prevents duplicate id's from appearing on the page at once  
                    value={name}
                    placeholder="Name for the Order"
                    name="name"
                    onChange={handleNameChange}        
                />
            </div>
            {/* selector form to pick flavor, size and toppings, 
            as well as check on title if an update or a new order
            can seem to get it to center though */}
            <div> 
                <label htmlFor={`order_flavor_${id ? id : 'new'}`}>Flavor</label>            
                <Form.Select
                    id={`order_flavor_${id ? id : 'new'}`} 
                    value={flavor}
                    placeholder="Please Select a Flavor"
                    name="flavor"
                    onChange={handleFlavorChange}
                    >
                    <option>Please Select a Flavor</option>
                    <option>Chocolate</option>
                    <option>Vanilla</option>
                    <option>Strawberry</option>
                    <option>Mint Chocolate Chip</option>
                    <option>Cookie Dough</option>
                    <option>Moose Tracks</option>
                    <option>Chocolate Chip</option>
                    <option>Butter Pecan</option>
                    <option>Cookie Monster</option>
                    <option>Coffee</option>
                </Form.Select>
            </div>
            <div>
                <label htmlFor={`order_size_${id ? id : 'new'}`}>Size</label>            
                <Form.Select
                    id={`order_size_${id ? id : 'new'}`} 
                    value={size}
                    placeholder="Select A Size"
                    name="size"
                    onChange={handleSizeChange}
                    >
                    <option>Select A Size</option>
                    <option>One Scoop</option> 
                    <option>Two Scoops</option>
                    <option>Three Scoops</option>
                    <option>Four Scoops</option>
                </Form.Select>
            </div>
            <div>
                <label htmlFor={`order_toppings_${id ? id : 'new'}`}>Toppings</label>            
                <Form.Select
                    id={`order_toppings_${id ? id : 'new'}`} 
                    value={toppings}
                    placeholder="Please Select Your Toppings"
                    name="toppings"
                    onChange={handleToppingsChange}
                    >
                    <option>Please Select a Topping</option>
                    <option>Whipped Cream</option>
                    <option>Rainbow Spinkles</option>
                    <option>Chocolate Syrup</option>
                    <option>Caramel</option>
                    <option>Chocolate Sprinkles</option>
                    <option>Chocolate Candies</option>
                    <option>Gummy Bears</option>
                    <option>PeanutButter Cups</option>
                    <option>Reese's Pieces</option>
                </Form.Select>
            </div>
            <div>
                <Button variant="success"type="submit">save</Button>
                <Button variant="warning"type="reset">cancel</Button>
            </div>
        </form>
    </div>
    )
}


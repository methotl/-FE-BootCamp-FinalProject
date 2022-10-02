import React from 'react'
import { Order } from './Order'
import { OrderForm } from './OrderForm'


export function OrderEditMode({ onUpdate, onRemove, ...order}) {
    //setting up an edit mode which will also drive API calls
    const [isEditMode, setIsEditMode] = React.useState(false)

    function handleToggleEdit(){
        setIsEditMode(current => !current)
    }

    return isEditMode ? (
        <OrderForm onCancel={handleToggleEdit} onSave={onUpdate} order={order} />
    ) : (
        <Order {...order} onEdit={handleToggleEdit} onRemove={onRemove} />
    )
}
 
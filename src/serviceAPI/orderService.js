//setup proxy for mockapi in the package-json, listing out the commdns to update the api here

// check function to help determine if PUT or POST will be called
export function saveOrder(order) {
    return order.id ? updateOrder(order) : createOrder(order)
}

export function getOrders () {
    return fetch('/api/feprojects/orders')
    .then(res => res.json())
}

export function removeOrder(id) {
    return fetch(`/api/feprojects/orders/${id}`, 
    { method: 'DELETE' })
}

export function createOrder(order) {
    return fetch('/api/feprojects/orders', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(order)
    }).then(res => res.json())
}

function updateOrder(order) {
    return fetch(`/api/feprojects/orders/${order.id}`, {
        method: 'PUT',
        headers: {
            'Content-type' : 'application/json'
        },
        body: JSON.stringify(order)

    }).then(res => res.json())
}
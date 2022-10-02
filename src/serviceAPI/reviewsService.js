//API set up for the reviews pages

export function getReviews () {
    return fetch('/api/feprojects/reviews')
    .then(res => res.json())
}

export function createReview(review) {
    return fetch('/api/feprojects/reviews', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(review)
    }).then(res => res.json())
}

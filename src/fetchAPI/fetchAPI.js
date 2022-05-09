export const fetchPost = (_address) => {
    fetch('http://localhost:3000/user/post', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            address: _address
        })
    })
}

export const fetchCheck = async (_address) => {
    return fetch(`http://localhost:3000/user/check/${_address}`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
    })
    .then(res => res.json())
    .then(data => data)
    .catch(err => console.log(err));
}
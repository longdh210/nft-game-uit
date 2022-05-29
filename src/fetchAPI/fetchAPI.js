export const fetchPost = (_address) => {
    fetch('https://be-nft-game.herokuapp.com/user/post', {
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
    return fetch(`https://be-nft-game.herokuapp.com/user/check/${_address}`, {
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

export const fetchUpdate = async (_address) => {
    return fetch(`https://be-nft-game.herokuapp.com/user/update/${_address}`, {
        method: 'PATCH',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
    })
    .then(res => res.json())
    .then(data => data)
    .catch(err => console.log(err));
}

export const fetchUserData = async (_address) => {
    return fetch(`https://be-nft-game.herokuapp.com/user/get/${_address}`, {
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

export const fetchMissions = async () => {
    return fetch(`https://be-nft-game.herokuapp.com/mission/get`, {
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


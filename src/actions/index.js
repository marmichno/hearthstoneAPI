export const addCard = (card) => {
    return {
        type: 'ADDCARD',
        payload: card
    }
}

export const removeCard = (card) => {
    return {
        type: 'REMOVECARD',
        payload: card
    }
}
export const depositMoney = ( amount ) => {
    return ( dispatch ) => {
        dispatch({
            type: 'deposit',
            payload: amount
        })
    }
};

export const withdrawMoney = ( amount ) => {
    return ( dispatch ) => {
        dispatch({
            type: 'withdraw',
            payload: amount
        })
    }
};

export const setSelectedProductId = ( productId ) => {
    return ( dispatch ) => {
        dispatch({
            type: 'set',
            payload: productId
        })
    }
}

export const clearSelectedProductId = ( productId ) => {
    return ( dispatch ) => {
        dispatch({
            type: 'clear',
            payload: productId
        })
    }
}

export default { depositMoney, withdrawMoney, setSelectedProductId, clearSelectedProductId }
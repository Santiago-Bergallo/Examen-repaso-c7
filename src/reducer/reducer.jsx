export const reducer = (state, action) => {
    switch(action.type) {
        case 'SWITCH_DOG':
            return {url: action.payload, api: 'dog'}
        case 'SWITCH_CAT':
            return {url: action.payload, api: 'cat'}
        default:
            throw new Error()
    }
}
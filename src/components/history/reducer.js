
export const initialState = {
    history: []
}

export default function historyReducer(state = initialState, action) {

    const { type, payload } = action;

    switch (type) {
        case 'ADD_HISTORY':
            const history = [...state.history,payload.request];
            console.log('historry ', history);
            return {history:history} ;

        default:
            return state;
    }
}

export const addHistoryAction = (request) => {
    console.log('inside addHistoryAction , history requests >>>> ', request);

    return {
        type: 'ADD_HISTORY',
        payload: {request}
    }

}
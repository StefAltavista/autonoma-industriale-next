export default function globalReducer(state: any, action: any) {
    switch (action.type) {
        case "LOG_IN":
            return {
                ...state,
                userAccessToken: action.payload,
            };
        case "LOG_OUT":
            return {};
        case "FETCH_EVENTS":
            return { ...state, events: action.payload };

        default:
            return { ...state };
    }
}

export default function globalReducer(state: any, action: any) {
    switch (action.type) {
        case "LOG_IN":
            console.log("reducer", action);
            return {
                ...state,
                userAccessToken: action.payload,
            };
        case "LOG_OUT":
            return {};

        default:
            return { ...state };
    }
}

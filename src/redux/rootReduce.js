const initialState = {
    devices: [],
    activeDevices: [],
    arrObjs: [],
    loading: true,
    error: false,
};

function rootReduce(state = initialState, action) {
    switch (action.type) {
        case 'ERROR':
            return {
                ...state,
                error: true
            };
        case 'LOADED':
            return {
                ...state,
                loading: false,
                    error: false
            };
        case "INIT":
            let newDevices = [];
            let newActiveDevices = [];
            let newArrObjs = action.payload;

            action.payload.forEach((item) => {
                newDevices.push(item["n"]);
                newActiveDevices.push(item["n"]);
            });

            return {
                ...state,
                devices: newDevices,
                    activeDevices: newActiveDevices,
                    arrObjs: newArrObjs
            }

            case "ACTIVATE_DEVICES":
                let newActiveDevices1 = state.activeDevices.slice();
                newActiveDevices1.push(action.payload);

                return {
                    ...state,
                    activeDevices: newActiveDevices1
                }

                case "DEACTIVATE_DEVICES":
                    let newActiveDevices2 = state.activeDevices.slice();

                    newActiveDevices2.splice(newActiveDevices2.indexOf(action.payload), 1);

                    return {
                        ...state,
                        activeDevices: newActiveDevices2
                    }

                    default:
                        return state
    }
}

export default rootReduce;
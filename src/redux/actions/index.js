const itemsLoaded = (items) => {
    return {
        type: "INIT",
        payload: items
    }
}

const activateDevice = (id) => {
    return {
        type: "ACTIVATE_DEVICES", 
        payload: id
    }
}
const deactivateDevice = (id) => {
    return {
        type: "DEACTIVATE_DEVICES", 
        payload: id 
    }
}

export {
    itemsLoaded,   
    activateDevice,
    deactivateDevice
};
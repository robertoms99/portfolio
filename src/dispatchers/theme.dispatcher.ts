import { ACTIONS_TYPES } from "../config/contants"

const toggleThemeAction = ()=>{
    return {
        type: ACTIONS_TYPES.TOGGLE_DARK
    }
}

export {
    toggleThemeAction
}
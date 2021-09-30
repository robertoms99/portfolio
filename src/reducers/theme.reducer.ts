import { ACTIONS_TYPES, INITIAL_STATE, STORAGE_THEME_VALUES } from "../config/contants"

const reducer = (currentState=INITIAL_STATE, action: any)=>{
    switch(action.type){
        case ACTIONS_TYPES.TOGGLE_DARK:
            return {
                ...currentState,
                theme: (currentState.theme === STORAGE_THEME_VALUES.dark?
                 STORAGE_THEME_VALUES.light : STORAGE_THEME_VALUES.dark )
            }
        default:
            return currentState
    }
}

export default reducer
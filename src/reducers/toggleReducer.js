export const toggleReducer = (state=false , action) =>{
    switch(action.type) {
        case "TOGGLE":
            return !false;
        default :
            return state;
    }
}
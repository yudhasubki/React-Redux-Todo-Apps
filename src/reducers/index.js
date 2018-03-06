export default function todo(state=[],action){
    switch(action.type){
        case "ADD_TODO":
            return [...state,action.todo];
        case "REMOVE_TODO":
            return state.filter(state => state !== action.element);
        default:
            return state;
    }
}

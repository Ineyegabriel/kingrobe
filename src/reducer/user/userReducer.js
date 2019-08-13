const initialState ={
    currentUser: null
};
const userReducer = (statefromredux = initialState, action) =>{
    switch (action.type){
        case 'SET_CURRENT_USER':
            return {
                ...statefromredux,
                currentUser: action.payload
            };
        default:
            return statefromredux;
    }
};
export default  userReducer;
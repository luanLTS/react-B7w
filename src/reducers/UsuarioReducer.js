const initialState = []
const UsuarioReducer = (state = initialState, action) => {
    
    switch(action.type){
        case 'SET_NOME':
            return { ...state, nome : action.payload.nome }
            break;
    }

    return state;
}
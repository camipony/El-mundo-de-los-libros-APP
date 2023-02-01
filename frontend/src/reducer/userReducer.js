import{
    GET_USER,
    DELETE_USER,
    UPDATE_USER,
    USER_LOADING
} from '../types/userTypes'

const InitialState ={
    user : [],
    store : [],
    loading : true,
}


export const userReducer = (state = InitialState,action)=>{
    const { type, payload } = action

    switch (type) {
        case GET_USER:
            return{
                ...state,
                user: payload,
                loading: false
            }

            case DELETE_USER:
                return{
                    ...state,
                    user: payload,
                    loading: false
                }

            case UPDATE_USER:
                    return{
                        ...state,
                        user: payload,
                        loading: false
                    }
            case USER_LOADING:
            return{
                ...state,
                loading: true
            }

        default:
            return state;
    }
}

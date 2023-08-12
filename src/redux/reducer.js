import * as types from './actionTypes';

const intialState = {
    recipes:[],
    error:null,
    loading:false,
};

const recipeReducer = (state=intialState,action) => {
    switch(action.type){
        case(types.FETCH_RECIPE_START):
            return ({...state,loading:true})
        case(types.FETCH_RECIPE_SUCCESS):
            return ({...state,loading:false,recipes:action.payload})
        case(types.FETCH_RECIPE_FAIL):
            return ({...state,loading:false,error:action.paylaod})
        default:
            return state;
    }
};

export default recipeReducer;
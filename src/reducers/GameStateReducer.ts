import { ReducerActionType } from "../types/ReducerActionType";

export type GameStateType = 'standart' | 'preview' | 'playing' | 'finished' ;

export type GameStateReducer = {
    gameStatus : GameStateType;
}

export const gameInitialState : GameStateReducer = {
    gameStatus : 'standart'
}

export function gameReducer( state : GameStateReducer, action : ReducerActionType){
    switch(action.type){
        case 'alter_state':
            if(action.payload){
                
                return {...state, gameStatus : action.payload.status };
            }
            break;
    }
    return state;
}
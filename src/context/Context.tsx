import { cardInitialState, CardObjectType, cardReducer } from "../reducers/CardReducer";
import { GameStateType, GameStateReducer, gameReducer, gameInitialState } from "../reducers/GameStateReducer";
import { ReducerActionType } from "../types/ReducerActionType";
import { createContext, useReducer } from "react";

type InitialStateType = {    
    cards : CardObjectType[];
    gamestate : GameStateReducer;
};

type ContextType = {
    state : InitialStateType;
    dispatch : React.Dispatch<any>;
};

const initialState = {
    cards : cardInitialState,
    gamestate : gameInitialState,
};

export const Context = createContext<ContextType>({
    state : initialState,
    dispatch : () => null
});

const indexReducer = ( state : InitialStateType, action : ReducerActionType ) => ({
    cards : cardReducer( state.cards, action ),
    gamestate : gameReducer( state.gamestate, action)    
});

export function ContextProvider({ children } : React.PropsWithChildren){

    const [ state, dispatch ] = useReducer(indexReducer, initialState)

    return (
        <Context.Provider value={{ state, dispatch }}>
            { children }
        </Context.Provider>
    )
}


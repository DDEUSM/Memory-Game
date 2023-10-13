import { ReducerActionType } from "../types/ReducerActionType";
import { DataCards } from "../model/DataCards";

type CardStatesType = 'hidden' | 'view' | 'founded';

export type CardObjectType = {
    id : number;
    url : string;
    status : CardStatesType;
    group : number;
};

export const cardInitialState : CardObjectType[] = DataCards.sort(() => Math.random() > 0.5? 1 : -1).map((item, index) =>  {
    item.id = index;
    return item;
});

/*
Este código está dando erro, eu clico em uma carta virada e outra carta é virada ao invés da minha
export const cardInitialState : CardObjectType[] = DataCards.sort(() => Math.random() > 0.5? 1 : -1);
*/

export function cardReducer( state : CardObjectType[] , action : ReducerActionType){
    switch(action.type){
        case 'select_a_card':
            if(action.payload){
                let modifyArr = [...state];
                modifyArr[action.payload.id].status = 'view';
                return modifyArr;
            }
            break;

        case 'founded_a_group':
            let modifyArr = [...state];
            modifyArr.map(item => {
                if(item.status === 'view'){
                    item.status = 'founded';
                    return item
                }
            });
            return modifyArr;            
            break;

        case 'not_found_a_group':
            let modifyArr2 = [...state];
            modifyArr2.map(item => {
                if(item.status === 'view'){
                    item.status = 'hidden';
                    return item
                }
            });
            return modifyArr2;
            break;

        case 'sort_cards':
            let sortedCards = [];
            sortedCards = state.sort(() => Math.random() > 0.5? 1 : -1).map((item, index) =>  {
                item.id = index;
                return item;
            });
            return sortedCards;
            break;

        case 'default':
            
            let initialState = state.map(item => {                
                item.status = 'hidden';
                return item                
            });
            return initialState;                                      
            break;
    }    
    return state;
};
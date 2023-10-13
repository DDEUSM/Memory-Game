
export type ReducerActionType = {
    type : string,
    payload? : {
        //nesse caso ele aceita qualuer chave
        [ key : string ] : any
    }
}

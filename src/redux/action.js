import {CHANGE_AMOUNT ,CHANGE_CATEGORY ,CHANGE_DIFFICULTY ,CHANGE_SCORE ,CHANGE_TYPE} from './actionTypes'
export const handle_Category =(payload)=>({type:CHANGE_CATEGORY,payload})
export const handle_Amount =(payload)=>({type:CHANGE_AMOUNT,payload})
export const handle_Difficulty =(payload)=>({type:CHANGE_DIFFICULTY,payload})
export const handle_Score =(payload)=>({type:CHANGE_SCORE,payload})
export const handle_Type =(payload)=>({type:CHANGE_TYPE,payload})
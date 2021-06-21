import { createStore } from 'redux';
import { subMonths, addMonths } from "date-fns";

const dateReducer=(state={currentDate:new Date()},action)=>{
    if(action.type==='NEXT'){
        return {
            currentDate:addMonths(state.currentDate, 1)
        }
    }
    if(action.type==='PREVIOUS'){
        return {
            currentDate:subMonths(state.currentDate, 1)
        }
    }
    return state;
}

const store=createStore(dateReducer);

export default store;
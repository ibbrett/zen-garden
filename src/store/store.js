import React, {createContext, useReducer} from "react";
import Reducer from './reducers/Reducer';
import data from './data';
const initialState = data;

const Store = ({children}) => {
    const [state, dispatch] = useReducer(Reducer, initialState);
    return (
        <Context.Provider value={[state, dispatch]}>
            {children}
        </Context.Provider>
    )
};

export const Context = createContext(initialState);
export default Store;

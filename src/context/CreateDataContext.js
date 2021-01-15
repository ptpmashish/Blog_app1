import React,{useState,useReducer} from 'react';

export default (Reducer, actions, initialState) => {

    const Context = React.createContext();

    const Provider = ({children}) => {
        const [state, dispatch] = useReducer(Reducer,initialState);

        // actions ==={addBlogPosts and its return function}
        const boundActions= {};
        for (let key in actions){
            boundActions[key] = actions[key](dispatch);
        }


        return (
            <Context.Provider value = {{state, ...boundActions}}>
            {children}
            </Context.Provider>
        );


    }

    return  {Context,Provider};
    
};

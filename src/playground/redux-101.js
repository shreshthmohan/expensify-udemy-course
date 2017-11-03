import { createStore } from 'redux';

// function generators
const incrementCount = ({by = 1} = {}) => {
   return {
       type: 'INCREMENT',
       by: by
   };
};

// if no object is passed, defaults to empty object.
// which is then deconstructed to have by = 1
// if an object is passed with 'by' missing, then by again becomes 1
//
const decrementCount = ({by = 1} = {}) => {
   return {
       type: 'DECREMENT',
       by: by
   };
};

const resetCount = () => {
    return {
        type: 'RESET'
    };
};

const setCount = ({to = 0} = {}) => {
    return {
        type: 'SET',
        to: to
    };
};


// this is a reducer. it defines what needs to be done when an action takes place
// rather what the nextState should be based on the action
// just modularity 
const store = createStore((state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT' :
            return {
                count: state.count + action.by
            };
        case 'DECREMENT' :
            return {
                count: state.count - action.by 
            };
        case 'RESET' :
            return {
                count: 0
            };
        case 'SET' :
            return {
                count: action.to
            };
        default: return state;
    }
});

// see everytime it changes
const unsub = store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(incrementCount({by : 7}));
store.dispatch(incrementCount());

store.dispatch(resetCount());

store.dispatch(decrementCount({
    by: 3
}));
store.dispatch(decrementCount());
store.dispatch(setCount({
    to: 10
}));


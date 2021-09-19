// It will listen any action which is fired into the datalayer

export const initialState = {
    user: null,
};

// The only action we have is to set the user into the datalayer

export const actionTypes = {
    // Set all the actions here
    SET_USER: "SET_USER",
};

const reducer = (state, action) => {
    console.log("Action:", action);

    switch (action.type) {
        case actionTypes.SET_USER:
            return {
                ...state,  // whatever the current state looks like 
                user: action.user,  // modify the user 
            };
        default:
            return state;
    }
};

export default reducer;
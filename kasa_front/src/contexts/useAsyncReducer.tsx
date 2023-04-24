import { Dispatch, Reducer, ReducerAction, useState } from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const useAsyncReducer = <R extends Reducer<any, any>, I>(
    reducer: R,
    initialState: I,
): [I, Dispatch<ReducerAction<R>>] => {
    const [state, setState] = useState(initialState);

    const dispatch = async (action: Dispatch<ReducerAction<R>>): Promise<void> => {
        const result = reducer(state, action);
        if (typeof result.then === 'function') {
            try {
                const newState = await result;
                setState(newState);
            } catch (err) {
                setState({ ...state, error: err });
            }
        } else {
            setState(result);
        }
    };

    return [state, dispatch];
};

export default useAsyncReducer;

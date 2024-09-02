
# React Redux Basics

## useSelector
- **Purpose**: To extract data from the Redux store state.
- **Usage**: 
  ```javascript
  const myData = useSelector((state) => state.todos);
  ```
- **Description**: Subscribes to the Redux store and re-renders the component when the selected state changes.

## useDispatch
- **Purpose**: To dispatch actions to the Redux store.
- **Usage**:
  ```javascript
  const dispatch = useDispatch();
  dispatch({ type: 'MY_ACTION', payload: someData });
  ```
- **Description**: Returns the `dispatch` function to trigger actions and update the store.

## Redux Store
- **Purpose**: Holds the entire state of your application.
- **Creation**:
  ```javascript
  import { createStore } from 'redux';
  const store = createStore(rootReducer);
  ```
- **Description**: The store manages the state tree and allows state changes through actions and reducers.

## Reducer
- **Purpose**: A pure function that takes the current state and an action, and returns a new state.
- **Example**:
  ```javascript
  const myReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'MY_ACTION':
        return { ...state, myData: action.payload };
      default:
        return state;
    }
  };
  ```
- **Description**: Determines how the state should change in response to an action.

## Action
- **Purpose**: An object that describes a change in the state.
- **Example**:
  ```javascript
  const myAction = {
    type: 'MY_ACTION',
    payload: someData,
  };
  ```
- **Description**: Actions are dispatched to trigger state changes via reducers.

## Provider
- **Purpose**: Makes the Redux store available to the React application.
- **Usage**:
  ```javascript
  import { Provider } from 'react-redux';
  import store from './store';

  const App = () => (
    <Provider store={store}>
      <YourComponent />
    </Provider>
  );
  ```
- **Description**: Wraps your application and provides the store to all components.

## combineReducers
- **Purpose**: Combine multiple reducers into a single root reducer.
- **Usage**:
  ```javascript
  import { combineReducers } from 'redux';
  const rootReducer = combineReducers({
    reducer1,
    reducer2,
  });
  ```
- **Description**: Used to manage the state shape by combining different reducers.

## Middleware
- **Purpose**: Provides a third-party extension point between dispatching an action and the moment it reaches the reducer.
- **Example**: Thunk, Logger
- **Usage**:
  ```javascript
  import { applyMiddleware } from 'redux';
  const store = createStore(rootReducer, applyMiddleware(thunk, logger));
  ```
- **Description**: Enhances the store with custom functionality like handling asynchronous actions.

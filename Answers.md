1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

    forEach(), spread operator, and Slice()

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

    actions perform the action
    reducers parse the result of actions and updates the store
    the store is where the state lives

    Because the store is the only place the app's global state exists

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

    application state is global, accessible through the connect() function by any component without using props

    component state is local to that component and can only be passed by props or methods passed as props

1.  What is middleware?

    middleware intercepts actions to perform some functions such as parsing the action so the status can be tracked through state, or by logging action events.

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

    redux-thunk allows us to intercepts actions to perform some functions such as parsing the action so the status can be tracked through state, or by logging action events.

    action-creators are turned into functions which dispatch events

1.  Which `react-redux` method links up our `components` with our `redux store`?

    dispatch()


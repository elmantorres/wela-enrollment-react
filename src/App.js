import React from "react"
import { Provider } from "react-redux"
import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk"

// import ItemList from "./app/pages/item/ItemList"
import enrollment from "./app/pages/enrollment/Enrollment.reducers"
import Form from "./app/pages/enrollment/views/form"

// Setup Redux store with Thunks
const reducers = combineReducers({ enrollment })
const store = createStore(reducers, applyMiddleware(thunk))

const App = () => (
    <Provider store={store}>
        <Form />
    </Provider>
)

export default App

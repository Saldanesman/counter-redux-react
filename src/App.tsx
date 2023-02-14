import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import allActions from './redux/actions'


const App = () => {
  const counter = useSelector((state: any) => state.counter)
  const currentUser = useSelector((state: any) => state.currentUser)

  const dispatch = useDispatch()

  const user = {name: "Rubén"}

  useEffect(() => {
    dispatch(allActions.userActions.setUser(user))
  }, [])

  return (
    <div className="App">
      {
        currentUser.loggedIn ? 
        <>
          <h1>Hello, {currentUser.user.name}</h1>
          <button onClick={() => dispatch(allActions.userActions.logOut())}>Logout</button>
        </> 
        : 
        <>
          <h1>Login</h1>
          <button onClick={() => dispatch(allActions.userActions.setUser(user))}>Login as {user.name}</button>
        </>
        }
      <h1>Counter: {counter}</h1>
      <button onClick={() => dispatch(allActions.counterActions.increment())}>+</button>
      <button onClick={() => dispatch(allActions.counterActions.decrement())}>-</button>
    </div>
  );
}

export default App;
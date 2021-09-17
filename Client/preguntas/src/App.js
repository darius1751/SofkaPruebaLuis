import './App.css';
import {HashRouter,Route,Switch,Redirect} from 'react-router-dom';
import React,{useState} from 'react';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Error404 from './pages/Error404';
const initialUser = {
  name:null,
  id:0,
  max_points:0
};
function App() {
  const [user, setUser] = useState(initialUser);
  return (
    <div className='container'>
      <HashRouter>
        <Switch>
            <Route exact path='/'>
                {!user.id? <Login user={user} setUser={setUser}/>:<Redirect to={`/profile/${user.name.split(' ')[0]}`}/>}
            </Route>
            <Route path='/profile/:name'>
                {user.id?<Profile user={user} setUser={setUser}/>:<Redirect to=''/>}
            </Route>
            <Route path='*'>
                <Error404/>
            </Route>
        </Switch>
      </HashRouter>
    </div>
  );
}
export default App;
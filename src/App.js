import "./App.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Chat from "./components/Chat/Chat";
import { useState } from "react";
import Login from "./components/Login/Login";
import { useStateValue } from "./StateProvider";


function App() {
  // const [user, setUser] = useState(null);
  // const [state, dispatch] = useStateValue();
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="app">
      <Router>
        {!user ? (<Login />) : (
          <>
            <Header />
            <div className="app__body">
              <Sidebar />
              {/* React-router: Switch channels without refreshing */}
              <Switch>
                <Route path="/room/:roomId">
                  <Chat />
                </Route>
                <Route path="/">
                  <div className="information">
                    <h4>Welcome!</h4>
                    <p>
                      You can add new channels and send realtime messages to the
                      channels...
                    </p>
                  </div>
                </Route>
              </Switch>

            </div>
          </>
        )}

      </Router>
    </div>
  );
}

export default App;

/*
Notes:
1. React-router: Switch channels without refreshinh
2. Switch: It checks the route that we are in, and based on what route we are in, it will render that screen
3. Whenever we see something like useState, useEffect, useParam, use... those are hooks
4. We can use hooks only in functional components not in class component
5. <> </> - fragment - empty <div></div>

6. I want to have user which is global and can be used throughout the app - Hence, we used react-context-api

Instead of prop drilling, into our app we use react-context api
So the intution is, instead of accessing user from app first and into the following component, we use datalayer so that we can push the user into the datalayer and then use it globally, now the user is directly available in any component we need in.

7. If the user == Null -> It will display <Login /> else load the rest of the content.
*/

import "./App.css";
import AppRouter from "./router/AppRouter";

import { useDispatch } from "react-redux";
import { auth } from "./auth/getAuth";
import { persistUser } from "./redux/auhtRedux/actions";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useLocation, BrowserRouter as Router } from "react-router-dom";

function App() {
  const dispatch = useDispatch();
  // const location = useLocation();
  // console.log(location);
  useEffect(() => {
    onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        dispatch(persistUser(authUser));
      } else {
        dispatch(persistUser(null));
      }
    });
  }, [dispatch]);
  return (
    <div className="App">
      <AppRouter />
    </div>
  );
}
//x9DLBAQjl9hiRUTuFrrqINwKdFU2
export default App;

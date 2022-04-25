import './App.css';
import AppRouter from './router/AppRouter';

function App() {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   onAuthStateChanged(auth, (authUser) => {
  //     if (authUser) {
  //       dispatch(persistUser(authUser));
  //     } else {
  //       dispatch(persistUser(null));
  //     }
  //   });
  // }, [dispatch]);
  return (
    <div className="App">
      <AppRouter />
    </div>
  );
}
//x9DLBAQjl9hiRUTuFrrqINwKdFU2
export default App;


import { Routes, Route } from 'react-router-dom';
import AddMore from './containers/AddMore';
import Home from './containers/Home';
import NotFoundPage from './containers/NotFoundPage';
import PublicRoute from './containers/PublicRoute';
import PrivateRoute from './containers/PrivateRoute';
import { Header } from './components/Header';
import Login from './containers/login/Login';
function App() {
  return (
    <div className="wrapper-app">
      <Header></Header>
      <div className="App-intro">
        <Routes>
          <Route path="/" element={
            <PublicRoute >
              <Home></Home>
            </PublicRoute>} >
          </Route>
          <Route path="/login" element={
            <PublicRoute >
              <Login></Login>
            </PublicRoute>} >
          </Route>
          <Route path="/add" element={
            <PrivateRoute >
              <AddMore></AddMore>
            </PrivateRoute>} >
          </Route>

          <Route path="*" element={<NotFoundPage />}>

          </Route>

        </Routes>

      </div>
    </div>

  );
}

export default App;

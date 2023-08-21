
import { Routes, Route } from 'react-router-dom';
import AddMore from './containers/AddMore';
import Home from './containers/Home';
import NotFoundPage from './containers/NotFoundPage';
import PublicRoute from './containers/public-router/PublicRoute';
import PrivateRoute from './containers/PrivateRoute';
import { Header } from './components/header/Header';
import Login from './containers/login/Login';
import SignUp from './containers/signup/SignUp';
import UserPage from './containers/user/User';
import UserDetailPage from './containers/user/UserDetail';
import UseState from './containers/UseState';
import SignupAuthention from './containers/signup-authention/SignupAuthention';
function App() {
  return (
    <div className="wrapper-app">
      <Routes>
        <Route path="/user">
          <Route path=":userId" element={<UserDetailPage />} />
          <Route path="/user" element={
            <PrivateRoute>
              <UserPage />
            </PrivateRoute>} />
        </Route>
        <Route path="/home" element={
          <PublicRoute >
            <Home></Home>
          </PublicRoute>} >
        </Route>
        <Route path="/login" element={
          <PublicRoute >
            <Login></Login>
          </PublicRoute>} >
        </Route>
        <Route path="/sign-up" element={
          <PublicRoute >
            <SignUp></SignUp>
          </PublicRoute>} >
        </Route>
        <Route path="/sign-up-authention" element={
          <PublicRoute >
            <SignupAuthention></SignupAuthention>
          </PublicRoute>} >
        </Route>
        <Route path="/demo-hook-use-state" element={
          <PublicRoute >
            <UseState></UseState>
          </PublicRoute>} >
        </Route>
        <Route path="/add" element={
          <PrivateRoute >
            <AddMore></AddMore>
          </PrivateRoute>} >
        </Route>

        <Route path="*" element={<NotFoundPage />}>

        </Route>
        <Route path="/404" element={<NotFoundPage />}>

        </Route>

      </Routes>
    </div>
  );
}

export default App;

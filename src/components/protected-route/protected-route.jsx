import { Route, Redirect } from 'react-router-dom';

export function ProtectedRoute({ children, condition, redirection, ...rest }) {
  return <Route {...rest} render={() => (condition ? children : <Redirect to={redirection} />)} />;
}

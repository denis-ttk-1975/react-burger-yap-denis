import { ReactNode } from 'react'; // импорт библиотеки

import { Route, Redirect, useLocation } from 'react-router-dom';

export function ProtectedRoute({ children, condition, redirection, ...rest }: { children: ReactNode; condition: boolean; redirection: string; rest: any }) {
  const location = useLocation();
  return <Route {...rest} render={() => (condition ? children : <Redirect to={{ pathname: redirection, state: { from: location } }} />)} />;
}

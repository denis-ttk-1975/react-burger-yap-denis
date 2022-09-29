import { ReactNode } from 'react'; // импорт библиотеки

import { Route, Redirect, useLocation } from 'react-router-dom';

export function ProtectedRoute({ children, condition, redirection, exact, ...path }: { children: ReactNode; condition: boolean; redirection: string; path: any; exact: boolean }) {
  const location = useLocation();
  return <Route {...path} render={() => (condition ? children : <Redirect to={{ pathname: redirection, state: { from: location } }} />)} />;
}

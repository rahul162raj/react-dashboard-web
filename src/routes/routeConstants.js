export const AUTH_ROUTES = {
  dashboard: 'revenue',
};

export const NO_AUTH_ROUTES = {
  login: 'login',
};

export const DEFAULT_PUBLIC_ROUTE = NO_AUTH_ROUTES.login;

export const DEFAULT_PROTECTED_ROUTE = AUTH_ROUTES.dashboard;

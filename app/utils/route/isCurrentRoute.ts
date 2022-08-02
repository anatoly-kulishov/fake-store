export const isCurrentRoute = (route: string, href: string) => {
  if (route.length === 1 && route === href) {
    return true;
  }
  return route === href;
};

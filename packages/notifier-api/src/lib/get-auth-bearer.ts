/**
   * Get the token placed in the request header.
   */
export function getAuthBearer(authorizationHeader?: string): string | null {
  const auth = authorizationHeader?.split(' ');
  if (!auth || auth[0].toLowerCase() !== 'bearer' || !auth[1]) {
    return null;
  }
  // else
  return auth[1];
}

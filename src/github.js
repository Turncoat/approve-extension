const pathInfo = window.location.pathname.split('/');
export const repoOwner = pathInfo[1];
export const repoName = pathInfo[2];
export const prNumber = pathInfo[4];

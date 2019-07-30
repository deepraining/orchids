const url =
  window.location.origin + window.location.pathname + window.location.search;
const pagesCountCacheKey = `orchids-pages-count: ${url}`;

export const incPagesCount = () => {
  const count = window.sessionStorage[pagesCountCacheKey];
  window.sessionStorage[pagesCountCacheKey] = !count
    ? 1
    : parseInt(count, 10) + 1;
};
export const decPagesCount = () => {
  const count = window.sessionStorage[pagesCountCacheKey];
  window.sessionStorage[pagesCountCacheKey] = !count
    ? 0
    : parseInt(count, 10) - 1;
};
export const getPagesCount = () =>
  parseInt(window.sessionStorage[pagesCountCacheKey], 10) || 0;
export const resetPagesCount = () => {
  window.sessionStorage[pagesCountCacheKey] = 0;
};

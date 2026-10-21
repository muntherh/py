/** True when the app runs inside another page's frame (e.g. an embedded viewer), where print and downloads are blocked. */
export const isFramed: boolean = (() => {
  try {
    return window.self !== window.top;
  } catch {
    return true;
  }
})();

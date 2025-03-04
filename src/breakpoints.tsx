export const maxWidth = {
  mobile: 480,
  tablet: 713, // minimum width of the webview on desktop is 713px
};

export const device = {
  mobile: `(max-width: ${maxWidth.mobile}px)`,
  tablet: `(min-width: ${maxWidth.mobile + 1}px)`,
  desktop: `(min-width: ${maxWidth.tablet}px)`,
};

export function activate(api) {
  api.registerTheme({
    id: "theme-catppuccin-frappe.theme",
    name: "catppuccin-frappe",
    colorscheme: "dark",
    vars: {
      "--color-surface-0": "#303446", // base
      "--color-surface-1": "#292c3c", // mantle
      "--color-surface-2": "#232634", // crust
      "--color-surface-3": "#414559", // surface 0
      "--color-surface-4": "#232634", // crust

      "--color-border": "#414559", // surface 0
      "--color-border-subtle": "#51576d", // surface 1

      "--color-text-primary": "#c6d0f5", // text
      "--color-text-secondary": "#b5bfe2", // subtext 1
      "--color-text-muted": "#a5adce", // subtext 0

      "--color-accent": "#ca9ee6", // mauve
      "--color-accent-hover": "#414559", // surface 0
      "--color-slider-fill": "#ca9ee6", // mauve

      // Ratings
      "--color-rating": "#e5c890", // yellow
      "--color-flag-pick": "#c6d0f5", // text
      "--color-flag-reject": "#e78284", // red

      "--color-label-red": "#e78284", // red
      "--color-label-yellow": "#e5c890", // yellow
      "--color-label-green": "#a6d189", // green
      "--color-label-blue": "#8caaee", // blue
      "--color-label-purple": "#ca9ee6", // mauve
    },
  });
}

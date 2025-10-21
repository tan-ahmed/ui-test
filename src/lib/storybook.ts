/**
 * Generates Storybook URLs that work in both local development and production
 */
export function getStorybookUrl(path: string): string {
  // Check if we're in development (localhost) or production
  const isDevelopment =
    typeof window !== "undefined" &&
    (window.location.hostname === "localhost" ||
      window.location.hostname === "127.0.0.1" ||
      window.location.hostname.includes("localhost"));

  if (isDevelopment) {
    // Local development - use localhost:6006
    return `http://localhost:6006/?path=${path}`;
  } else {
    // Production - use the current domain with /storybook/ prefix
    const baseUrl =
      typeof window !== "undefined"
        ? `${window.location.protocol}//${window.location.host}`
        : "";
    return `${baseUrl}/storybook/?path=${path}`;
  }
}

/**
 * Predefined Storybook paths for common components
 */
export const STORYBOOK_PATHS = {
  BUTTON: "/docs/ui-button--docs",
  ALERT: "/docs/ui-alert--docs",
  ACCORDION: "/docs/ui-accordion--docs",
  CARD: "/story/components-card--default",
  CHECKBOX: "/docs/ui-checkbox--docs",
  DIALOG: "/docs/ui-dialog--docs",
} as const;

/**
 * Helper function to get Storybook URL for a specific component
 */
export function getComponentStorybookUrl(
  component: keyof typeof STORYBOOK_PATHS
): string {
  return getStorybookUrl(STORYBOOK_PATHS[component]);
}

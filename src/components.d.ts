import { UIElement } from "ziko/ui"; // adjust to correct path

declare module "zextra/*" {
  // All component functions return UIElement
  const Component: (...args: any[]) => UIElement;

  export = Component;
}

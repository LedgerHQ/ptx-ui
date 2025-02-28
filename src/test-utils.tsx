import { ReactElement, ReactNode } from "react";
import { render, RenderOptions } from "@testing-library/react";
import { StyleProvider } from "@ledgerhq/react-ui/index";

const ProvidersWrapper = ({ children }: { children: ReactNode }) => {
  return <StyleProvider selectedPalette="light">{children}</StyleProvider>;
};

const customRender = (ui: ReactElement, options?: RenderOptions) => {
  return render(ui, { wrapper: ProvidersWrapper, ...options });
};

export * from "@testing-library/react";
export { customRender as render };

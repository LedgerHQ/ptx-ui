import React from "react";
import type { Preview } from "@storybook/react";
import { StyleProvider } from "@ledgerhq/react-ui";
import { MINIMAL_VIEWPORTS } from "@storybook/addon-viewport";

import { maxWidth } from "../src/breakpoints";
import "./preview.css";

const themeDecorator = (Story, context) => {
  const selectedTheme = context.globals.theme;
  const storyBackground = selectedTheme === "dark" ? "#131214" : "#FFFFFF";

  document.documentElement.style.setProperty("--story-background", storyBackground);

  return (
    <StyleProvider selectedPalette={selectedTheme}>
      <div style={{ backgroundColor: storyBackground }}>
        <Story />
      </div>
    </StyleProvider>
  );
};

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      disable: true,
    },
    chromatic: {
      modes: {
        "dark mobile": {
          theme: "dark",
          viewport: "webview_mobile",
        },
        "dark desktop": {
          theme: "dark",
          viewport: "webview_desktop",
        },
        "light mobile": {
          theme: "light",
          viewport: "webview_mobile",
        },
        "light desktop": {
          theme: "light",
          viewport: "webview_desktop",
        },
      },
    },
    viewport: {
      viewports: {
        ...MINIMAL_VIEWPORTS,
        webview_mobile: {
          name: "Webview Mobile",
          styles: { width: `${maxWidth.mobile}px`, height: "960px" },
        },
        webview_desktop: {
          name: "Webview Desktop",
          styles: { width: "100%", height: "100%" },
        },
      },
    },
  },
  tags: ["autodocs"],
  decorators: [themeDecorator],
  globalTypes: {
    theme: {
      description: "Global theme for components",
      toolbar: {
        items: [
          { value: "light", icon: "sun", title: "Light theme" },
          { value: "dark", icon: "moon", title: "Dark theme" },
        ],
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: {
    theme: "dark",
  },
};

export default preview;

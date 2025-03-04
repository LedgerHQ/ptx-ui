import type { Meta, StoryObj } from "@storybook/react";

import ExampleComponent from ".";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "ExampleComponent",
  component: ExampleComponent,
  parameters: {
    // More info: https://storybook.js.org/docs/configure/story-layout
  },
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    onClick: { action: "clicked" },
    hasBorder: { control: "boolean" },
  },
  args: {
    text: "Lorem ipsum odor amet",
  },
} satisfies Meta<typeof ExampleComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {},
};

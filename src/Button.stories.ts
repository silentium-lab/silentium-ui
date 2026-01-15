import type { Meta, StoryObj } from "@storybook/html";
import { Button } from "./Button";
import { Of } from "silentium";

interface ButtonArgs {
  label: string;
  className: string;
  disabled?: boolean;
}

const meta: Meta<ButtonArgs> = {
  title: "Components/Button",
  parameters: {
    layout: "centered",
  },
  argTypes: {
    label: {
      control: "text",
      description: "Button label text",
    },
    className: {
      control: "text",
      description: "CSS class for styling",
    },
    disabled: {
      control: "boolean",
      description: "Whether the button is disabled",
    },
  },
};

export default meta;

type Story = StoryObj<ButtonArgs>;

export const Primary: Story = {
  args: {
    label: "Click me",
    className: "bg-blue-500 text-white px-4 py-2 rounded",
  },
  render: (args: ButtonArgs) => {
    // Create a simple mock source for demonstration
    const clickSource = { use: () => {} };
    const buttonElement = Button(
      Of(args.label),
      Of(args.className),
      clickSource as any,
      Of(args.disabled ? 'disabled="disabled"' : ""),
    );

    // For demo purposes, we'll create a simple container
    const container = document.createElement("div");
    buttonElement.then((html: string) => {
      container.innerHTML = html;
    });

    return container;
  },
};

export const Secondary: Story = {
  args: {
    label: "Secondary Button",
    className: "bg-gray-500 text-white px-4 py-2 rounded",
  },
  render: Primary.render,
};

export const Disabled: Story = {
  args: {
    label: "Disabled Button",
    className: "bg-gray-300 text-gray-500 px-4 py-2 rounded cursor-not-allowed",
    disabled: true,
  },
  render: Primary.render,
};

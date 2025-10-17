import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import { Button } from "./button";

// Icon components for demonstrations
const ChevronLeftIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15 18L9 12L15 6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ChevronRightIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9 18L15 12L9 6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const meta = {
  title: "UI/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    (Story, context) => {
      const { fullWidth } = context.args;
      return fullWidth ? (
        <div style={{ width: "600px" }}>
          <Story />
        </div>
      ) : (
        <Story />
      );
    },
  ],
  argTypes: {
    variant: {
      control: "select",
      options: ["fill", "outline", "text"],
      description: "Button style variant",
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg", "xl"],
      description: "Button size",
    },
    fullWidth: {
      control: "boolean",
      description: "Makes button take full width of container",
    },
    disabled: {
      control: "boolean",
      description: "Disabled state",
    },
    children: {
      control: "text",
      description: "Button text content",
    },
    iconLeft: {
      control: false,
      description:
        "Icon component to display on the left (not editable in controls)",
    },
    iconRight: {
      control: false,
      description:
        "Icon component to display on the right (not editable in controls)",
    },
    asChild: {
      table: {
        disable: true,
      },
    },
  },
  args: {
    onClick: fn(),
    children: "Button",
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// Primary Stories - Variants
export const Fill: Story = {
  args: {
    variant: "fill",
    children: "Fill Button",
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
    children: "Outline Button",
  },
};

export const Text: Story = {
  args: {
    variant: "text",
    children: "Text Button",
  },
};

// Sizes - Fill Variant
export const Small: Story = {
  args: {
    variant: "fill",
    size: "sm",
    children: "Small Button",
  },
};

export const Medium: Story = {
  args: {
    variant: "fill",
    size: "md",
    children: "Medium Button",
  },
};

export const Large: Story = {
  args: {
    variant: "fill",
    size: "lg",
    children: "Large Button",
  },
};

export const ExtraLarge: Story = {
  args: {
    variant: "fill",
    size: "xl",
    children: "Extra Large Button",
  },
};

// With Icons
export const WithIconLeft: Story = {
  args: {
    variant: "fill",
    iconLeft: <ChevronLeftIcon />,
    children: "Back",
  },
};

export const WithIconRight: Story = {
  args: {
    variant: "fill",
    iconRight: <ChevronRightIcon />,
    children: "Next",
  },
};

export const WithBothIcons: Story = {
  args: {
    variant: "fill",
    iconLeft: <ChevronLeftIcon />,
    iconRight: <ChevronRightIcon />,
    children: "Both Icons",
  },
};

// States
export const Disabled: Story = {
  args: {
    variant: "fill",
    disabled: true,
    children: "Disabled Button",
  },
};

export const DisabledOutline: Story = {
  args: {
    variant: "outline",
    disabled: true,
    children: "Disabled Outline",
  },
};

export const DisabledText: Story = {
  args: {
    variant: "text",
    disabled: true,
    children: "Disabled Text",
  },
};

// Full Width
export const FullWidth: Story = {
  args: {
    variant: "fill",
    fullWidth: true,
    children: "Full Width Button",
  },
};

export const FullWidthWithIconRight: Story = {
  args: {
    variant: "fill",
    fullWidth: true,
    iconRight: <ChevronRightIcon />,
    children: "Full Width with Icon",
  },
};

// Outline Sizes
export const OutlineSmall: Story = {
  args: {
    variant: "outline",
    size: "sm",
    children: "Small Outline",
  },
};

export const OutlineMedium: Story = {
  args: {
    variant: "outline",
    size: "md",
    children: "Medium Outline",
  },
};

export const OutlineLarge: Story = {
  args: {
    variant: "outline",
    size: "lg",
    children: "Large Outline",
  },
};

// Text Sizes
export const TextSmall: Story = {
  args: {
    variant: "text",
    size: "sm",
    children: "Small Text Link",
  },
};

export const TextMedium: Story = {
  args: {
    variant: "text",
    size: "md",
    children: "Medium Text Link",
  },
};

export const TextLarge: Story = {
  args: {
    variant: "text",
    size: "lg",
    children: "Large Text Link",
  },
};

export const TextExtraLarge: Story = {
  args: {
    variant: "text",
    size: "xl",
    children: "Extra Large Text Link",
  },
};

// Interactive Playground
export const Playground: Story = {
  args: {
    variant: "fill",
    size: "md",
    children: "Customize Me!",
    disabled: false,
    fullWidth: false,
  },
};

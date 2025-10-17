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

// All Variants - Show all button variants together
export const Variants: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <h3 className="text-lg font-semibold">Button Variants</h3>
      <div className="flex items-center gap-4">
        <Button variant="fill">Fill Button</Button>
        <Button variant="outline">Outline Button</Button>
        <Button variant="text">Text Button</Button>
      </div>
    </div>
  ),
};

// Sizes - All sizes in one story
export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <h3 className="text-lg font-semibold">Button Sizes</h3>
      <div className="flex items-center gap-4">
        <Button variant="fill" size="sm">
          Small
        </Button>
        <Button variant="fill" size="md">
          Medium
        </Button>
        <Button variant="fill" size="lg">
          Large
        </Button>
        <Button variant="fill" size="xl">
          Extra Large
        </Button>
      </div>
    </div>
  ),
};

// With Icons - All icon variations in one story
export const WithIcons: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <h3 className="text-lg font-semibold">Buttons with Icons</h3>
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-4">
          <Button variant="fill" iconLeft={<ChevronLeftIcon />}>
            Back
          </Button>
          <Button variant="fill" iconRight={<ChevronRightIcon />}>
            Next
          </Button>
          <Button
            variant="fill"
            iconLeft={<ChevronLeftIcon />}
            iconRight={<ChevronRightIcon />}
          >
            Both Icons
          </Button>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="outline" iconLeft={<ChevronLeftIcon />}>
            Back
          </Button>
          <Button variant="outline" iconRight={<ChevronRightIcon />}>
            Next
          </Button>
          <Button variant="text" iconLeft={<ChevronLeftIcon />}>
            Back
          </Button>
          <Button variant="text" iconRight={<ChevronRightIcon />}>
            Next
          </Button>
        </div>
      </div>
    </div>
  ),
};

// Disabled States - All variants in one story
export const DisabledStates: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <h3 className="text-lg font-semibold">Disabled States</h3>
      <div className="flex items-center gap-4">
        <Button variant="fill" disabled>
          Disabled Fill
        </Button>
        <Button variant="outline" disabled>
          Disabled Outline
        </Button>
        <Button variant="text" disabled>
          Disabled Text
        </Button>
      </div>
    </div>
  ),
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

// Outline Sizes - All sizes in one story
export const OutlineSizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <h3 className="text-lg font-semibold">Outline Button Sizes</h3>
      <div className="flex items-center gap-4">
        <Button variant="outline" size="sm">
          Small Outline
        </Button>
        <Button variant="outline" size="md">
          Medium Outline
        </Button>
        <Button variant="outline" size="lg">
          Large Outline
        </Button>
        <Button variant="outline" size="xl">
          Extra Large Outline
        </Button>
      </div>
    </div>
  ),
};

// Text Sizes - All sizes in one story
export const TextSizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <h3 className="text-lg font-semibold">Text Button Sizes</h3>
      <div className="flex items-center gap-4">
        <Button variant="text" size="sm">
          Small Text Link
        </Button>
        <Button variant="text" size="md">
          Medium Text Link
        </Button>
        <Button variant="text" size="lg">
          Large Text Link
        </Button>
        <Button variant="text" size="xl">
          Extra Large Text Link
        </Button>
      </div>
    </div>
  ),
};

// Focus States Demo
export const FocusStates: Story = {
  render: () => (
    <div className="flex flex-col gap-8 p-8">
      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-semibold">Tab Focus States</h3>
        <p className="text-sm text-gray-600">
          Use Tab key to navigate and see focus styling
        </p>
        <div className="flex gap-4">
          <Button variant="fill">Filled Button</Button>
          <Button variant="outline">Outline Button</Button>
          <Button variant="text">Text Link</Button>
        </div>
      </div>
    </div>
  ),
};

import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { Checkbox } from "./checkbox";

const meta = {
  title: "UI/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    disabled: {
      control: "boolean",
      description: "Disabled state",
    },
    checked: {
      control: "boolean",
      description: "Checked state (controlled)",
    },
    defaultChecked: {
      control: "boolean",
      description: "Default checked state (uncontrolled)",
    },
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic Stories
export const Default: Story = {
  args: {},
};

export const Checked: Story = {
  args: {
    defaultChecked: true,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    disabled: true,
    defaultChecked: true,
  },
};

// With Label (like the design you provided)
export const WithLabel: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <Checkbox id="terms" />
      <label
        htmlFor="terms"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
      >
        Accept terms and conditions
      </label>
    </div>
  ),
};

// Options List (matching your design image)
export const OptionsList: Story = {
  render: function OptionsListStory() {
    const [checkedItems, setCheckedItems] = useState({
      option1: true,
      option2: false,
      option3: true,
      option4: false,
    });

    const handleChange = (option: keyof typeof checkedItems) => {
      setCheckedItems((prev) => ({
        ...prev,
        [option]: !prev[option],
      }));
    };

    return (
      <div className="w-[400px] bg-white rounded-lg border p-4">
        <div className="flex flex-col gap-4">
          {Object.entries(checkedItems).map(([key, checked], index) => (
            <div key={key} className="flex items-center gap-3">
              <Checkbox
                id={key}
                checked={checked}
                onCheckedChange={() =>
                  handleChange(key as keyof typeof checkedItems)
                }
              />
              <label
                htmlFor={key}
                className="text-base leading-none cursor-pointer flex-1"
              >
                Option {index + 1}
              </label>
            </div>
          ))}
        </div>
      </div>
    );
  },
};

// With Description
export const WithDescription: Story = {
  render: () => (
    <div className="flex items-start gap-3">
      <Checkbox id="marketing" defaultChecked className="mt-0.5" />
      <div className="grid gap-2">
        <label
          htmlFor="marketing"
          className="text-sm font-medium leading-none cursor-pointer"
        >
          Marketing emails
        </label>
        <p className="text-sm text-muted-foreground">
          Receive emails about new products, features, and more.
        </p>
      </div>
    </div>
  ),
};

// Multiple Checkboxes Group
export const MultipleCheckboxes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-3">
        <Checkbox id="option1" defaultChecked />
        <label
          htmlFor="option1"
          className="text-sm font-medium leading-none cursor-pointer"
        >
          Option 1
        </label>
      </div>
      <div className="flex items-center gap-3">
        <Checkbox id="option2" />
        <label
          htmlFor="option2"
          className="text-sm font-medium leading-none cursor-pointer"
        >
          Option 2
        </label>
      </div>
      <div className="flex items-center gap-3">
        <Checkbox id="option3" defaultChecked />
        <label
          htmlFor="option3"
          className="text-sm font-medium leading-none cursor-pointer"
        >
          Option 3
        </label>
      </div>
      <div className="flex items-center gap-3">
        <Checkbox id="option4" />
        <label
          htmlFor="option4"
          className="text-sm font-medium leading-none cursor-pointer"
        >
          Option 4
        </label>
      </div>
    </div>
  ),
};

// Interactive Checkbox
export const Interactive: Story = {
  render: () => {
    const [checked, setChecked] = useState(false);

    return (
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <Checkbox
            id="interactive"
            checked={checked}
            onCheckedChange={(checked) => setChecked(checked as boolean)}
          />
          <label
            htmlFor="interactive"
            className="text-sm font-medium leading-none cursor-pointer"
          >
            Click me!
          </label>
        </div>
        <p className="text-sm text-muted-foreground">
          Status: {checked ? "Checked ✓" : "Unchecked"}
        </p>
      </div>
    );
  },
};

// With Card Container (styled)
export const WithCardContainer: Story = {
  render: () => (
    <label className="hover:bg-accent/50 flex items-start gap-3 rounded-lg border p-4 cursor-pointer has-[[aria-checked=true]]:border-primary has-[[aria-checked=true]]:bg-primary/5 transition-colors">
      <Checkbox id="card-checkbox" defaultChecked className="mt-0.5" />
      <div className="grid gap-1.5 font-normal">
        <p className="text-sm leading-none font-medium">Enable notifications</p>
        <p className="text-sm text-muted-foreground">
          You can enable or disable notifications at any time.
        </p>
      </div>
    </label>
  ),
};

// Form Example
export const FormExample: Story = {
  render: () => {
    const [formData, setFormData] = useState({
      newsletter: true,
      marketing: false,
      updates: true,
    });

    return (
      <div className="w-[400px] space-y-6 p-6 border rounded-lg">
        <div>
          <h3 className="text-lg font-semibold mb-4">Email Preferences</h3>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <Checkbox
                id="newsletter"
                checked={formData.newsletter}
                onCheckedChange={(checked) =>
                  setFormData((prev) => ({
                    ...prev,
                    newsletter: checked as boolean,
                  }))
                }
              />
              <div className="grid gap-1.5">
                <label
                  htmlFor="newsletter"
                  className="text-sm font-medium leading-none cursor-pointer"
                >
                  Newsletter
                </label>
                <p className="text-sm text-muted-foreground">
                  Weekly newsletter with the latest updates.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Checkbox
                id="marketing"
                checked={formData.marketing}
                onCheckedChange={(checked) =>
                  setFormData((prev) => ({
                    ...prev,
                    marketing: checked as boolean,
                  }))
                }
              />
              <div className="grid gap-1.5">
                <label
                  htmlFor="marketing"
                  className="text-sm font-medium leading-none cursor-pointer"
                >
                  Marketing emails
                </label>
                <p className="text-sm text-muted-foreground">
                  Receive promotional emails and special offers.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Checkbox
                id="updates"
                checked={formData.updates}
                onCheckedChange={(checked) =>
                  setFormData((prev) => ({
                    ...prev,
                    updates: checked as boolean,
                  }))
                }
              />
              <div className="grid gap-1.5">
                <label
                  htmlFor="updates"
                  className="text-sm font-medium leading-none cursor-pointer"
                >
                  Product updates
                </label>
                <p className="text-sm text-muted-foreground">
                  Get notified about new features and improvements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  },
};

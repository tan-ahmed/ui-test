import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./accordion";

const meta = {
  title: "UI/Accordion",
  component: Accordion,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
      description: "Accordion size variant",
    },
    type: {
      control: "select",
      options: ["single", "multiple"],
      description: "Whether one or multiple items can be opened at once",
    },
    collapsible: {
      control: "boolean",
      description: "Whether items can be collapsed (only for type='single')",
    },
  },
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default Medium Accordion
export const Medium: Story = {
  args: {
    type: "single",
    collapsible: true,
    size: "md",
  },
  render: (args) => (
    <Accordion {...args} style={{ maxWidth: "680px" }}>
      <AccordionItem value="item-1">
        <AccordionTrigger>Section 1</AccordionTrigger>
        <AccordionContent>
          <p className="mb-4">
            Rorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
            nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
            tellus elit sed risus.
          </p>
          <p>
            Curabitur tempor quis eros tempus lacinia. Nam bibendum pellentesque
            quam a convallis. Sed ut vulputate nisi. Integer in felis sed leo
            vestibulum venenatis.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Section 2</AccordionTrigger>
        <AccordionContent>
          <p>
            This is the content for section 2. It contains information that can
            be revealed when the section is expanded.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Section 3</AccordionTrigger>
        <AccordionContent>
          <p>
            This is the content for section 3. Click the section header to
            collapse this content.
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

// Small Size
export const Small: Story = {
  args: {
    type: "single",
    collapsible: true,
    size: "sm",
  },
  render: (args) => (
    <Accordion {...args} style={{ maxWidth: "343px" }}>
      <AccordionItem value="item-1">
        <AccordionTrigger>Section 1</AccordionTrigger>
        <AccordionContent>
          <p className="mb-4">
            Rorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus.
          </p>
          <p>
            Curabitur tempor quis eros tempus lacinia. Nam bibendum pellentesque
            quam a convallis.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Section 2</AccordionTrigger>
        <AccordionContent>
          <p>Content for section 2 in small size.</p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Section 3</AccordionTrigger>
        <AccordionContent>
          <p>Content for section 3 in small size.</p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

// Large Size
export const Large: Story = {
  args: {
    type: "single",
    collapsible: true,
    size: "lg",
  },
  render: (args) => (
    <Accordion {...args} style={{ maxWidth: "680px" }}>
      <AccordionItem value="item-1">
        <AccordionTrigger>Section 1</AccordionTrigger>
        <AccordionContent>
          <p className="mb-4">
            Rorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
            nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
            tellus elit sed risus. Maecenas eget condimentum velit, sit amet
            feugiat lectus.
          </p>
          <p>
            Curabitur tempor quis eros tempus lacinia. Nam bibendum pellentesque
            quam a convallis. Sed ut vulputate nisi. Integer in felis sed leo
            vestibulum venenatis. Suspendisse quis arcu sem.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Section 2</AccordionTrigger>
        <AccordionContent>
          <p>Content for section 2 in large size with more padding.</p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Section 3</AccordionTrigger>
        <AccordionContent>
          <p>Content for section 3 in large size.</p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

// Multiple Items Open
export const MultipleOpen: Story = {
  args: {
    type: "multiple",
    size: "md",
  },
  render: (args) => (
    <Accordion {...args} style={{ maxWidth: "680px" }}>
      <AccordionItem value="item-1">
        <AccordionTrigger>Section 1</AccordionTrigger>
        <AccordionContent>
          <p>
            With type="multiple", multiple sections can be open at the same
            time.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Section 2</AccordionTrigger>
        <AccordionContent>
          <p>Try opening both sections simultaneously.</p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Section 3</AccordionTrigger>
        <AccordionContent>
          <p>All three sections can be open at once!</p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

// Full Width
export const FullWidth: Story = {
  args: {
    type: "single",
    collapsible: true,
    size: "lg",
  },
  render: (args) => (
    <Accordion {...args} style={{ maxWidth: "1280px", width: "100%" }}>
      <AccordionItem value="item-1">
        <AccordionTrigger>Section 1</AccordionTrigger>
        <AccordionContent>
          <div style={{ maxWidth: "960px" }}>
            <p className="mb-4">
              Accordion supports full width property, so you can create more
              easily responsive design. Width will be based on the parent
              container. Width must never exceed 1280px with text never
              exceeding 960px.
            </p>
            <p>
              Curabitur tempor quis eros tempus lacinia. Nam bibendum
              pellentesque quam a convallis. Sed ut vulputate nisi. Integer in
              felis sed leo vestibulum venenatis. Suspendisse quis arcu sem.
            </p>
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Section 2</AccordionTrigger>
        <AccordionContent>
          <div style={{ maxWidth: "960px" }}>
            <p>
              Content for section 2 in full width mode. The text container is
              constrained to 960px for optimal readability.
            </p>
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Section 3</AccordionTrigger>
        <AccordionContent>
          <div style={{ maxWidth: "960px" }}>
            <p>Content for section 3 in full width mode.</p>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

// Single Item
export const SingleItem: Story = {
  args: {
    type: "single",
    collapsible: true,
    size: "md",
  },
  render: (args) => (
    <Accordion {...args} style={{ maxWidth: "680px" }}>
      <AccordionItem value="item-1">
        <AccordionTrigger>Single Section</AccordionTrigger>
        <AccordionContent>
          <p>
            An accordion can also be used with just a single item for expandable
            content sections.
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

// Playground
export const Playground: Story = {
  args: {
    type: "single",
    collapsible: true,
    size: "md",
  },
  render: (args) => (
    <Accordion {...args} style={{ maxWidth: "680px" }}>
      <AccordionItem value="item-1">
        <AccordionTrigger>Customize Me!</AccordionTrigger>
        <AccordionContent>
          <p>
            Use the controls panel to experiment with different accordion sizes
            and behaviors.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Section 2</AccordionTrigger>
        <AccordionContent>
          <p>Try changing the size and type properties.</p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

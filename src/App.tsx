import "./App.css";
import { Button } from "./components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./components/ui/accordion";

function App() {
  return (
    <div style={{ padding: "40px", maxWidth: "800px", margin: "0 auto" }}>
      <h1 style={{ marginBottom: "24px", fontFamily: "Open Sans, sans-serif" }}>
        WEG Design System
      </h1>

      <p style={{ marginBottom: "32px", color: "#666" }}>
        Components are now available. View all variants and interactive examples
        in Storybook.
      </p>

      <section style={{ marginBottom: "32px" }}>
        <h2
          style={{
            marginBottom: "16px",
            fontSize: "18px",
            fontFamily: "Open Sans, sans-serif",
          }}
        >
          Button Examples
        </h2>

        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
          <Button variant="fill">Fill Button</Button>
          <Button variant="outline">Outline Button</Button>
          <Button variant="text">Text Link</Button>
        </div>
      </section>

      <section style={{ marginBottom: "32px" }}>
        <h2
          style={{
            marginBottom: "16px",
            fontSize: "18px",
            fontFamily: "Open Sans, sans-serif",
          }}
        >
          Button Sizes
        </h2>

        <div
          style={{
            display: "flex",
            gap: "12px",
            flexWrap: "wrap",
            alignItems: "center",
          }}
        >
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
          <Button size="xl">Extra Large</Button>
        </div>
      </section>

      <section style={{ marginBottom: "32px" }}>
        <h2
          style={{
            marginBottom: "16px",
            fontSize: "18px",
            fontFamily: "Open Sans, sans-serif",
          }}
        >
          Disabled State
        </h2>

        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
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
      </section>

      <section style={{ marginBottom: "32px" }}>
        <h2
          style={{
            marginBottom: "16px",
            fontSize: "18px",
            fontFamily: "Open Sans, sans-serif",
          }}
        >
          Accordion Example
        </h2>

        <Accordion type="single" collapsible size="md">
          <AccordionItem value="item-1">
            <AccordionTrigger>What is the WEG Design System?</AccordionTrigger>
            <AccordionContent>
              <p>
                The WEG Design System is a comprehensive collection of reusable
                components, design tokens, and guidelines to build consistent
                user interfaces across WEG applications.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>How do I use these components?</AccordionTrigger>
            <AccordionContent>
              <p>
                Import components from their respective folders and use them in
                your React application. Each component has TypeScript types and
                full documentation in Storybook.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Where can I see more examples?</AccordionTrigger>
            <AccordionContent>
              <p>
                Run <code>npm run storybook</code> to see all components,
                variants, and interactive examples with full documentation.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      <div
        style={{
          marginTop: "48px",
          padding: "16px",
          backgroundColor: "#f0f0f0",
          borderRadius: "8px",
        }}
      >
        <p style={{ margin: 0, fontSize: "14px" }}>
          💡 <strong>Tip:</strong> Run <code>npm run storybook</code> to see all
          component variants, sizes, and interactive controls in Storybook.
        </p>
      </div>
    </div>
  );
}

export default App;

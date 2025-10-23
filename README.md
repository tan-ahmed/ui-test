# Weg UI

A modern React UI component library built with Radix UI, Tailwind CSS, and TypeScript. Weg UI provides accessible, customizable, and beautiful components for your React applications.

## Features

- 🎨 **Beautiful Design**: Modern, clean components with consistent styling
- ♿ **Accessible**: Built on Radix UI primitives for full accessibility support
- 🎯 **TypeScript**: Full TypeScript support with comprehensive type definitions
- 🎨 **Tailwind CSS**: Styled with Tailwind CSS for easy customization
- 📦 **Tree Shakeable**: Optimized bundle size with tree shaking support
- 🚀 **Modern**: Built with React 18+ and modern JavaScript features

## Installation

```bash
npm install @tan-ahmed/weg-ui
# or
yarn add @tan-ahmed/weg-ui
# or
pnpm add @tan-ahmed/weg-ui
```

## Quick Start

```tsx
import { Button, Card, CardContent } from "@tan-ahmed/weg-ui";
import "@tan-ahmed/weg-ui/styles";

function App() {
  return (
    <Card>
      <CardContent>
        <Button>Hello World</Button>
      </CardContent>
    </Card>
  );
}
```

## Components

### Form Components

- **Button** - Customizable button with multiple variants
- **Checkbox** - Accessible checkbox input
- **Radio Group** - Radio button group component

### Layout Components

- **Card** - Flexible card container
- **Accordion** - Collapsible content sections
- **Tabs** - Tabbed interface component
- **Dialog** - Modal dialog component

### Feedback Components

- **Alert** - Alert messages and notifications
- **Progress** - Progress indicators
- **Spinner** - Loading spinners
- **Tooltip** - Contextual tooltips

### Navigation Components

- **Pagination** - Page navigation
- **Carousel** - Image/content carousel

### Display Components

- **Badge** - Status badges and labels

## Styling

Weg UI uses Tailwind CSS for styling. Make sure to include Tailwind CSS in your project:

```bash
npm install tailwindcss
```

Then import the styles:

```tsx
import "@tan-ahmed/weg-ui/styles";
```

## Customization

All components support className props for custom styling:

```tsx
<Button className="bg-blue-500 hover:bg-blue-600">Custom Button</Button>
```

## TypeScript Support

Weg UI is built with TypeScript and provides full type definitions:

```tsx
import { ButtonProps } from "@tan-ahmed/weg-ui";

const MyButton: React.FC<ButtonProps> = ({ variant, size, ...props }) => {
  return <Button variant={variant} size={size} {...props} />;
};
```

## Development

This project uses:

- **React 18+** - Modern React with hooks and concurrent features
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Radix UI** - Accessible component primitives
- **Vite** - Fast build tool and dev server
- **Storybook** - Component development and documentation

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT License - see [LICENSE](LICENSE) file for details.

## Links

- [GitHub Repository](https://github.com/tan-ahmed/weg-ui)
- [Documentation](https://github.com/tan-ahmed/weg-ui#readme)
- [Issues](https://github.com/tan-ahmed/weg-ui/issues)

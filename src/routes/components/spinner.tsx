import { createFileRoute } from "@tanstack/react-router";
import { Spinner } from "../../components/ui/spinner/spinner";
import { Button } from "../../components/ui/button/button";
import { Badge } from "../../components/ui/badge";
import { useState } from "react";
import { ExternalLink, Copy } from "lucide-react";

export const Route = createFileRoute("/components/spinner")({
  component: SpinnerComponent,
});

function SpinnerComponent() {
  const [activeTab, setActiveTab] = useState<"preview" | "code">("preview");

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(codeExample);
    } catch (err) {
      console.error("Failed to copy code:", err);
    }
  };

  const codeExample = `import { Spinner } from "@/components/ui/spinner";
import { Button } from "@/components/ui/button";

export function SpinnerDemo() {
  return (
    <div className="flex items-center gap-4">
      <Spinner size="sm" color="primary" />
      <Spinner size="md" color="success" />
      <Spinner size="lg" color="error" />
    </div>
  );
}`;

  return (
    <div className="px-6 py-8 max-w-5xl mx-auto">
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-xs font-medium text-purple-600 bg-purple-50 px-2 py-1 rounded-full">
            Form Controls
          </span>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Spinner</h1>
        <p className="text-lg text-gray-600 mb-6">
          A spinner component that displays a loading indicator to show that
          content is being processed or loaded.
        </p>
      </div>

      {/* Component Showcase */}
      <div className="bg-white rounded-lg border shadow-sm p-6 mb-8">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              Spinner Component
            </h2>
            <p className="text-sm text-gray-600 mb-4">
              Loading indicator with multiple sizes and color variants
            </p>
          </div>
        </div>

        {/* Tabs */}
        <div className="mb-4">
          <div className="flex border-b border-gray-200">
            <button
              onClick={() => setActiveTab("preview")}
              className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${
                activeTab === "preview"
                  ? "border-purple-500 text-purple-600"
                  : "border-transparent text-gray-500 hover:text-gray-700"
              }`}
            >
              Preview
            </button>
            <button
              onClick={() => setActiveTab("code")}
              className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${
                activeTab === "code"
                  ? "border-purple-500 text-purple-600"
                  : "border-transparent text-gray-500 hover:text-gray-700"
              }`}
            >
              Code
            </button>
          </div>
        </div>

        {/* Tab Content */}
        <div className="mb-6">
          {activeTab === "preview" ? (
            <div className="p-4 bg-gray-50 rounded-lg border">
              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">Basic Spinner</h3>
                  <Spinner />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">Different Sizes</h3>
                  <div className="flex items-center gap-6">
                    <div className="flex flex-col items-center gap-2">
                      <Spinner size="sm" />
                      <span className="text-sm text-gray-600">Small</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                      <Spinner size="md" />
                      <span className="text-sm text-gray-600">Medium</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                      <Spinner size="lg" />
                      <span className="text-sm text-gray-600">Large</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">Color Variants</h3>
                  <div className="flex items-center gap-6">
                    <div className="flex flex-col items-center gap-2">
                      <Spinner color="default" size="lg" />
                      <span className="text-sm text-gray-600">Default</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                      <Spinner color="primary" size="lg" />
                      <span className="text-sm text-gray-600">Primary</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                      <Spinner color="success" size="lg" />
                      <span className="text-sm text-gray-600">Success</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                      <Spinner color="warning" size="lg" />
                      <span className="text-sm text-gray-600">Warning</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                      <Spinner color="error" size="lg" />
                      <span className="text-sm text-gray-600">Error</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">In Buttons</h3>
                  <div className="flex flex-col items-center gap-4">
                    <Button disabled size="sm" iconLeft={<Spinner size="sm" />}>
                      Loading...
                    </Button>
                    <Button
                      variant="outline"
                      disabled
                      size="sm"
                      iconLeft={<Spinner size="sm" />}
                    >
                      Please wait
                    </Button>
                    <Button
                      variant="text"
                      disabled
                      size="sm"
                      iconLeft={<Spinner size="sm" />}
                    >
                      Processing
                    </Button>
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">In Badges</h3>
                  <div className="flex items-center gap-4">
                    <Badge>
                      <Spinner size="sm" />
                      Syncing
                    </Badge>
                    <Badge variant="secondary">
                      <Spinner size="sm" />
                      Updating
                    </Badge>
                    <Badge variant="outline">
                      <Spinner size="sm" />
                      Processing
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="relative">
              <pre className="p-4 bg-gray-900 text-gray-100 rounded-lg border overflow-x-auto text-sm">
                <code>{codeExample}</code>
              </pre>
              <button
                onClick={copyToClipboard}
                className="absolute top-2 right-2 p-2 text-gray-400 hover:text-gray-200 transition-colors"
                title="Copy code"
              >
                <Copy className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>

        <div className="flex gap-2">
          <a
            href="/storybook/?path=/story/ui-spinner--playground"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-purple-600 bg-purple-50 rounded-md hover:bg-purple-100 transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
            View in Storybook
          </a>
        </div>
      </div>

      {/* Usage Examples */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Usage Examples
        </h2>

        <div className="space-y-8">
          {/* Basic Usage */}
          <div className="bg-white rounded-lg border p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Basic Usage
            </h3>
            <div className="space-y-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <Spinner />
              </div>
              <pre className="p-4 bg-gray-900 text-gray-100 rounded-lg text-sm overflow-x-auto">
                <code>{`<Spinner />`}</code>
              </pre>
            </div>
          </div>

          {/* With Size and Color */}
          <div className="bg-white rounded-lg border p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              With Size and Color
            </h3>
            <div className="space-y-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-4">
                  <Spinner size="sm" color="primary" />
                  <Spinner size="md" color="success" />
                  <Spinner size="lg" color="error" />
                </div>
              </div>
              <pre className="p-4 bg-gray-900 text-gray-100 rounded-lg text-sm overflow-x-auto">
                <code>{`<div className="flex items-center gap-4">
  <Spinner size="sm" color="primary" />
  <Spinner size="md" color="success" />
  <Spinner size="lg" color="error" />
</div>`}</code>
              </pre>
            </div>
          </div>

          {/* Loading States */}
          <div className="bg-white rounded-lg border p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Loading States
            </h3>
            <div className="space-y-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Spinner size="sm" />
                    <span className="text-sm text-gray-600">
                      Processing payment...
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Spinner size="sm" color="success" />
                    <span className="text-sm text-gray-600">
                      Uploading file...
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Spinner size="sm" color="warning" />
                    <span className="text-sm text-gray-600">
                      Validating data...
                    </span>
                  </div>
                </div>
              </div>
              <pre className="p-4 bg-gray-900 text-gray-100 rounded-lg text-sm overflow-x-auto">
                <code>{`<div className="space-y-3">
  <div className="flex items-center gap-3">
    <Spinner size="sm" />
    <span>Processing payment...</span>
  </div>
  <div className="flex items-center gap-3">
    <Spinner size="sm" color="success" />
    <span>Uploading file...</span>
  </div>
</div>`}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>

      {/* Props Documentation */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Props</h2>
        <div className="bg-white rounded-lg border overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Prop
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Default
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Description
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  size
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  "sm" | "md" | "lg"
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  "md"
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  Size of the spinner
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  color
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  "default" | "primary" | "secondary" | "success" | "warning" |
                  "error"
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  "default"
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  Color variant of the spinner
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  className
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  string
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  -
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  Additional CSS classes
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Design Guidelines */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Design Guidelines
        </h2>
        <div className="bg-white rounded-lg border p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Usage
              </h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  • <strong>Loading States:</strong> Use spinners to indicate
                  content is being loaded
                </li>
                <li>
                  • <strong>Button States:</strong> Show spinners in buttons
                  when actions are in progress
                </li>
                <li>
                  • <strong>Form Validation:</strong> Display spinners during
                  form submission
                </li>
                <li>
                  • <strong>Data Fetching:</strong> Use spinners when fetching
                  data from APIs
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Accessibility
              </h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  • <strong>ARIA Attributes:</strong> Includes role="status" and
                  aria-label="Loading"
                </li>
                <li>
                  • <strong>Screen Readers:</strong> Properly announced to
                  assistive technologies
                </li>
                <li>
                  • <strong>Focus Management:</strong> Maintains focus during
                  loading states
                </li>
                <li>
                  • <strong>Context:</strong> Always provide text or labels
                  explaining what is loading
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { Progress } from "../../components/ui/progress/progress";
import { useState, useEffect } from "react";
import { ExternalLink, Copy } from "lucide-react";

export const Route = createFileRoute("/components/progress")({
  component: ProgressComponent,
});

function ProgressComponent() {
  const [activeTab, setActiveTab] = useState<"preview" | "code">("preview");
  const [progress, setProgress] = useState(13);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(codeExample);
    } catch (err) {
      console.error("Failed to copy code:", err);
    }
  };

  const codeExample = `import { Progress } from "@/components/ui/progress";

export function ProgressDemo() {
  const [progress, setProgress] = useState(13);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);

  return <Progress value={progress} showPercentage />;
}`;

  return (
    <div className="px-6 py-8 max-w-5xl mx-auto">
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-xs font-medium text-purple-600 bg-purple-50 px-2 py-1 rounded-full">
            Form Controls
          </span>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Progress</h1>
        <p className="text-lg text-gray-600 mb-6">
          Displays an indicator showing the completion progress of a task,
          typically displayed as a progress bar.
        </p>
      </div>

      {/* Component Showcase */}
      <div className="bg-white rounded-lg border shadow-sm p-6 mb-8">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              Progress Component
            </h2>
            <p className="text-sm text-gray-600 mb-4">
              Interactive progress bar with optional percentage display
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
                  <h3 className="text-lg font-semibold">Basic Progress</h3>
                  <Progress value={50} />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">With Percentage</h3>
                  <Progress value={75} showPercentage />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">Animated Progress</h3>
                  <Progress value={progress} showPercentage />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">
                    Multiple Progress Bars
                  </h3>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm text-gray-600">
                        <span>Task 1</span>
                        <span>100%</span>
                      </div>
                      <Progress value={100} className="w-full" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm text-gray-600">
                        <span>Task 2</span>
                        <span>75%</span>
                      </div>
                      <Progress value={75} className="w-full" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm text-gray-600">
                        <span>Task 3</span>
                        <span>50%</span>
                      </div>
                      <Progress value={50} className="w-full" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm text-gray-600">
                        <span>Task 4</span>
                        <span>25%</span>
                      </div>
                      <Progress value={25} className="w-full" />
                    </div>
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
            href="/storybook/?path=/story/ui-progress--playground"
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
                <Progress value={33} />
              </div>
              <pre className="p-4 bg-gray-900 text-gray-100 rounded-lg text-sm overflow-x-auto">
                <code>{`<Progress value={33} />`}</code>
              </pre>
            </div>
          </div>

          {/* With Percentage */}
          <div className="bg-white rounded-lg border p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              With Percentage Display
            </h3>
            <div className="space-y-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <Progress value={66} showPercentage />
              </div>
              <pre className="p-4 bg-gray-900 text-gray-100 rounded-lg text-sm overflow-x-auto">
                <code>{`<Progress value={66} showPercentage />`}</code>
              </pre>
            </div>
          </div>

          {/* File Upload Progress */}
          <div className="bg-white rounded-lg border p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              File Upload Progress
            </h3>
            <div className="space-y-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>Uploading file...</span>
                    <span>75%</span>
                  </div>
                  <Progress value={75} className="w-full" />
                </div>
              </div>
              <pre className="p-4 bg-gray-900 text-gray-100 rounded-lg text-sm overflow-x-auto">
                <code>{`<div className="space-y-2">
  <div className="flex justify-between text-sm text-gray-600">
    <span>Uploading file...</span>
    <span>75%</span>
  </div>
  <Progress value={75} className="w-full" />
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
                  value
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  number
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  -
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  The progress value (0-100)
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  showPercentage
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  boolean
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  false
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  Show percentage label above the progress bar
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
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  max
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  number
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  100
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  Maximum value for the progress bar
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
                Spacing
              </h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  • <strong>Height:</strong> 16px (h-4) by default
                </li>
                <li>
                  • <strong>Spacing:</strong> 8px between multiple progress bars
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Colors
              </h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  • <strong>Background:</strong> Light gray (#e5e7eb)
                </li>
                <li>
                  • <strong>Progress:</strong> Purple (#9333ea)
                </li>
                <li>
                  • <strong>Text:</strong> Dark gray for labels
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Code, Palette, Zap } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="px-6 py-8 max-w-5xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          University of Warwick Design System
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          A comprehensive collection of reusable components, design tokens, and
          guidelines to build consistent user interfaces across University of
          Warwick applications.
        </p>
        <div className="flex gap-4 justify-center">
          <Link
            to="/components/button"
            className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-medium"
          >
            Browse Components
            <ArrowRight className="w-5 h-5" />
          </Link>
          <a
            href="/storybook/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-purple-600 text-purple-600 rounded-lg hover:bg-purple-50 transition-colors font-medium"
          >
            View Storybook
          </a>
        </div>
      </div>

      {/* Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="p-6 bg-white rounded-lg border shadow-sm">
          <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
            <Palette className="w-6 h-6 text-purple-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Consistent Design
          </h3>
          <p className="text-gray-600">
            Built with a unified design language to ensure consistency across
            all your applications.
          </p>
        </div>

        <div className="p-6 bg-white rounded-lg border shadow-sm">
          <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
            <Code className="w-6 h-6 text-purple-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Developer Friendly
          </h3>
          <p className="text-gray-600">
            Well-documented components with TypeScript support and comprehensive
            examples.
          </p>
        </div>

        <div className="p-6 bg-white rounded-lg border shadow-sm">
          <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
            <Zap className="w-6 h-6 text-purple-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Accessible
          </h3>
          <p className="text-gray-600">
            All components are built with accessibility in mind, following WCAG
            guidelines.
          </p>
        </div>
      </div>

      {/* Getting Started */}
      <div className="bg-gray-50 rounded-lg border p-8 mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Getting Started
        </h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              1. Browse Components
            </h3>
            <p className="text-gray-600">
              Use the sidebar to navigate through our collection of components.
              Each component page includes live previews, code examples, and
              usage guidelines.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              2. View Documentation
            </h3>
            <p className="text-gray-600">
              Each component includes comprehensive documentation with
              information about variants, sizes, and customization options.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              3. Explore in Storybook
            </h3>
            <p className="text-gray-600">
              For interactive examples and detailed component controls, visit
              our Storybook instance where you can experiment with different
              configurations.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              4. Integrate into Your Project
            </h3>
            <p className="text-gray-600">
              Components are available as npm packages and can be imported
              directly into your React applications. Copy the code examples and
              adapt them to your needs.
            </p>
          </div>
        </div>
      </div>

      {/* Available Components */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Available Components
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link
            to="/components/button"
            className="p-4 bg-white rounded-lg border hover:border-purple-300 hover:shadow-md transition-all group"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Button</h3>
                <p className="text-sm text-gray-600">
                  Interactive elements for user actions
                </p>
              </div>
              <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-purple-600 transition-colors" />
            </div>
          </Link>

          <Link
            to="/components/alert"
            className="p-4 bg-white rounded-lg border hover:border-purple-300 hover:shadow-md transition-all group"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Alert</h3>
                <p className="text-sm text-gray-600">
                  Display important messages and notifications
                </p>
              </div>
              <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-purple-600 transition-colors" />
            </div>
          </Link>

          <Link
            to="/components/accordion"
            className="p-4 bg-white rounded-lg border hover:border-purple-300 hover:shadow-md transition-all group"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Accordion</h3>
                <p className="text-sm text-gray-600">
                  Collapsible content sections
                </p>
              </div>
              <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-purple-600 transition-colors" />
            </div>
          </Link>

          <Link
            to="/components/card"
            className="p-4 bg-white rounded-lg border hover:border-purple-300 hover:shadow-md transition-all group"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Card</h3>
                <p className="text-sm text-gray-600">
                  Container for related content and actions
                </p>
              </div>
              <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-purple-600 transition-colors" />
            </div>
          </Link>

          <Link
            to="/components/carousel"
            className="p-4 bg-white rounded-lg border hover:border-purple-300 hover:shadow-md transition-all group"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Carousel</h3>
                <p className="text-sm text-gray-600">
                  Cycle through content with touch support
                </p>
              </div>
              <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-purple-600 transition-colors" />
            </div>
          </Link>

          <Link
            to="/components/checkbox"
            className="p-4 bg-white rounded-lg border hover:border-purple-300 hover:shadow-md transition-all group"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Checkbox</h3>
                <p className="text-sm text-gray-600">
                  Select multiple options from a list
                </p>
              </div>
              <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-purple-600 transition-colors" />
            </div>
          </Link>

          <Link
            to="/components/dialog"
            className="p-4 bg-white rounded-lg border hover:border-purple-300 hover:shadow-md transition-all group"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Dialog</h3>
                <p className="text-sm text-gray-600">
                  Modal dialogs for focused interactions
                </p>
              </div>
              <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-purple-600 transition-colors" />
            </div>
          </Link>

          <Link
            to="/components/pagination"
            className="p-4 bg-white rounded-lg border hover:border-purple-300 hover:shadow-md transition-all group"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Pagination</h3>
                <p className="text-sm text-gray-600">
                  Navigate through paginated data sets
                </p>
              </div>
              <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-purple-600 transition-colors" />
            </div>
          </Link>

          <Link
            to="/components/tabs"
            className="p-4 bg-white rounded-lg border hover:border-purple-300 hover:shadow-md transition-all group"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Tabs</h3>
                <p className="text-sm text-gray-600">
                  Organize content into separate views
                </p>
              </div>
              <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-purple-600 transition-colors" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

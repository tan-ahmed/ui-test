import { ComponentShowcase } from "@/components/ComponentShowcase";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="px-6 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          University of Warwick Design System
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          A comprehensive collection of reusable components, design tokens, and
          guidelines to build consistent user interfaces across University of
          Warwick applications.
        </p>
      </div>

      <ComponentShowcase />
    </div>
  );
}

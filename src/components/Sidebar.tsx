import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";

interface SidebarProps {
  components: Array<{
    title: string;
    category: string;
  }>;
}

export function Sidebar({ components }: SidebarProps) {
  const categories = [...new Set(components.map((c) => c.category))];

  return (
    <div className="w-64 bg-white border-r border-gray-200 h-full overflow-y-auto">
      <div className="p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Components</h2>

        <nav className="space-y-1">
          {categories.map((category) => (
            <div key={category} className="mb-4">
              <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">
                {category}
              </h3>
              <div className="space-y-1">
                {components
                  .filter((component) => component.category === category)
                  .map((component) => (
                    <a
                      key={component.title}
                      href={`#${component.title
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`}
                      className="flex items-center justify-between px-3 py-2 text-sm text-gray-700 rounded-md hover:bg-gray-100 hover:text-gray-900 transition-colors group"
                    >
                      <span>{component.title}</span>
                      <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  ))}
              </div>
            </div>
          ))}
        </nav>

        <div className="mt-8 pt-6 border-t border-gray-200">
          <a
            href="http://localhost:6007"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-purple-600 bg-purple-50 rounded-md hover:bg-purple-100 transition-colors"
          >
            <span>View in Storybook</span>
            <ChevronRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}

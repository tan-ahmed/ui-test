import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { Sidebar } from "../components/Sidebar";

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="min-h-screen bg-gray-50">
        <header className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <Link to="/" className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-700 rounded-lg flex items-center justify-center shadow-md">
                    <span className="text-white font-bold text-sm">UW</span>
                  </div>
                  <div>
                    <h1 className="text-xl font-bold text-gray-900">
                      University of Warwick
                    </h1>
                    <p className="text-sm text-gray-600">Design System</p>
                  </div>
                </Link>
              </div>
              <nav className="flex space-x-8">
                <Link
                  to="/"
                  className="text-gray-700 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                  activeProps={{
                    className:
                      "text-purple-600 bg-purple-50 px-3 py-2 rounded-md text-sm font-medium",
                  }}
                  activeOptions={{ exact: true }}
                >
                  Home
                </Link>
                <a
                  href="http://localhost:6007"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Storybook
                </a>
              </nav>
            </div>
          </div>
        </header>
        <div className="flex">
          <Sidebar
            components={[
              { title: "Button", category: "Form Controls" },
              { title: "Alert", category: "Feedback" },
              { title: "Accordion", category: "Layout" },
              { title: "Card", category: "Layout" },
              { title: "Carousel", category: "Layout" },
              { title: "Dialog", category: "Overlay" },
              { title: "Pagination", category: "Navigation" },
            ]}
          />
          <main className="flex-1">
            <Outlet />
          </main>
        </div>
      </div>
      <TanStackRouterDevtools />
    </>
  ),
});

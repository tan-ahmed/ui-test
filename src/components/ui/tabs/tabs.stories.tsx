import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./tabs";
import { Button } from "../button/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../card";

const meta = {
  title: "UI/Tabs",
  component: Tabs,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => {
      return (
        <div className="min-h-[400px] w-full max-w-2xl flex items-center justify-center p-4">
          <Story />
        </div>
      );
    },
  ],
  argTypes: {
    onValueChange: fn(),
  },
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

const BasicTabs = (args: React.ComponentProps<typeof Tabs>) => {
  return (
    <Tabs {...args} defaultValue="tab1" className="w-full">
      <TabsList>
        <TabsTrigger value="tab1">Tab 1</TabsTrigger>
        <TabsTrigger value="tab2">Tab 2</TabsTrigger>
        <TabsTrigger value="tab3">Tab 3</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1" className="mt-4">
        <div className="p-4 border rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Tab 1 Content</h3>
          <p className="text-gray-600">
            This is the content for the first tab. You can place any content
            here.
          </p>
        </div>
      </TabsContent>
      <TabsContent value="tab2" className="mt-4">
        <div className="p-4 border rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Tab 2 Content</h3>
          <p className="text-gray-600">
            This is the content for the second tab. Each tab can have different
            content.
          </p>
        </div>
      </TabsContent>
      <TabsContent value="tab3" className="mt-4">
        <div className="p-4 border rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Tab 3 Content</h3>
          <p className="text-gray-600">
            This is the content for the third tab. You can have as many tabs as
            needed.
          </p>
        </div>
      </TabsContent>
    </Tabs>
  );
};

export const Default: Story = {
  render: (args) => <BasicTabs {...args} />,
};

const CardTabs = (args: React.ComponentProps<typeof Tabs>) => {
  return (
    <Tabs {...args} defaultValue="account" className="w-full">
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
        <TabsTrigger value="settings">Settings</TabsTrigger>
      </TabsList>
      <TabsContent value="account" className="mt-4">
        <Card>
          <CardHeader>
            <CardTitle>Account</CardTitle>
            <CardDescription>
              Make changes to your account here. Click save when you're done.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                className="w-full px py border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Enter your email"
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save changes</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="password" className="mt-4">
        <Card>
          <CardHeader>
            <CardTitle>Password</CardTitle>
            <CardDescription>
              Change your password here. After saving, you'll be logged out.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Current password
              </label>
              <input
                type="password"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Enter current password"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                New password
              </label>
              <input
                type="password"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Enter new password"
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save password</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="settings" className="mt-4">
        <Card>
          <CardHeader>
            <CardTitle>Settings</CardTitle>
            <CardDescription>
              Manage your application settings and preferences.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium">Email notifications</h4>
                <p className="text-sm text-gray-600">Receive email updates</p>
              </div>
              <input type="checkbox" className="rounded" />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium">Push notifications</h4>
                <p className="text-sm text-gray-600">
                  Receive push notifications
                </p>
              </div>
              <input type="checkbox" className="rounded" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save settings</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  );
};

export const WithCards: Story = {
  render: (args) => <CardTabs {...args} />,
};

const VerticalTabs = (args: React.ComponentProps<typeof Tabs>) => {
  return (
    <Tabs
      {...args}
      defaultValue="overview"
      className="w-full"
      orientation="vertical"
    >
      <div className="flex gap-4">
        <TabsList className="flex-col h-fit">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
        </TabsList>
        <div className="flex-1">
          <TabsContent value="overview" className="mt-0">
            <div className="p-4 border rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Overview</h3>
              <p className="text-gray-600">
                Get a high-level view of your dashboard with key metrics and
                insights.
              </p>
            </div>
          </TabsContent>
          <TabsContent value="analytics" className="mt-0">
            <div className="p-4 border rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Analytics</h3>
              <p className="text-gray-600">
                Detailed analytics and performance metrics for your application.
              </p>
            </div>
          </TabsContent>
          <TabsContent value="reports" className="mt-0">
            <div className="p-4 border rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Reports</h3>
              <p className="text-gray-600">
                Generate and view detailed reports for your business needs.
              </p>
            </div>
          </TabsContent>
          <TabsContent value="notifications" className="mt-0">
            <div className="p-4 border rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Notifications</h3>
              <p className="text-gray-600">
                Manage your notification preferences and settings.
              </p>
            </div>
          </TabsContent>
        </div>
      </div>
    </Tabs>
  );
};

export const Vertical: Story = {
  render: (args) => <VerticalTabs {...args} />,
};

const DisabledTabs = (args: React.ComponentProps<typeof Tabs>) => {
  return (
    <Tabs {...args} defaultValue="active" className="w-full">
      <TabsList>
        <TabsTrigger value="active">Active</TabsTrigger>
        <TabsTrigger value="disabled" disabled>
          Disabled
        </TabsTrigger>
        <TabsTrigger value="another">Another</TabsTrigger>
      </TabsList>
      <TabsContent value="active" className="mt-4">
        <div className="p-4 border rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Active Tab</h3>
          <p className="text-gray-600">This tab is active and functional.</p>
        </div>
      </TabsContent>
      <TabsContent value="disabled" className="mt-4">
        <div className="p-4 border rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Disabled Tab</h3>
          <p className="text-gray-600">
            This content won't be accessible because the tab is disabled.
          </p>
        </div>
      </TabsContent>
      <TabsContent value="another" className="mt-4">
        <div className="p-4 border rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Another Tab</h3>
          <p className="text-gray-600">This is another functional tab.</p>
        </div>
      </TabsContent>
    </Tabs>
  );
};

export const WithDisabled: Story = {
  render: (args) => <DisabledTabs {...args} />,
};

const ManyTabsComponent = (args: React.ComponentProps<typeof Tabs>) => {
  return (
    <Tabs {...args} defaultValue="tab1" className="w-full">
      <TabsList className="grid grid-cols-5">
        <TabsTrigger value="tab1">Tab 1</TabsTrigger>
        <TabsTrigger value="tab2">Tab 2</TabsTrigger>
        <TabsTrigger value="tab3">Tab 3</TabsTrigger>
        <TabsTrigger value="tab4">Tab 4</TabsTrigger>
        <TabsTrigger value="tab5">Tab 5</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1" className="mt-4">
        <div className="p-4 border rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Tab 1</h3>
          <p className="text-gray-600">Content for the first tab.</p>
        </div>
      </TabsContent>
      <TabsContent value="tab2" className="mt-4">
        <div className="p-4 border rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Tab 2</h3>
          <p className="text-gray-600">Content for the second tab.</p>
        </div>
      </TabsContent>
      <TabsContent value="tab3" className="mt-4">
        <div className="p-4 border rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Tab 3</h3>
          <p className="text-gray-600">Content for the third tab.</p>
        </div>
      </TabsContent>
      <TabsContent value="tab4" className="mt-4">
        <div className="p-4 border rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Tab 4</h3>
          <p className="text-gray-600">Content for the fourth tab.</p>
        </div>
      </TabsContent>
      <TabsContent value="tab5" className="mt-4">
        <div className="p-4 border rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Tab 5</h3>
          <p className="text-gray-600">Content for the fifth tab.</p>
        </div>
      </TabsContent>
    </Tabs>
  );
};

export const ManyTabs: Story = {
  render: (args) => <ManyTabsComponent {...args} />,
};

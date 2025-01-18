import React from 'react';

const Layout = ({ children }) => {
  // Split children into sidebar and maincontent
  const sidebar = React.Children.toArray(children).find(
    (child) => child.type === Sidebar
  );
  const maincontent = React.Children.toArray(children).find(
    (child) => child.type === MainContent
  );

  return (
    <div className="max-w-7xl mx-auto py-24">
      <div className="flex flex-col flex-col-reverse md:flex-row">
        {/* Sidebar */}
        <aside className="w-full md:w-96 mt-6 px-4 md:mt-0">
          {sidebar && sidebar.props.children}
        </aside>

        {/* Main Content */}
        <main className="flex-1 ml-6 px-4">
          {maincontent && maincontent.props.children}
        </main>
      </div>
    </div>
  );
};

export const Sidebar = ({ children }) => children;
export const MainContent = ({ children }) => children;

export default Layout;

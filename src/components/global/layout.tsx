import Header from "./header";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="pb-20">
      <Header />
      <div className="py-20 lg:py-0"> {children}</div>
    </div>
  );
};

export default Layout;

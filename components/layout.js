export default function Layout({ themeName, children }) {
  return (
    <div className="theme-autocomm">
      <div className="main">{children}</div>
    </div>
  );
}

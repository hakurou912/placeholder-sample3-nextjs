import "./globals.css";
import './bootstrap.css';

export const metadata = {
  title: "Parallel Routes",
  description: "Next.jsのParallel Routesを試しています。",
};

export default function RootLayout({ children, posts, users }) {
  return (
    <html lang="en">
      <body>
        <nav className="navbar bg-primary-subtle">
          <div className="container-fluid">
            <span className="navbar-brand mb-0 h1">layout.js</span>
          </div>
        </nav>
        <div style={{minHeight:'100dvh'}}>
          {children}
          <div className="container g-0">
            <div className="row g-0">
              <div className="col-6">{posts}</div>
              <div className="col-6">{users}</div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}

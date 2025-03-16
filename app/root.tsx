import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";

import "./tailwind.css";

export const links: LinksFunction = () => [
];

// 避免渲染 document root,容易被浏览器插件插入head损坏

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Meta />
      <Links />
      {children}
      <ScrollRestoration />
      <Scripts />
    </>
  );
  // return (
  //   <html lang="en">
  //     <head>
  //       <meta charSet="utf-8" />
  //       <meta name="viewport" content="width=device-width, initial-scale=1" />
  //       <Meta />
  //       <Links />
  //     </head>
  //     <body>
  //       {children}
  //       <ScrollRestoration />
  //       <Scripts />
  //     </body>
  //   </html>
  // );
}

export default function App() {
  return <Outlet />;
}

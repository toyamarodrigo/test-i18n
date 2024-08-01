import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { useChangeLanguage } from "remix-i18next/react";
import { useTranslation } from "react-i18next";

import "./tailwind.css";

export function Layout({ children }: { children: React.ReactNode }) {
  const { i18n } = useTranslation();
  useChangeLanguage("es-AR");

  return (
    <html
      dir={i18n.dir()}
      lang="es-AR"
      style={{
        height: "100vh",
      }}
    >
      <head>
        <Meta />
        <Links />
      </head>
      <body
        style={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "whitesmoke",
          height: "100vh",
          width: "100%",
        }}
      >
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <Outlet />
  );
}

export function HydrateFallback() {
  return (
    <div className="flex h-full items-center justify-center " data-testid="fallback">
      <p>Fallback root</p>
    </div>
  );
}
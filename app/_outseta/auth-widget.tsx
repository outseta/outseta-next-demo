"use client";

import { useState, useEffect } from "react";

export default function AuthWidget({
  widgetMode = "login|register",
}: {
  widgetMode: "login" | "register" | "login|register";
}) {
  const [authCallbackUrl, setAuthCallbackUrl] = useState("");

  useEffect(() => {
    setAuthCallbackUrl(window.location.origin + "/auth");
  }, []);

  // Only render widget on client
  if (!authCallbackUrl) return null;

  return (
    <div
      className="o-auth-embed w-full"
      data-widget-mode={widgetMode}
      data-authentication-callback-url={authCallbackUrl}
    ></div>
  );
}

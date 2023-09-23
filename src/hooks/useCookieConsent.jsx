import { useCallback, useEffect, useState } from "react";
import { useCookies } from "react-cookie";

export const useCookieConsent = () => {
  const gaProperty = "JBVJ2688BG";
  const disableStr = `ga-disable-G-${gaProperty}`;

  const [cookies, setCookie, removeCookie] = useCookies([
    "consent",
    "_ga",
    "_ga_JBVJ2688BG",
    disableStr,
  ]);

  const [optIn, setOptIn] = useState(cookies.consent || "false");
  const [initialGaCookie, setInitialGaCookie] = useState(null);
  const [initialGaPropertyCookie, setInitialGaPropertyCookie] = useState(null);

  useEffect(() => {
    if (optIn === "false") {
      setInitialGaCookie(cookies._ga);
      setInitialGaPropertyCookie(cookies._ga_JBVJ2688BG);
    }
  }, [cookies._ga, cookies._ga_JBVJ2688BG, optIn]);

  const gaOptOut = useCallback(() => {
    setCookie("consent", "false", {
      path: "/",
      domain: ".vui.guide",
      maxAge: 63072000,
    });
    removeCookie("_ga", { path: "/", domain: ".vui.guide" });
    removeCookie("_ga_JBVJ2688BG", { path: "/", domain: ".vui.guide" });
    setCookie(disableStr, "true", {
      path: "/",
      domain: ".vui.guide",
      maxAge: 63072000,
    });
    setOptIn("false");
  }, [disableStr, removeCookie, setCookie]);

  const gaOptIn = useCallback(() => {
    if (initialGaCookie) {
      setCookie("_ga", initialGaCookie, {
        path: "/",
        domain: ".vui.guide",
        maxAge: 63072000,
      });
    }
    if (initialGaPropertyCookie) {
      setCookie("_ga_JBVJ2688BG", initialGaPropertyCookie, {
        path: "/",
        domain: ".vui.guide",
        maxAge: 63072000,
      });
    }
    setCookie(disableStr, "false", {
      path: "/",
      domain: ".vui.guide",
      maxAge: 63072000,
    });
    setCookie("consent", "true", {
      path: "/",
      domain: ".vui.guide",
      maxAge: 63072000,
    });
    setOptIn("true");
  }, [disableStr, initialGaCookie, initialGaPropertyCookie, setCookie]);

  useEffect(() => {
    if (optIn === "true") {
      gaOptIn();
    } else if (optIn === "false") {
      gaOptOut();
    }
  }, [optIn, gaOptIn, gaOptOut]);

  return { optIn, setOptIn };
};

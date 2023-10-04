import { useReducer, useEffect } from "react";
import { useCookies } from "react-cookie";

const initialState = {
  choiceMade: false,
  hasOptedIn: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_INITIAL_STATE":
      return {
        ...state,
        choiceMade: typeof action.payload.consent !== "undefined",
        hasOptedIn: action.payload.consent === "true",
      };
    case "OPT_IN":
      return {
        ...state,
        choiceMade: true,
        hasOptedIn: true,
      };
    case "OPT_OUT":
      return {
        ...state,
        choiceMade: true,
        hasOptedIn: false,
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

export const useCookieConsent = () => {
  const [cookies, setCookie, removeCookie] = useCookies([
    "consent",
    "_ga",
    "_ga_JBVJ2688BG",
    "ga-disable-G-JBVJ2688BG",
    "stor_ga",
    "stor_ga_JBVJ2688BG",
  ]);

  const [state, dispatch] = useReducer(reducer, initialState);

  const cookieOptions = {
    path: "/",
    maxAge: 63072000,
    domain: ".vui.guide",
  };

  const getCookie = (name) => {
    if (typeof window === "undefined") return null; // Check if running on server

    const value = "; " + document.cookie;
    const parts = value.split("; " + name + "=");
    if (parts.length === 2)
      return parts
        .pop()
        .split(";")
        .shift();
    return null;
  };

  let stor_ga = getCookie("_ga");
  let stor_ga_JBVJ2688BG = getCookie("_ga_JBVJ2688BG");
  console.log(stor_ga, stor_ga_JBVJ2688BG);

  useEffect(() => {
    dispatch({
      type: "SET_INITIAL_STATE",
      payload: { consent: cookies.consent },
    });
  }, [cookies.consent]);

  const manageGaCookies = (shouldEnable) => {
    if (shouldEnable) {
      if (cookies.stor_ga) setCookie("_ga", cookies.stor_ga, cookieOptions);
      if (cookies.stor_ga_JBVJ2688BG)
        setCookie("_ga_JBVJ2688BG", cookies.stor_ga_JBVJ2688BG, cookieOptions);
      setCookie("ga-disable-G-JBVJ2688BG", "false", cookieOptions);
    } else {
      setCookie("stor_ga", stor_ga || "", {
        path: "/",
        domain: ".vui.guide",
      });
      setCookie("stor_ga_JBVJ2688BG", stor_ga_JBVJ2688BG || "", {
        path: "/",
        domain: ".vui.guide",
      });
      removeCookie("_ga", { path: "/", domain: ".vui.guide" });
      removeCookie("_ga_JBVJ2688BG", { path: "/", domain: ".vui.guide" });
      setCookie("ga-disable-G-JBVJ2688BG", "true", cookieOptions);
    }
  };

  const optIn = () => {
    manageGaCookies(true);
    setCookie("consent", "true", cookieOptions);
    dispatch({ type: "OPT_IN" });
  };

  const optOut = () => {
    manageGaCookies(false);
    setCookie("consent", "false", cookieOptions);
    dispatch({ type: "OPT_OUT" });
  };

  return {
    cookies,
    optIn,
    optOut,
    ...state,
  };
};

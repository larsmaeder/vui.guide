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
    // "ga-disable-G-JBVJ2688BG",
    "stor_ga",
    "stor_ga_JBVJ2688BG",
  ]);

  const [state, dispatch] = useReducer(reducer, initialState);

  const cookieOptions = {
    path: "/",
    maxAge: 63072000,
    domain: ".vui.guide",
  };

  useEffect(() => {
    dispatch({
      type: "SET_INITIAL_STATE",
      payload: { consent: cookies.consent },
    });
  }, [cookies.consent]);

  useEffect(() => {
    if (state.choiceMade) {
      if (state.hasOptedIn) {
        if (cookies.stor_ga) setCookie("_ga", cookies.stor_ga, cookieOptions);
        if (cookies.stor_ga_JBVJ2688BG)
          setCookie(
            "_ga_JBVJ2688BG",
            cookies.stor_ga_JBVJ2688BG,
            cookieOptions
          );
        // setCookie("ga-disable-G-JBVJ2688BG", "false", cookieOptions);
      } else {
        // Check if stor_ cookies are already set before setting them again
        if (!cookies.stor_ga && cookies._ga) {
          setCookie("stor_ga", cookies._ga, cookieOptions);
        }
        if (!cookies.stor_ga_JBVJ2688BG && cookies._ga_JBVJ2688BG) {
          setCookie(
            "stor_ga_JBVJ2688BG",
            cookies._ga_JBVJ2688BG,
            cookieOptions
          );
        }
        // setCookie("ga-disable-G-JBVJ2688BG", "true", cookieOptions);
        removeCookie("_ga", {
          path: "/",
          domain: ".vui.guide",
        });
        removeCookie("_ga_JBVJ2688BG", {
          path: "/",
          domain: ".vui.guide",
        });
        if (typeof window.gaOptout === "function") {
          window.gaOptout();
        }
      }
    }
  }, [state.choiceMade, state.hasOptedIn, cookies._ga, cookies._ga_JBVJ2688BG]); // Depend on state.choiceMade and state.hasOptedIn

  const optIn = () => {
    setCookie("consent", "true", cookieOptions);
    dispatch({ type: "OPT_IN" });
  };

  const optOut = () => {
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

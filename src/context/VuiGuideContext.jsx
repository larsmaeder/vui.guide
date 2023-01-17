// https://stackoverflow.com/questions/65641251/pass-props-with-react-and-gatsby
import * as React from "react";
import { useCookies } from "react-cookie";

const VuiGuideContext = React.createContext();

export const VuiGuideProvider = ({ children }) => {
  const vuiguide = useProvideVuiGuide();
  return (
    <VuiGuideContext.Provider value={vuiguide}>
      {children}
    </VuiGuideContext.Provider>
  );
};

// export const useVuiGuide = () => {
//   return useContext(vuiGuideContext);
// };

const useProvideVuiGuide = () => {
  const [cookies, setCookie, removeCookie] = useCookies(["consent"]);

  const handleCookieAccept = () => {
    setCookie("consent", "accepted", { path: "/" });
    console.log("Accepted");
  };
  const handleCookieDecline = () => {
    setCookie("consent", "declined", { path: "/" });
    console.log("Declined");
    removeCookie("_ga");
  };

  return {
    handleCookieAccept,
    handleCookieDecline,
    cookies,
    setCookie,
    removeCookie,
  };
};

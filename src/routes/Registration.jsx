import React from "react";

import { useScrollToTop } from "hooks/scroll";
import RegistrationPage from "components/pages/Registration";

const Registration = () => {
  useScrollToTop();

  return <RegistrationPage />;
};

export default Registration;

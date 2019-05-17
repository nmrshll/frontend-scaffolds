import React from "react";
import App from "../components/pages/App";

import { shallow } from "enzyme";

it("renders without crashing", () => {
  const wrapper = shallow(<App />);
});

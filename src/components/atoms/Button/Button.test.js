import React from "react";
// import { shallow, mount } from "enzyme";
import { render } from "react-testing-library";
import styled from "styled-components";

import Button from "./Button";

it("renders without crashing", () => {
  const { container } = render(<Button>ClickMe</Button>);
  const rButton = container.firstChild;
  expect(rButton.tagName).toBe("BUTTON");
  expect(rButton.firstChild.textContent).toBe("ClickMe");
});

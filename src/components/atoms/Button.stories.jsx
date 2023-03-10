import React from "react";
import { actions } from "@storybook/addon-actions";
import Button from "./Button";
import styled from "styled-components";

export default {
  title: "Components/Atoms/Button",
  component: Button,
};

const events = actions({ onClick: "clicked" });

const Tollbar = styled.div`
  & > * {
    margin-right: 8px;
  }
`;

const ButtonsWrapper = (props) => (
  <div>
    <p>Enabled:</p>
    <Tollbar>
      <Button {...props} {...events}>
        Default
      </Button>
      <Button color="primary" {...props} {...events}>
        Primary
      </Button>
      <Button color="danger" {...props} {...events}>
        Danger
      </Button>
    </Tollbar>
    <p>As a Link</p>
    <Tollbar>
      <Button as="a" href="#" {...props} {...events}>
        Default
      </Button>
      <Button as="a" href="#" color="primary" {...props} {...events}>
        Primary
      </Button>
      <Button as="a" href="#" color="danger" {...props} {...events}>
        Danger
      </Button>
    </Tollbar>
    <p>Disabled:</p>
    <Tollbar>
      <Button disabled {...props} {...events}>
        Default
      </Button>
      <Button disabled color="primary" {...props} {...events}>
        Primary
      </Button>
      <Button disabled color="danger" {...props} {...events}>
        Danger
      </Button>
    </Tollbar>
  </div>
);

export const usage = () => <ButtonsWrapper />;

export const outlined = () => <ButtonsWrapper variant="outlined" />;

export const link = () => <ButtonsWrapper variant="link" />;

import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { breakAt, BreakpointSizes } from "styles/Breakpoints";

//#region CalloutBody
const StyledCalloutBody = styled.div`
  flex: 1;
  h6,
  p {
    margin: 0 0 8px;
  }
`;

export const CalloutBody = ({ children }) => (
  <StyledCalloutBody>{children}</StyledCalloutBody>
);

CalloutBody.defaultProps = {
  children: undefined,
};

CalloutBody.propTypes = {
  children: PropTypes.node,
};
//#endregion

//#region CalloutAction

const StyledCalloutAction = styled.div`
  padding-top: 16px;
`;

export const CalloutAction = ({ children }) => (
  <StyledCalloutAction>{children}</StyledCalloutAction>
);

CalloutAction.defaultProps = {
  children: undefined,
};

CalloutAction.propTypes = {
  children: PropTypes.node,
};
//#endregion

//#region CalloutMedia
const StyledCalloutMedia = styled.div`
  width: 30%;
  display: none;

  ${breakAt(BreakpointSizes.md)} {
    display: flex;
  }
  svg {
    color: ${(props) => props.theme.colors.primary.main};
    height: 100%;
    max-height: 200px;
    width: 100%;
  }
`;

export const CalloutMedia = ({ children }) => (
  <StyledCalloutMedia>{children}</StyledCalloutMedia>
);

CalloutMedia.defaultProps = {
  children: undefined,
};

CalloutMedia.propTypes = {
  children: PropTypes.node,
};
//#endregion

//#region Callout

const StyledCallout = styled.div`
  display: flex;
  background-color: #fff;
  border: 1px solid ${(props) => props.theme.colors.border};
  border-left: 3px solid ${(props) => props.theme.colors.primary.main};
  border-radius: 4px;
  padding: 16px;
`;

const Callout = ({ children }) => <StyledCallout>{children}</StyledCallout>;

Callout.defaultProps = {
  children: undefined,
};

Callout.propTypes = {
  children: PropTypes.node,
};

export default Callout;

//#endregion

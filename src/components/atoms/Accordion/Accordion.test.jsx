/* eslint-disable testing-library/prefer-presence-queries */
import React from "react";
import { render, screen, fireEvent } from "test-utils";
import Accordion from "./Accordion";

const title = "My title";
const text = "My children text";

it("renders with title", () => {
  render(<Accordion title={title}></Accordion>);
  expect(screen.getByText(title)).toBeInTheDocument();
});

it("renders without children", () => {
  render(<Accordion>{text}</Accordion>);
  expect(screen.queryByText(text)).not.toBeInTheDocument();
});

it("triggers onChange when it is clicked", async () => {
  const handleChange = jest.fn();
  render(<Accordion title={title} onChange={handleChange}></Accordion>);
  await fireEvent.click(screen.getByText(title));
  expect(handleChange).toBeCalledTimes(1);
});

describe("when is controled", () => {
  describe("when starts opened", () => {
    it("renders with children", () => {
      render(<Accordion open>{text}</Accordion>);
      expect(screen.queryByText(text)).toBeInTheDocument();
    });

    it("triggers onChange when it is clicked", async () => {
      const handleChange = jest.fn();
      render(<Accordion title={title} onChange={handleChange} open />);

      await fireEvent.click(screen.getByText(title));
      expect(handleChange).toBeCalledTimes(1);
    });

    it("hide children when open changes to false", () => {
      const { rerender } = render(<Accordion open>{text}</Accordion>);

      rerender(<Accordion open={false}>{text}</Accordion>);

      expect(screen.queryByText(text)).not.toBeInTheDocument();
    });

    it("call default function when it is clicked", async () => {
      render(<Accordion title={title} open />);

      await fireEvent.click(screen.getByText(title));
    });
  });
  describe("when starts closed", () => {
    it("renders with children", () => {
      render(<Accordion open={false}>{text}</Accordion>);
      expect(screen.queryByText(text)).not.toBeInTheDocument();
    });
  });
});

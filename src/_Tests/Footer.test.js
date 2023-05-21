import { screen, render } from "@testing-library/react";
import Footer from "../components/Footer";

describe("Footer Component", () => {
    it("Checking whether text is present", () => {
      render(<Footer/>);
      const element = screen.getByText(/All Rights Reserved./);
      expect(element).toBeInTheDocument;
    });
  });
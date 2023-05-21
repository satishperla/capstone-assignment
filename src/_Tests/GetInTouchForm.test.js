import GetInTouchForm from "../components/GetInTouchForm";
import { screen, render } from "@testing-library/react";
describe("Get In TouchComponent", () => {
    it("Checking whether text is present", () => {
      render(<GetInTouchForm/>);
      const element = screen.getByText(/Get In Touch/);
      expect(element).toBeInTheDocument;
    });
  });
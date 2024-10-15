import { Menu } from "../menu/Menu";
import { StyledLayout } from "./Layout.styles";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <StyledLayout>
      <main>{children}</main>
      <Menu />
    </StyledLayout>
  );
};
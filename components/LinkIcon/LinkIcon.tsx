import { ReactNode } from "react";
import { LinkIconLink } from "./LinkIconStyles";

interface LinkIconProps {
  children: ReactNode;
  href: string;
}

const LinkIcon = ({ children, href }: LinkIconProps) => {
  return (
    <LinkIconLink href={href} rel="noopener noreferrer" target="_blank">
      {children}
    </LinkIconLink>
  );
};

export default LinkIcon;

import { ReactNode } from "react";
import { LinkIconLink } from "./LinkIconStyles";

interface LinkIconProps {
  children: ReactNode;
  href: string;
  download?: boolean;
}

const LinkIcon = ({ children, href, download }: LinkIconProps) => {
  return (
    <LinkIconLink href={href} rel="noopener noreferrer" target="_blank" download={!!download}>
      {children}
    </LinkIconLink>
  );
};

export default LinkIcon;

import React, { ReactNode } from 'react';
import NextLink, { LinkProps } from 'next/link';
interface Props extends LinkProps {
  children: ReactNode;
  className?: string;
}
function Link({ href, className, children, ...props }: Props) {
  return (
    <NextLink href={href} {...props}>
      <a className={className}>{children}</a>
    </NextLink>
  );
}

export default Link;

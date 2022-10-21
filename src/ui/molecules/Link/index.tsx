import React, { ReactNode } from 'react';
import NextLink, { LinkProps } from 'next/link';
import { Text } from '../../atoms/text';
interface Props extends LinkProps {
  children: ReactNode;
  className?: string;
}
function Link({ href, className, children, ...props }: Props) {
  return (
    <NextLink href={href} {...props}>
      <Text as="a" color="accent" hover="accent50" className={className}>
        {children}
      </Text>
    </NextLink>
  );
}

export default Link;

import React, { useState, ReactNode } from 'react';
import Link, { LinkProps } from 'next/link';
import { HeaderStyled, Logo, NavBar, Harmburger } from './style';
import { TimesIcon, BarIcon } from '../../icons';

interface LinkProps2 extends LinkProps {
  children: ReactNode;
}
function CustomLink({ children, href, ...props }: LinkProps2) {
  return (
    <div className={true ? 'active-link link' : 'link'}>
      <Link href={href} {...props}>
        {children}
      </Link>
      <div className="underline"></div>
    </div>
  );
}

function Header() {
  const [openMobileDrawer, setOpenMobileDrawer] = useState(false);

  return (
    <HeaderStyled>
      <Link href="/">
        <Logo>{`<I_AM_IDRIS/>`}</Logo>
      </Link>

      <Harmburger onClick={() => setOpenMobileDrawer(!openMobileDrawer)}>
        {openMobileDrawer ? <TimesIcon /> : <BarIcon />}
      </Harmburger>
      <NavBar open={openMobileDrawer}>
        <CustomLink href="/">Home</CustomLink>
        <CustomLink href="/about">About</CustomLink>
      </NavBar>
    </HeaderStyled>
  );
}

export default Header;

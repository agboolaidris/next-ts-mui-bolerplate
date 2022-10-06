import React, { useState, ReactNode } from 'react';
import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';
import { HeaderStyled, Logo, NavBar, Harmburger, ModeWrapper } from './style';
import { TimesIcon, BarIcon } from '../../icons';
import LightModeIcon from '@mui/icons-material/LightMode';
import { useGlobalDispatch } from '../../../store';
import { MODETYPE } from '../../../store/reducers/mode';

interface LinkProps2 extends LinkProps {
  children: ReactNode;
}
function CustomLink({ children, href, ...props }: LinkProps2) {
  const router = useRouter();
  return (
    <>
      {router.pathname !== href && !router.pathname.includes(`${href}/`) ? (
        <div className={router.pathname === href ? 'active-link link' : 'link'}>
          <Link href={href} {...props}>
            {children}
          </Link>
          <div className="underline"></div>
        </div>
      ) : null}
    </>
  );
}

function Header() {
  const [openMobileDrawer, setOpenMobileDrawer] = useState(false);
  const dispatch = useGlobalDispatch();
  const handleChangeThemeMode = () => {
    dispatch({ type: MODETYPE.CHANGE, payload: { mode: '' } });
  };

  return (
    <HeaderStyled>
      <Link href="/">
        <Logo>AI</Logo>
      </Link>
      <Harmburger onClick={() => setOpenMobileDrawer(!openMobileDrawer)}>
        {openMobileDrawer ? <TimesIcon /> : <BarIcon />}
      </Harmburger>
      <NavBar open={openMobileDrawer}>
        <CustomLink href="/">Home</CustomLink>
        <CustomLink href="/about">About</CustomLink>
        <CustomLink href="/blogs">Blog</CustomLink>
        <CustomLink href="/resume">Resumé</CustomLink>
        <CustomLink href="/contact">Contact</CustomLink>
        <ModeWrapper onClick={handleChangeThemeMode}>
          <LightModeIcon fontSize="inherit" />
        </ModeWrapper>
      </NavBar>
    </HeaderStyled>
  );
}

export default Header;

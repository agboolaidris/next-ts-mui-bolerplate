import React, { useState, ReactNode } from 'react';
import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';
import { HeaderStyled, Logo, NavBar, Harmburger, ModeWrapper } from './style';
import { TimesIcon, BarIcon } from '../../icons';
import LightModeIcon from '@mui/icons-material/LightMode';
import { useGlobalDispatch } from '../../../store';
import { MODETYPE } from '../../../store/reducers/mode';
import { InavItem } from '../../../interface/nav';
import { Text } from '../../atoms/text';

interface LinkProps2 extends LinkProps {
  children: ReactNode;
}

function CustomLink({ children, href, ...props }: LinkProps2) {
  const router = useRouter();
  return (
    <div className={router.pathname === href ? 'active-link link' : 'link'}>
      <Link href={href} {...props}>
        <Text as="a" color="white" hover="danger">
          {children}
        </Text>
      </Link>
      <div className="underline"></div>
    </div>
  );
}

interface Iheader {
  items: InavItem[];
}
function Header({ items }: Iheader) {
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
        {items.map((item) => (
          <CustomLink href={item.href} key={item.href}>
            {item.title}
          </CustomLink>
        ))}

        <ModeWrapper onClick={handleChangeThemeMode}>
          <LightModeIcon fontSize="inherit" />
        </ModeWrapper>
      </NavBar>
    </HeaderStyled>
  );
}

export default Header;

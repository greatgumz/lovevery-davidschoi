import { useState } from 'react';
import { headerLinks } from '@/utils/constants';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

const HeaderStyles = styled.header`
  background: #fff;
  display: grid;
  grid-template-columns: 40% 20% 40%;
  justify-content: space-between;
  align-items: center;
  height: var(--header-height);
  padding: 10px 40px 10px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 100;

  .navbar-left {
    align-items: flex-start;
  }

  .navbar-center {
    justify-self: center;
  }

  .navbar-right {
    justify-self: flex-end;
  }

  @media (max-width: 960px) {
    height: var(--header-height-mobile);

    .navbar-left,
    .navbar-right {
      display: none;
    }

    .mobile-toggle {
      display: block;
    }
  }
`;

const ListStyles = styled.ul`
  display: flex;
  align-items: center;

  li {
    padding-left: 30px;

    &:first-child {
      padding-left: 0;
    }
  }
`;

const CartWrapperStyles = styled.div`
  display: flex;
  align-items: center;
`;

const CartCounterStyles = styled.div`
  border: 1px solid var(--border-color);
  height: 38px;
  width: 38px;
  line-height: 38px;
  margin-left: 10px;
  vertical-align: middle;
  text-align: center;
  border-radius: 50%;
`;

const HamburgerIconStyles = styled.div`
  display: none;
  align-items: center;
  background-color: #fff;
  cursor: pointer;

  .line-wrapper {
    width: 26px;

    .line {
      margin-bottom: 9px;
      height: 1px;
      background-color: var(--colors-primary);
    }
  }

  @media (max-width: 960px) {
    display: flex;
  }
`;

const MobileNavStyles = styled.div`
  display: none;

  @media (max-width: 960px) {
    display: block;
    background-color: var(--colors-primary);
    color: #fff;
    position: fixed;
    width: 100%;
    top: var(--header-height-mobile);
    left: 0;

    a:hover {
      color: #fff;
    }

    li {
      font-size: 24px;
      padding: 20px;
    }

    ${CartCounterStyles} {
      border-color: #fff;
    }
  }
`;

export default function Header() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const renderCart = () => {
    return (
      <CartWrapperStyles>
        Cart <CartCounterStyles>0</CartCounterStyles>
      </CartWrapperStyles>
    );
  };

  return (
    <HeaderStyles>
      <HamburgerIconStyles onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}>
        <div className="line-wrapper">
          <div className="line line1"></div>
          <div className="line line2"></div>
          <div className="line line3"></div>
        </div>
      </HamburgerIconStyles>
      {isMobileNavOpen && (
        <MobileNavStyles>
          <ul>
            {headerLinks.map((link) => (
              <li key={link.name}>
                <Link href={link.href}>{link.id === 'cart' ? renderCart() : link.name}</Link>
              </li>
            ))}
          </ul>
        </MobileNavStyles>
      )}
      <nav className="navbar-left">
        <ListStyles>
          {headerLinks.slice(0, 2).map((link) => (
            <li key={link.name}>
              <Link href={link.href}>{link.name}</Link>
            </li>
          ))}
        </ListStyles>
      </nav>
      <div className="navbar-center">
        <Link href="/">
          <Image src="/lovevery-logo.svg" width={167} height={18} alt="Lovevery logo" />
        </Link>
      </div>
      <nav className="navbar-right">
        <ListStyles>
          {headerLinks.slice(2, 4).map((link) => (
            <li key={link.name}>
              <Link href={link.href}>{link.id === 'cart' ? renderCart() : link.name}</Link>
            </li>
          ))}
        </ListStyles>
      </nav>
    </HeaderStyles>
  );
}

'use client';

import Link from 'next/link';
import styled from 'styled-components';

const CartStyles = styled.div`
  height: 65vh;
  text-align: center;
  padding-top: 10rem;

  h1 {
    font-size: 42px;
    line-height: 56px;
    margin-bottom: 20px;
  }

  p {
    margin-bottom: 30px;
  }

  a {
    color: var(--colors-link-hover);
    border-bottom: 2px solid;
    font-size: 14px;
  }
`;

export default function Cart() {
  return (
    <CartStyles>
      <h1>Shopping Cart</h1>
      <p>Your cart is currently empty.</p>
      <Link href="/">Back to Shopping</Link>
    </CartStyles>
  );
}

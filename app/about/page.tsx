'use client';

import Link from 'next/link';
import styled from 'styled-components';

const AboutStyles = styled.div`
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

export default function About() {
  return (
    <AboutStyles>
      <h1>About</h1>
      <p>This is about Lovevery</p>
      <Link href="/">Back to Shopping</Link>
    </AboutStyles>
  );
}

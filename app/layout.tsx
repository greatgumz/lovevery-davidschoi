'use client';

import Header from '@/components/header';
import './globals.css';
import localFont from 'next/font/local';
import styled from 'styled-components';
import Footer from '@/components/footer';
import { UserContextProvider } from '@/context/UserContext';

export const brownPro = localFont({
  src: [
    { path: '../public/fonts/BrownPro-Regular.woff', weight: '400', style: 'normal' },
    { path: '../public/fonts/BrownPro-Bold.woff', weight: '700', style: 'normal' },
  ],
});

const Container = styled.main`
  min-width: 0;
  margin: var(--header-height) auto 0;
  max-width: var(--container-width);
  padding: 0 40px;

  @media (max-width: 960px) {
    margin-top: var(--header-height-mobile);
  }
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={brownPro.className}>
        <UserContextProvider>
          <Header />
          <Container>{children}</Container>
          <Footer />
        </UserContextProvider>
      </body>
    </html>
  );
}

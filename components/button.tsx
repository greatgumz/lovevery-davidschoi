'use client';

import styled, { css } from 'styled-components';
import { brownPro } from '@/app/layout';
import Link from 'next/link';

const commonStyles = css`
  background-color: var(--colors-primary);
  color: #fff;
  border: 0;
  cursor: pointer;
  padding: 16px;
  border-radius: 4px;
  width: fit-content;
  font-size: 18px;
  max-height: 60px;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: var(--colors-primary-hover);
    color: #fff;
  }
`;

const ButtonStyles = styled.button<{ width?: number }>`
  ${commonStyles};
  ${({ width }) => width && `width: ${width}px`};
`;

const LinkStyles = styled(Link)<{ width?: number }>`
  ${commonStyles};
  ${({ width }) => width && `width: ${width}px`};
`;

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  width?: number;
  href?: string;
}

export default function Button({ children, href, ...props }: ButtonProps) {
  return href ? (
    <LinkStyles href={href} className={brownPro.className} {...props}>
      {children}
    </LinkStyles>
  ) : (
    <ButtonStyles className={brownPro.className} {...props}>
      {children}
    </ButtonStyles>
  );
}

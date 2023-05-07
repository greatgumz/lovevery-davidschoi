import { footerLinks } from '@/utils/constants';
import Link from 'next/link';
import styled from 'styled-components';

const FooterStyles = styled.footer`
  background-color: #f5f7fc;
  padding: 64px 24px 32px;
  font-size: 14px;

  .footer-wrapper {
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    row-gap: 0;
    justify-content: space-between;
    grid-template-columns: repeat(6, 1fr);
    grid-template-areas: 'learn products gifting help podcast app';

    @media (max-width: 960px) and (min-width: 601px) {
      grid-template-columns: repeat(3, 1fr);
      grid-template-areas:
        'learn products gifting'
        'help podcast app';
    }

    @media (max-width: 600px) {
      grid-template-columns: 100%;
      grid-template-areas:
        'learn'
        'products'
        'gifting'
        'help'
        'podcast'
        'app';
    }
  }

  .footer-column {
    padding-left: 1em;
    margin-bottom: 1.5rem;

    &.learn {
      grid-area: learn;
    }

    &.products {
      grid-area: products;
    }

    &.gifting {
      grid-area: gifting;
    }

    &.help {
      grid-area: help;
    }

    &.podcast {
      grid-area: podcast;
    }

    &.app {
      grid-area: app;
    }

    h3 {
      font-size: 16px;
      line-height: 1.5;
      margin-bottom: 0.5rem;
    }

    li {
      padding-bottom: 8px;

      a {
        color: var(--colors-link-hover);
      }
    }
  }
`;

export default function Footer() {
  return (
    <FooterStyles>
      <div className="footer-wrapper">
        {footerLinks.map((column) => (
          <div className={`footer-column ${column.id}`} key={column.id}>
            <h3>{column.header}</h3>
            <ul>
              {column.links.map((link) => (
                <li key={link.text}>
                  <Link href={link.href} passHref>
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </FooterStyles>
  );
}

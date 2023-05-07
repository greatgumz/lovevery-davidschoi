import Link from 'next/link';
import styled from 'styled-components';

const BreadcrumbStyles = styled.ul`
  padding-top: 40px;
  display: flex;
  font-size: 14px;

  li {
    padding: 0 6px;

    &:first-child {
      padding-left: 0;
    }

    &.caret {
      padding: 0;
      color: #aaa;
    }

    &.active {
      color: var(--colors-link-hover);
    }
  }
`;

export default function Breadcrumb({ slug, name }: { slug: string; name: string }) {
  return (
    <BreadcrumbStyles>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li className="caret">&gt;</li>
      <li>
        <Link href="/products">Play Kits</Link>
      </li>
      <li className="caret">&gt;</li>
      <li className="active">
        <Link href={slug}>{name}</Link>
      </li>
    </BreadcrumbStyles>
  );
}

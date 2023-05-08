'use client';

import { useState, useContext, useEffect } from 'react';
import { UserContext } from '@/context/UserContext';
import styled from 'styled-components';
import { playKits } from '@/utils/constants';
import Image from 'next/image';
import Link from 'next/link';
import { getRecommendedPlayKitByBirthday } from '@/utils/helper';

const ProductsStyles = styled.div`
  .overview {
    text-align: center;
    margin-bottom: 40px;

    h2 {
      font-size: 42px;
      line-height: 56px;
      margin-bottom: 25px;
    }

    p {
      font-size: 20px;
    }
  }
`;

const ProductsGridStyles = styled.section`
  display: grid;
  margin: 60px 0 100px;
  gap: 40px 30px;
  grid-template-columns: repeat(3, 1fr);

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
    padding: 0 20px;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }

  img {
    height: auto;
    width: 100%;
  }
`;

const ProductStyles = styled.div<{ $isRecommended?: boolean }>`
  padding: 5px;
  position: relative;
  border-radius: 10px;
  border: 4px solid transparent;
  border-color: ${({ $isRecommended }) => ($isRecommended ? 'var(--border-color)' : 'transparent')};

  &:hover {
    color: var(--colors-text);
  }

  img {
    margin-bottom: 5px;
  }

  h3 {
    font-size: 24px;
    line-height: 1.5;
  }

  p {
    font-size: 20px;
    line-height: 1.5;
  }
`;

const PillStyles = styled.div`
  background-color: var(--colors-primary);
  color: #fff;
  font-size: 14px;
  line-height: 20px;
  height: 25px;
  width: 120px;
  border-radius: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 15px;
  left: 15px;
`;

export default function Products() {
  const [recommended, setRecommended] = useState('');
  const { user } = useContext(UserContext);

  useEffect(() => {
    const playKit = getRecommendedPlayKitByBirthday(user.birthday);
    setRecommended(playKit);
  }, [user.birthday]);

  return (
    <ProductsStyles>
      <div className="overview">
        <h2>Explore The Play Kits</h2>
        <p>Discover why parents say these are the &quot;only toys you&apos;ll need.&quot;</p>
      </div>
      <ProductsGridStyles>
        {playKits.map((playKit) => {
          const isRecommended = recommended === playKit.slug;
          return (
            <ProductStyles key={playKit.slug} $isRecommended={isRecommended}>
              <Link href={`/products/${playKit.slug}`}>
                {isRecommended && <PillStyles>Recommended</PillStyles>}
                <Image src={playKit.productImage} alt={playKit.name} width={600} height={450} />
                <h3>{playKit.name}</h3>
                <p>{playKit.age}</p>
              </Link>
            </ProductStyles>
          );
        })}
      </ProductsGridStyles>
    </ProductsStyles>
  );
}

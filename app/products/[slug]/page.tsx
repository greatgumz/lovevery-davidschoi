'use client';

import styled from 'styled-components';
import Button from '@/components/button';
import ImageCarousel from '@/components/image-carousel';
import Stars from '@/components/stars';
import { PlayKit, playKits } from '@/utils/constants';
import Breadcrumb from '@/components/breadcrumb';
import { useContext } from 'react';
import { UserContext } from '@/context/UserContext';

const PlayKitStyles = styled.div`
  margin-bottom: 80px;

  h2 {
    font-size: 28px;
    line-height: 1.5;
    margin-bottom: 20px;
  }

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 20px;

    @media (max-width: 600px) {
      flex-direction: column;
      height: auto;
      align-items: flex-start;
    }

    h3 {
      font-size: 20px;
      line-height: 1.5;
      font-weight: 400;
    }
  }

  .description {
    margin: 20px 0;
    border-top: 1px solid #ccc;

    p {
      margin-top: 20px;
    }

    ul {
      margin-top: 20px;
    }

    li {
      list-style-type: none;
      background-image: url('/icons/icon-checkmark.png');
      background-repeat: no-repeat;
      background-position-y: 25%;
      line-height: 30px;
      padding-left: 45px;
      padding-bottom: 4px;
    }
  }
`;

const DividerStyles = styled.div`
  width: 1px;
  height: 100%;
  background-color: #ccc;
  margin: 0 10px;

  @media (max-width: 600px) {
    display: none;
  }
`;

const ProductWrapperStyles = styled.div`
  margin-top: 40px;

  @media (min-width: 960px) {
    display: flex;

    .image-carousel-wrapper {
      width: 524px;
      margin-right: 40px;
    }
  }
`;

export default function PlayKit({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const selectedPlayKit = playKits.find((playKit) => playKit.slug === slug);
  const { name, age, description, images, reviews } = selectedPlayKit as PlayKit;
  const { user } = useContext(UserContext);

  return (
    <PlayKitStyles>
      <Breadcrumb slug={slug} name={name} />
      <ProductWrapperStyles>
        <div className="image-carousel-wrapper">
          <ImageCarousel images={images} />
        </div>
        <div>
          <h2>{name}</h2>
          <div className="header">
            <h3>{age}</h3>
            <DividerStyles />
            <Stars rating={reviews.rating} />
            <DividerStyles />
            <p>{reviews.count} Reviews</p>
          </div>
          <div className="description">
            <p>{description.header}</p>
            <ul>
              {description.children.map((descriptionItem: string) => (
                <li key={descriptionItem}>{descriptionItem}</li>
              ))}
            </ul>
            <p>{description.footer}</p>
          </div>
          <Button href="/products" width={300}>
            Get Started with {user.name}
          </Button>
        </div>
      </ProductWrapperStyles>
    </PlayKitStyles>
  );
}

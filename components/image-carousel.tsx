'use client';

import Image from 'next/image';
import { useState, SetStateAction } from 'react';

import styled from 'styled-components';

const CarouselContainerStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ActiveImageStyles = styled.div`
  img {
    width: 100%;
    height: auto;
    object-fit: contain;
  }
`;

const ThumbnailContainerStyles = styled.div`
  display: grid;
  margin: 20px 0;
  gap: 10px;
  grid-template-columns: 32px 80px 80px 80px 80px 80px 32px;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;

  @media (max-width: 600px) {
    grid-template-columns: 40px 40px 40px 40px 40px;
    padding: 0 10px;
  }
`;

const ThumbnailStyles = styled.div`
  img {
    width: 100%;
    height: 80px;
    object-fit: cover;
    cursor: pointer;
    border: 3px solid transparent;
    border-radius: 3px;

    &.active {
      border-color: var(--border-color);
    }

    @media (max-width: 600px) {
      border-radius: 50%;
      height: 40px;
      width: 40px;
    }
  }
`;

const ButtonStyles = styled.button`
  cursor: pointer;
  border: 0;
  height: 32px;
  width: 32px;
  border-radius: 50%;

  @media (max-width: 600px) {
    display: none;
  }
`;

interface ImageCarouselProps {
  images: string[];
}

export default function ImageCarousel({ images }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleThumbnailClick = (index: SetStateAction<number>) => {
    setCurrentIndex(index);
  };

  return (
    <CarouselContainerStyles>
      <ActiveImageStyles>
        <Image src={images[currentIndex]} height={452} width={668} alt={`Image ${currentIndex}`} />
      </ActiveImageStyles>
      <ThumbnailContainerStyles>
        <ButtonStyles onClick={() => setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1)}>
          <Image src="/icons/icon-carousel-left.svg" height={32} width={32} alt="Previous" />
        </ButtonStyles>
        {images.map((image, index) => (
          <ThumbnailStyles key={index}>
            <Image
              src={image}
              alt={`Carousel image ${index + 1}`}
              className={currentIndex === index ? 'active' : ''}
              height={452}
              width={668}
              onClick={() => handleThumbnailClick(index)}
            />
          </ThumbnailStyles>
        ))}
        <ButtonStyles onClick={() => setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1)}>
          <Image src="/icons/icon-carousel-right.svg" height={32} width={32} alt="Next" />
        </ButtonStyles>
      </ThumbnailContainerStyles>
    </CarouselContainerStyles>
  );
}

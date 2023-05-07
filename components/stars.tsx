import styled from 'styled-components';

const StarStyles = styled.span`
  color: var(--stars-color);
  font-size: 24px;
`;

export default function Stars({ rating }: { rating: number }) {
  const MAX_STARS = 5;
  const filledStars = Math.floor(rating);
  const emptyStars = MAX_STARS - filledStars;

  return (
    <div>
      {Array.from({ length: filledStars }).map((_, index) => (
        <StarStyles key={index}>&#9733;</StarStyles>
      ))}
      {Array.from({ length: emptyStars }).map((_, index) => (
        <StarStyles key={index}>&#9734;</StarStyles>
      ))}
    </div>
  );
}

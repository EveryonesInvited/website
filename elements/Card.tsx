// // ─────────────────────────────────────────────────────────────────────────────
// // import
// // ─────────────────────────────────────────────────────────────────────────────

// import React from 'react';
// import styled from 'styled-components';

// // ─────────────────────────────────────────────────────────────────────────────
// // component
// // ─────────────────────────────────────────────────────────────────────────────

// Card.Wrapper = styled.section`
//   background-color: rgba(var(--blue), 0.05);
//   box-shadow: inset 0 0 0 1px rgba(var(--blue), 0.05);
//   border-radius: 0.25rem;
//   overflow: hidden;
// `;

// Card.Image = styled.img`
//   height: ${({ height }) => height}px;
//   width: 100%;
//   background-color: rgba(var(--blue), 0.1);
// `;

// Card.Location = styled.h1`
//   margin: 0;
//   font-size: 1rem;

//   padding: 0.5rem 1rem 0;
// `;

// Card.Description = styled.p`
//   padding: 0 1rem 1rem;
// `;

// export default function Card({ Location, Testimony }) {
//   const height = Math.ceil((Math.random() * 200 + 100) / 10) * 10;

//   return (
//     <Card.Wrapper>
//       <Card.Image height={height} />
//       <Card.Location>{Location}</Card.Location>
//       <Card.Description>{Testimony}</Card.Description>
//     </Card.Wrapper>
//   );
// }

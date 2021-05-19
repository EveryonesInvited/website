// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import React from 'react';
import styled from 'styled-components';

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

Card.Wrapper = styled.section`
  margin: 0.5rem;
  background-color: rgba(var(--blue), 0.05);
  box-shadow: inset 0 0 0 1px rgba(var(--blue), 0.05);
  overflow: hidden;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

Card.Datum = styled.h1`
  margin: 1rem;
  font-size: 1rem;
  padding: 1rem;
`;

Card.Message = styled.p`
  margin: 1rem;
  padding: 0 1rem 1rem;
`;

export default function Card({ date, message }) {
  const height = Math.ceil((Math.random() * 200 + 100) / 10) * 10;

  return (
    <Card.Wrapper>
      <Card.Datum>{date}</Card.Datum>
      <Card.Message>{message}</Card.Message>
    </Card.Wrapper>
  );
}

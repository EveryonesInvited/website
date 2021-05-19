// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import React, { Children } from 'react';
import styled from 'styled-components';

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

Masonry.Wrapper = styled.ul`
  display: grid;
  grid-template-columns: repeat(${({ columns }) => columns}, 1fr);
  grid-gap: ${({ gridGap }) => gridGap};
`;

Masonry.Column = styled.li`
  grid-gap: ${({ gridGap }) => gridGap};
  grid-auto-rows: max-content;
`;

export default function Masonry({
  columns = 3,
  gridGap = '1rem',
  isProvideLi = true,
  children,
}) {
  // split children into N arrays for columns
  const output = Children.toArray(children).reduce((acc, child, i) => {
    acc[i % columns] = [
      ...acc[i % columns],
      isProvideLi ? <li key={child.key}>{child}</li> : child,
    ];
    return acc;
  }, new Array(columns).fill([]));

  return (
    <Masonry.Wrapper columns={columns} gridGap={gridGap}>
      {output.map((column, i) => (
        <Masonry.Column key={i} gridGap={gridGap}>
          {column}
        </Masonry.Column>
      ))}
    </Masonry.Wrapper>
  );
}

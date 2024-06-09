const maxWidthContainer = 1440;

export const adaptive = (property, startSize, minSize, type) => {
  const addSize = startSize - minSize;
  let styles = `
    ${property}: ${startSize}px;
  `;

  if (type === 1) {
    styles += `
      @media (max-width: ${maxWidthContainer}px) {
        ${property}: calc(${minSize}px + ${addSize} * ((100vw - 375px) / ${
      maxWidthContainer - 375
    }));
      }
    `;
  } else if (type === 2) {
    styles += `
      @media (min-width: ${maxWidthContainer}px) {
        ${property}: calc(${minSize}px + ${addSize} * ((100vw - 375px) / ${
      maxWidthContainer - 375
    }));
      }
    `;
  } else {
    styles += `
      ${property}: calc(${minSize}px + ${addSize} * ((100vw - 375px) / ${
      maxWidthContainer - 375
    }));
    `;
  }

  return styles;
};

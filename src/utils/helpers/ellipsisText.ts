export const ellipsisText = (text: string, maxLength: number) => {
  if (text.length > maxLength) {
    const truncatedText = text.slice(0, maxLength);
    const lastWordIndex = truncatedText.lastIndexOf(' ');
    return `${truncatedText.slice(0, lastWordIndex)}...`;
  }

  return text;
};

// Convert hex code to RGB values
export const hexToRgb = (hex) => {
  const r = parseInt(hex.substring(0,2), 16);
  const g = parseInt(hex.substring(2,4), 16);
  const b = parseInt(hex.substring(4,6), 16);
  return [r, g, b];
}

export const darkenColor = (color, amount = 1) => {
    const r = Math.round(parseInt(color.slice(1, 3), 16) * (1 - amount));
    const g = Math.round(parseInt(color.slice(3, 5), 16) * (1 - amount));
    const b = Math.round(parseInt(color.slice(5, 7), 16) * (1 - amount));
    return "#" + r.toString(16) + g.toString(16) + b.toString(16);
}
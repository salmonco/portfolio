export const truncateDescription = (text: string, maxLines: number = 3) => {
  const lines = text.split("\n").filter((line) => line.trim() !== "");
  if (lines.length <= maxLines) {
    return text;
  }
  return lines.slice(0, maxLines).join("\n") + "...";
};

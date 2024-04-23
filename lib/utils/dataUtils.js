export const stripHtml = (html) => {
  if (!html) return;

  let text = html.replace(/<[^>]*>/g, "");

  text = text.replace(/&gt;/g, ">");

  return text;
};

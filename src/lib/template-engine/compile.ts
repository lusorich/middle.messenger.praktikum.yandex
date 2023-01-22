export const compile = (template: string, data: Record<string, string>) => {
  return template.replace(/{{(.*?)}}/g, (match) => {
    return data[match.split(/{{|}}/).filter(Boolean)[0].trim()];
  });
};

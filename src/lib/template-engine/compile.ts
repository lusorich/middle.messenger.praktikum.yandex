export const compile = (
  template: string,
  data: Record<string, string>,
): string =>
  template.replace(
    /{{(.*?)}}/g,
    (match) => data[match.split(/{{|}}/).filter(Boolean)[0].trim()],
  );

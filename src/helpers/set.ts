import { Indexed } from './custom-utility-types';

const namespace = (str: string, value: string | number) =>
  str.split('.').reduceRight((acc, key) => {
    if (Object.keys(acc).length === 0) {
      return { [key]: value };
    }
    return { [key]: acc };
  }, {});

function merge(lhs: any, rhs: any): Indexed {
  for (let key in rhs) {
    if (lhs[key] && typeof rhs[key] === 'object') {
      lhs[key] = merge(lhs[key] as Indexed, rhs[key] as Indexed);
    } else {
      lhs[key] = rhs[key];
    }
  }

  return lhs;
}

export function set(
  object: Indexed | unknown,
  path: string,
  value: unknown,
): any {
  if (typeof path !== 'string') {
    throw new Error('path must be string');
  }

  if (typeof object !== 'object') {
    return object;
  }

  const newObj = namespace(path, value as string);
  const res = merge(object as any, newObj as any);

  return res;
}

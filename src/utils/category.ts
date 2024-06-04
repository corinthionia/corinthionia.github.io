import path from 'path';
import { sync } from 'glob';

const getContentsDir = (basePath: string) => path.join(process.cwd(), basePath);

export async function getAllCategories(contentsPath: string) {
  const paths: string[] = sync(`${getContentsDir(contentsPath)}/*`);

  const categories = paths.reduce((acc: any, path: string) => {
    const splitted = path.split('/');
    const category = splitted[splitted.length - 1];

    if (!category) return acc;

    return [...acc, category];
  }, []);

  return categories;
}

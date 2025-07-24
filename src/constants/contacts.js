import { join } from 'node:path';

export const PATH_DB = join(process.cwd(), 'src/db/db.json');

console.log(PATH_DB);

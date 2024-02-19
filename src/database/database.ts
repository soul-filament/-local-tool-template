import { SomeTableAPI } from './apis/api_tables';
import { SomeTable } from './schema';

//@ts-ignore
const DRIZZLE : any = window._db as any

export const DB = {
    someTable: new SomeTableAPI(DRIZZLE, SomeTable)
}

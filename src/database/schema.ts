import { text, integer, sqliteTable, foreignKey } from "drizzle-orm/sqlite-core";

export const SomeTable = sqliteTable('someTable', {
    id: text('id').notNull(),
    name: text('name').notNull(),
});

export type SomeTableElement = {
  id: string;
  name: string;
}
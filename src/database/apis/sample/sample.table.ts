import { DrizzleTableRecord, TableRecord } from "@/database/table_types";
import { text, sqliteTable } from "drizzle-orm/sqlite-core";

export const SampleTable = sqliteTable('sampleTable', DrizzleTableRecord({
    customValue: text('customValue')
}));

export type SampleTableElement = TableRecord<{
    customValue: string
}>

  
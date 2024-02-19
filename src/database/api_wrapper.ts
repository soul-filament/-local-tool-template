import { eq } from "drizzle-orm";
import { BetterSQLite3Database } from "drizzle-orm/better-sqlite3";
import { SQLiteTableWithColumns } from "drizzle-orm/sqlite-core";

export class APIWrapper {
    public constructor (
        protected db: BetterSQLite3Database<Record<string, never>>,
        protected table: SQLiteTableWithColumns<any>
    ) {}

    public async listAll() {
        return this.db.select().from(this.table)
    }

    public async getByID(id: string) {
        const result = await this.db
            .select()
            .from(this.table)
            .where(eq(this.table.id, id))
        return result[0]
    }
}

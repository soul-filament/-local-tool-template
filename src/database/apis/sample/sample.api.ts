import { eq } from "drizzle-orm";
import { SampleTable, SampleTableElement } from "./sample.table";
import { APIWrapper } from "@/database/api_wrapper";

export class SampleApi extends APIWrapper<SampleTableElement, typeof SampleTable> {

    public async customCommand(id: string) {
        return this.db.update(this.table)
            .set({customValue: 'new name'})
            .where(eq(this.table.id, id))
            .execute()
    }

}
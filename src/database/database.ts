import { Icon } from "@/components/icons"
import { SampleApi } from "./apis/sample/sample.api"
import { SampleTable } from "./apis/sample/sample.table"

//@ts-ignore
const DRIZZLE : any = window._db as any

export const DB = {
    sample: new SampleApi(DRIZZLE, SampleTable, 'sample', Icon.SPARKLE)
}
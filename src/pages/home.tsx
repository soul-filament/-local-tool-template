import { Header } from "@/components/header";
import { DB } from "@/database/database";
import { useListenTableItems } from "@/database/hooks";
import { Button } from "@tremor/react";

export function HomePage () {

    const customvalues = useListenTableItems('sample')

    if (!customvalues) return null

    return <>
        <Header title="Home" />
        <div>
            There are {customvalues.length} items in the database
        </div>
        <Button onClick={() => DB.sample.create({})}>Create new item</Button>
    </>
}
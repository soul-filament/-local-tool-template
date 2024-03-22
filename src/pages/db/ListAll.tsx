import { Header } from "@/components/header";
import { useListenTableItems } from "@/database/hooks";
import { DB } from "@/database/database";
import { DBTable } from "./DbTable";

interface DBListAllPageProps<T> {
    tableName: keyof typeof DB
    columns?: string[],
}

export function DBListAllPage<T> ({tableName, columns}: DBListAllPageProps<T>) {

    const items = useListenTableItems<T>(tableName)

    if (!items) return null

    return <>
        <Header title={`All entries in ${tableName}`} />
        <DBTable dbName={tableName} rows={items} columns={columns} />
    </>
}
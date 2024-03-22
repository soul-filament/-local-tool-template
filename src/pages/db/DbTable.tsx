import { CreateButton, DeleteButton } from "@/components/buttons";
import { LinkToId } from "@/components/link";
import { TableElm } from "@/components/table";
import { TimeDisplay } from "@/components/time-display";
import { DB } from "@/database/database";
import { useNavigate } from "react-router-dom";

export interface DatabaseTableProps <T> {
    dbName: keyof typeof DB,
    tableName?: string,
    columns?: string[],
    rows: T[]
}

export function DBTable<T> ({dbName, tableName, rows, columns}: DatabaseTableProps<T>) {
    
    const nav = useNavigate()
    const columnNames = columns || Object.keys(rows[0] as any || {})

    return (
        <TableElm
            actions={<div className="flex gap-4 pt-1">
                <CreateButton onClick={() => nav(`/table/${dbName}/new`)} />
                <DeleteButton onClick={() => DB[dbName].purge()} text="Purge" />
            </div>}
            title={tableName || `${dbName} Items`}
            columns={columnNames}
            rows={
                rows.map((row : any) => {
                    let data : any = {}
                    columnNames.forEach(col => {
                        data[col] = row[col]
                        if (row[col] && row[col].includes('::')) {
                            data[col] = LinkToId(row[col])
                        }
                    })
                    data = {
                        ...data,
                        "id": row.id,
                        'creationDate': <TimeDisplay time={row.creationDate} />,
                    }
                    return data
                })
            }
            onClick={(row) => nav(`/table/${dbName}/${row["id"]}`)}
        />
    )
}
import { DB } from "@/database/database"
import { DBListAllPage } from "./ListAll"
import { DBCreatePage } from "./Create"
import { DBViewItemProps } from "./ViewItem"

export const READONLY = ['id', 'modifiedDate', 'creationDate', 'version']

export function generateRoutingForDB () {
    let results : any[] = []
    Object.keys(DB).map((key: any) => {
        const apiSpec = DB[key as keyof typeof DB].table
        const columns = Object.keys(apiSpec)
        const editableColumns = columns
            .filter((key) => ['id', 'modifiedDate', 'creationDate', 'version'].indexOf(key) === -1) // remove these columns
        results = results.concat([
            {
                path: `/table/${key}`,
                element: <DBListAllPage tableName={key} columns={['id', ... editableColumns, 'creationDate']}/>,
            },
            {
                path: `/table/${key}/new`,
                element: <DBCreatePage tableName={key} columns={editableColumns} />,
            },
            {
                path: `/table/${key}/:id`,
                element: <DBViewItemProps tableName={key} columns={columns} />,
            },
        ])
    })

    return results
}
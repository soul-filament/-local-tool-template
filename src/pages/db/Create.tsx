import { Header } from "@/components/header";
import { useListenTableItems } from "@/database/hooks";
import { DB } from "@/database/database";
import { DBTable } from "./DbTable";
import { useState } from "react";
import { Button, TextInput } from "@tremor/react";
import { useNavigate } from "react-router-dom";
import { Label } from "@/components/key-value";

interface DBCreatePageProps<T> {
    tableName: keyof typeof DB
    columns: string[]
}

export function DBCreatePage<T> ({tableName, columns}: DBCreatePageProps<T>) {

    const nav = useNavigate()
    const [partialItem, setPartialItem] = useState<Partial<T>>({})

    const updateItem = (key: string, value: string) => {
        setPartialItem({
            ...partialItem,
            [key]: value
        })
    }

    const createItem = () => {
        DB[tableName]
            .create(partialItem as any)
            .then(i => nav(`/table/${tableName}/${i.id}`))
    }

    return <>
        <Header title={`Create entry in ${tableName}`} />
        {
            columns.map((col) => <div key={col} >
                    <Label label={col} />
                    <TextInput 
                        className="mb-2" 
                        placeholder={col} 
                        value={(partialItem as any)[col] || ''} 
                        onValueChange={(val) => updateItem(col, val)}
                    />
                </div>
            )
        }
        <div className="flex justify-end">
            <Button className="text-right" onClick={createItem}>Create</Button>
        </div>
    </>
}
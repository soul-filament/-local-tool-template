import { Header } from "@/components/header";
import { useListenItem, useListenTableItems } from "@/database/hooks";
import { DB } from "@/database/database";
import { DBTable } from "./DbTable";
import { useState } from "react";
import { Button, TextInput } from "@tremor/react";
import { useNavigate, useParams } from "react-router-dom";
import { Label } from "@/components/key-value";
import { READONLY } from "./routing";

interface DBViewItemProps<T> {
    tableName: keyof typeof DB
    columns: string[]
}

export function DBViewItemProps<T> ({tableName, columns}: DBViewItemProps<T>) {

    const nav = useNavigate()
    const { id } = useParams()
    const api = DB[tableName]
    const row = useListenItem<T>(tableName, id)

    if (!id || !row) return null

    const updateItem = (key: string, value: string) => {
        api.update({
            id: id,
            [key]: value
        })
    }

    const onDelete = () => {
        api.delete(id)
        nav(`/table/${tableName}`)
    }

    return <>
        <Header title={`View entry in ${tableName}`} />
        {
            columns.map((col) => <div key={col} >
                    <Label label={col} />
                    <TextInput 
                        className={`mb-2 ${READONLY.indexOf(col) !== -1 ? 'bg-gray-200' : ''}`}
                        placeholder={col} 
                        readOnly={READONLY.indexOf(col) !== -1}
                        value={(row as any)[col] + "" || ''} 
                        onValueChange={(val) => updateItem(col, val)}
                    />
                </div>
            )
        }
        <div className="flex justify-end">
            <Button className="text-right" color="red" onClick={onDelete}>Delete</Button>
        </div>
    </>
}
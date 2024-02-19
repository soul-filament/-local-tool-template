import { Card } from "@tremor/react";
import { ReactNode } from "react";

export interface KeyValueComponentProps {
    label: string;
    value: ReactNode;
}

export function KeyValueComponent (props: KeyValueComponentProps) {
    return <div className="flex flex-row">
        <div className="text-left pr-2 p-1 text-gray-400" style={{flex: 1}}>{props.label}</div>
        <div className="text-left pl-2 p-1" style={{flex: 4}}>{props.value === null ? '-' : props.value}</div>
    </div>
}

export interface RenderObject {
    title?: string;
    object: {
        [key: string]: ReactNode
    }
}

export function ReactObject (props: RenderObject) {
    return <>
        <Card>
            {
                props.title ? <div className="text-2xl mb-5">{props.title}</div> : null
            }
            {
                Object.keys(props.object).map((key) => {
                    return <KeyValueComponent key={key} label={key} value={props.object[key]} />
                })
            }
        </Card>
    </>
}
import { ReactNode } from "react";
import { Card, TableHead, TableRow, TableHeaderCell, TableBody, TableCell, Badge, Table, Text, Subtitle, Metric, TextInput, Button, Title } from "@tremor/react";


export interface Table {
    title?: string;
    columns: string[];
    rows: {
        [key: string]: ReactNode;
    }[];
    onClick?: (row: any) => void;
}

export function TableElm({ columns, rows, onClick, title }: Table) {
    return <>
        <Card>
            {
                title ? <div className="text-2xl mb-5">{title}</div> : null
            }
            <Table>
                <TableHead className="border-b">
                    <TableRow>
                        {columns.map((column) => {
                            return <TableHeaderCell key={column}>{column}</TableHeaderCell>
                        })}
                    </TableRow>
                </TableHead>
                <TableBody className="space-y-2">
                    {
                        rows.map((location, i) => {
                            return <TableRow 
                                key={i}
                                onClick={() => onClick && onClick(location)}
                                className="cursor-pointer hover:bg-gray-100"
                            >
                                {columns.map((column) => {
                                    return <TableCell key={column}>{location[column]}</TableCell>
                                })}
                            </TableRow>
                        })
                    }   
                </TableBody>
            </Table>
        </Card>
    </>
}
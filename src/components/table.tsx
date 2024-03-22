import { ReactNode } from "react";
import { TableHead, TableRow, TableHeaderCell, TableBody, TableCell, Badge, Table, Text, Subtitle, Metric, TextInput, Button, Title } from "@tremor/react";
import { Card } from "./card";


export interface Table {
    title: string;
    columns: string[];
    actions?: ReactNode;
    rows: {
        [key: string]: ReactNode;
    }[];
    onClick?: (row: any) => void;
}

export function TableElm({ columns, rows, onClick, title, actions}: Table) {
    return <>
        <Card title={title} noPadding actions={actions}>
            <Table>
                <TableHead className="border-b border-r border-l">
                    <TableRow>
                        {columns.map((column) => {
                            return <TableHeaderCell 
                                    className="text-sm uppercase tracking-wider"
                                    key={column}
                                    children={column}
                                />
                        })}
                    </TableRow>
                </TableHead>
                <TableBody className="space-y-2 border bg-white">
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
                    {
                        rows.length === 0 && <TableRow>
                            <TableCell colSpan={columns.length} className="text-center">
                                <Subtitle>No rows</Subtitle>
                            </TableCell>
                        </TableRow>
                    }
                </TableBody>
            </Table>
        </Card>
    </>
}
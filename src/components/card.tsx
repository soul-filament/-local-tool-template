import { ReactNode } from "react";

export interface SectionCard {
    title: string;
    actions?: ReactNode;
    children: ReactNode
    noPadding?: boolean;
}

export function Card ({title, children, actions, noPadding}: SectionCard) {

    return (
        <div className="mb-4 bg-gray-50 rounded ">
            <div className="flex flex-row justify-between border rounded-t p-2 bg-gray-100 border-gray-200 capitalize">
                <h3>{title}</h3>
                <div>
                    {actions}
                </div>
            </div>
            <div className={`${noPadding ? '' : 'p-2'}`}>
                {children}
            </div>
        </div>
    )
} 
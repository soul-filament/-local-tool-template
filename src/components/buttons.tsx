import { Button } from "@tremor/react";

export interface IconButton {
    icon: React.ReactNode;
    color?: string;
    className?: string;
    onClick: (e:any) => void;
}

export function IconButton({ icon, onClick, className, color }: IconButton) {
    return <button onClick={onClick} className={`p-2 rounded-md hover:${color || 'bg-gray-200'} ${className}`}>
        {icon}
    </button>
}

export function DeleteButton ({ onClick, text }: { onClick: () => void, text?: string }) {
    return <Button variant='light' color='red' size="xs" onClick={onClick} children={text || 'Delete'} />
}

export function CreateButton ({ onClick, text }: { onClick: () => void, text?: string }) {
    return <Button variant='light' color='indigo' size="xs" onClick={onClick} children={text || 'Create'} />
}
import { ReactNode } from "react";

export function SideBar (children: { children: ReactNode }) {

    return <div className="flex flex-row w-full">
        <div className="h-[100vh] w-[200px] bg-gray-50 border-r-2 border-gray-200">
        </div>
        <div className="flex-1 p-4">
            {children.children}
        </div>
    </div>
}
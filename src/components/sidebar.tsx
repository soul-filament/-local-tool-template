import { ReactNode } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Home from 'remixicon-react/HomeLineIcon'
import Tool from 'remixicon-react/ToolsLineIcon'
import { ExchangeIcon, FileSettingsIcon, IconByType, RobotIcon, SparkleIcon } from "./icons";
import { DB } from "@/database/database";

function SidebarOption({ icon, title, path }: { icon: ReactNode, title: string, path: string }) {
    const active = window.location.pathname.startsWith(path);
    const navigate = useNavigate();
    return (
        <div 
            className={`capitalize flex items-center space-x-4 p-2 rounded cursor-pointer m-2 ${active ? "bg-black text-white" : "hover:bg-gray-200"}`}
            onClick={() => navigate(path)}
        >
            {icon}
            <p>{title}</p>
        </div>
    )
}

export function SideBar () {

    const tables = Object.keys(DB).map(key => {
        const api = (DB as any)[key]
        return {
            name: key,
            icon: api.table_icon,
            path: `/table/${key}`
        }
    })

    return <div className="flex flex-row w-full">
        <div className="h-[100vh] w-[200px] bg-gray-100 border-r-2 border-gray-200 overflow-y-hidden">
            <SidebarOption icon={<Home/>} title="Home" path="/home" />
            <div className="border-b-2 border-gray-200 my-4"/>
            {
                tables.map(table => <SidebarOption 
                    key={table.name} 
                    icon={IconByType(table.icon)} 
                    title={table.name} 
                    path={table.path} 
                />)
            }
        </div>
        <div className="flex-1 p-4 overflow-y-scroll h-[100vh]">
            <Outlet />
        </div>
    </div>
}
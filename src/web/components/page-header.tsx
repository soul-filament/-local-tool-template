import { Outlet } from "react-router-dom";

export function PageHeader () {
    return <div className="light bg-gray-100 h-full w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
            <Outlet/>
        </div>
    </div>
}
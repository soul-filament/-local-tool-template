import { Icon } from "@tremor/react";
import { useNavigate } from "react-router-dom";
import ArrowRight from 'remixicon-react/ArrowRightSLineIcon';

export function Header ({title}: { title: string }) {

    const nav = useNavigate()
    const currentPath = window.location.pathname;
    const pathItems = currentPath.split('/').filter(Boolean);

    const pathParts = []
    for (let i = 0; i < pathItems.length; i++) {
        if (i > 0) {
            pathParts.push(<Icon key={`icon-${i}`} icon={ArrowRight} className="text-gray-300" style={{ transform: 'translateY(-3px)'}} />)
        }
        const relativePath = pathItems.slice(0, i + 1).join('/');
        const prettyPath = pathItems[i].replace('%20', ' ')
        pathParts.push(<a key={i} onClick={() => nav(`/${relativePath}`)} className="hover:text-indigo-500 hover:text-blue-500 capitalize cursor-pointer">{prettyPath}</a>)
    }

    return <>
        <h1 className="text-2xl mb-4 capitalize" children={title} />
        <div className={`flex mb-2 ${pathItems.length <= 1 && 'hidden'}`} children={pathParts} />
    </>

}
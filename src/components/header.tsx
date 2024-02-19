import { Icon } from "@tremor/react";
import ArrowRight from 'remixicon-react/ArrowRightSLineIcon';

export function Header ({title}: { title: string }) {

    const currentPath = window.location.pathname;
    const pathItems = currentPath.split('/').filter(Boolean);

    const pathParts = []
    for (let i = 0; i < pathItems.length; i++) {
        if (i > 0) {
            pathParts.push(<Icon key={`icon-${i}`} icon={ArrowRight} className="text-gray-300" style={{ transform: 'translateY(-3px)'}} />)
        }
        const relativePath = pathItems.slice(0, i + 1).join('/');
        pathParts.push(<a key={i} href={`/${relativePath}`} className="hover:underline hover:text-blue-500">{pathItems[i]}</a>)
    }

    return <>
        <h1 className="text-2xl mb-2" children={title} />
        <div className="flex gap-1 mb-2" children={pathParts} />
    </>

}
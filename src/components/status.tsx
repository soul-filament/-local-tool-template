export enum Status {
    'Pending' = 'pending',
    'Success' = 'complete',
    'Error' = 'error'
}

export function StatusPill ({ status }: { status: string }) {

    if (status === Status.Pending) {
        return <div className="rounded-full uppercase px-3 py-1 w-fit bg-gray-200 text-xs tracking-widest">
            {status}
        </div>
    }

    if (status === Status.Success) {
        return <div className="rounded-full uppercase px-3 py-1 w-fit bg-indigo-100 text-xs tracking-widest">
            {status}
        </div>
    }   

    if (status === Status.Error) {
        return <div className="rounded-full uppercase px-3 py-1 w-fit bg-red-200 text-xs tracking-widest">
            {status}
        </div>
    }
    
    return <div className="rounded-full uppercase px-3 py-1 w-fit bg-red-200 text-xs tracking-widest">
        Unknown: {status}
    </div>
}

export function BooleanPill ({ value }: { value: any }) {
    return <div className={`rounded-full uppercase px-3 py-1 w-fit ${value ? 'bg-indigo-100' : ''} text-xs tracking-widest`}>
        {value ? 'Yes' : '-'}
    </div>
}
import { FC, createContext, useEffect, useState } from "react";
import { Spinner } from "../components/misc";

export const WebsocketContext = createContext<DataConnectionState>(undefined as any);

interface DataConnectionProps {
    children: React.ReactNode;
}

export interface DataConnectionState {
    send: (message: any, data?: any) => void;
}

export const DataConnection: FC<DataConnectionProps> = ({ children }) => {

    // create a ws connection
    const [webSocket, setWebSocket] = useState<WebSocket>();
    const [connected, setConnected] = useState<boolean>(false);

    // Tie into the data objects
    // ...

    // handle incoming messages 
    const onMessageReceived : {[key: string]: (data: any) => void} = {
        ['ServerAction.provide']: (data) => {
            ///...
        },
    }

    // create a ws connection
    useEffect(() => {
        let websocket = new WebSocket("ws://localhost:8080/ws");
        setWebSocket(websocket);

        websocket.addEventListener("open", () => {
            setConnected(true);
            websocket.addEventListener("message", e => {
                const message = JSON.parse(e.data.toString());
                onMessageReceived[message.action](message.data);
            })
        })

        return () => websocket.close();
    }, []);

    // create data connection object
    const dataConnection: DataConnectionState = {
        send: (message: string, data: any = {}) => {
            if (webSocket) {
                webSocket.send(JSON.stringify({
                    message,
                    data
                }));
            }
        }
    };

    if (!connected) {
        return <Spinner/>
    }

    return (
        <WebsocketContext.Provider value={dataConnection}>
            {children}
        </WebsocketContext.Provider>
    )
}
    
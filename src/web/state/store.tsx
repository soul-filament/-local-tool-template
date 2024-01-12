import { create } from 'zustand'
import { useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { WebsocketContext } from './data-connection';
import { ServerAction } from './store';
export { ServerAction } from '../../api/actions'

export function useWebsocket () {
    useNavigate();
    return useContext(WebsocketContext);
}

const myStore = create((set) => ({
  bears: 0,
  increasePopulation: () => set((state: any) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
}))

import React, {createContext} from "react";
import {RootStoreType, RootStore, IRootStore} from './root';

type StoreProvideType = {
    children: React.ReactNode;
    store?: IRootStore
}

export const StoreContext = createContext<RootStoreType>({} as any);

export const StoreProvider: React.FC<StoreProvideType> = ({children, store}: any) => (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
);

import {useContext} from 'react';
import {StoreContext} from '../store/provider';
import {IRootStore} from "../store/root";

export const useStore = (): IRootStore => {
    const store = <IRootStore>useContext(StoreContext);

    console.log('------ START -----');
    console.log('use-store.ts; line: 9');
    console.log({store});
    console.log('------- END -------');

    return store;
}

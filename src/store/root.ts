import {observable, action} from 'mobx'

export type TodoItemProps = {
    id: number;
    name: string;
    isChecked: boolean;
}

export type RootStoreType = {
    items: TodoItemProps[];
}

export interface IRootStore {
    items: TodoItemProps[];
    setChecked: (itemId: number, status: boolean) => void;
    add: (props: any) => void;
}

export class RootStore implements IRootStore {
    @observable
    items: TodoItemProps[];

    constructor({items = []}: RootStoreType) {
        this.items = items as TodoItemProps[];
    }

    add(elem: any) {
        this.items.push({
            ...elem,
            id: this.items.length,
            isChecked: false
        })
    }

    // @action
    setChecked(itemId: number, status: boolean) {
        const elem: TodoItemProps | undefined = this.items.find(({id}) => id == itemId);
        console.log('------ START -----');
        console.log('root.ts; line: 24');
        console.log({elem});
        console.log('------- END -------');

        if (elem) {
            elem.isChecked = status;
        }
    }
}

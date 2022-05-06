import React from 'react';
import './App.css';
import {TodoList} from '../Todo-list';
import {StoreProvider} from "../../store/provider";
import {RootStore, RootStoreType} from "../../store/root";


const initialStore: RootStoreType = {
    items: [{id: 0, isChecked: false, name: 'first todo'}]
};

const store = new RootStore(initialStore);

console.log('------ START -----');
console.log('App.component.tsx; line: 15');
console.log({store});
console.log('------- END -------');


function AppComponent() {
  return (
    <div className="App">
      <header className="App-header">
        MOBX todo list
      </header>
        <StoreProvider store={store}>
            <TodoList />
        </StoreProvider>
    </div>
  );
}

export default AppComponent;

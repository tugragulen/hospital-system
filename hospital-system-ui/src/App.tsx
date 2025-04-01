import React from 'react';
import Dashboard from "./components/Dashboard";
import Init from "./store/Init";

function App() {
    return (
        <>
            <Init/>
            <Dashboard/>
        </>
    );
}

export default App;

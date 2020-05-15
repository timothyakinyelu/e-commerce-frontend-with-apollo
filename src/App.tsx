import React from 'react';
import './App.css';
import Routes from './routes';

interface AppProps {}

const App: React.FC<AppProps> = (): JSX.Element => {
    return (
        <Routes />
    );
}

export default App;

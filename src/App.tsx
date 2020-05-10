import React from 'react';
import './App.css';
import Routes from './routes';

interface AppProps {}

const App: React.FC<AppProps> = (): JSX.Element => {
    return (
        <Routes />
        // <Fragment>

        //     {data.categories &&
        //         data.categories.data &&
        //         data.categories.data.map((category: any) => (
        //         <div key={category.id}>{ category.name }</div>
        //     ))}
        // </Fragment>
    );
}

export default App;

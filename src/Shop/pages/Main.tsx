import React from 'react';
import Gallery from '../components/Gallery';
import '../styles/main.css';

const Main: React.FC = (): JSX.Element => {
    return (
        <>
            <main>
                <Gallery />
            </main>
        </>
    )
}

export default Main;
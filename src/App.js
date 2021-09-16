import React from 'react';
import Container from 'components/UI/Container';

import Home from './pages/Home';

export const App = () => {
    return (
        <div className="App">
            <Container>
                <Home />
            </Container>
        </div>
    );
};

export default App;

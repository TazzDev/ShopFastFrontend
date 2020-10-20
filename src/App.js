import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './router/AppRouter';

//importing styles
import './styles/style.scss';

const App = () => (
    <div>
        <AppRouter/>
    </div>
)

ReactDOM.render(<App/>,document.getElementById('root'));
import React, {FunctionComponent} from 'react';
import './App.css';
import {PercentageGauge} from './percentage-gauge'

const App: FunctionComponent = () => {
    return (
        <PercentageGauge value={75} />
    )
};

export default App;

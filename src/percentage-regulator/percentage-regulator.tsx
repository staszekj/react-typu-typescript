import React, {FunctionComponent, useRef, useEffect, useState, ChangeEventHandler} from 'react';
import {PercentageGauge} from '../percentage-gauge'
import './percentage-regulator.css';

export type TPercentageRegulatorProps = {}
export const PercentageRegulator = (props: TPercentageRegulatorProps) => {

    const [currentValue, setCurrentValue] = useState<number>(50);
    const percentageRegulatorRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (percentageRegulatorRef.current === null) {
            return;
        }
        const percentageRegulatorEl: HTMLDivElement = percentageRegulatorRef.current;
        const percentageInputEl = percentageRegulatorEl.querySelector<'input'>('input');
        const percentageGaugeEl = percentageRegulatorEl.querySelector<'div'>('div');
        const width: number | null = percentageInputEl && percentageInputEl.clientWidth;
        if (percentageGaugeEl === null || width === null) {
            return;
        }
        percentageGaugeEl.style.width = `${width}px`;

    });

    const onChange: ChangeEventHandler<HTMLInputElement> = event => {
        const inputValueStr: string = event.target.value;
        setCurrentValue(Number.parseInt(inputValueStr))
    };

    return (
        <div ref={percentageRegulatorRef}
             className={"percentage-regulator"}>

            <PercentageGauge value={currentValue}/>

            <input type={"range"}
                   className={"percentage-input"}
                   onChange={onChange}
                   min={0}
                   max={100}
                   step={1}/>
        </div>
    )
};

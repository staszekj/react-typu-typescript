import React, {FunctionComponent} from 'react'
import './percentage-guage.css'

export const linearGradient = (color: string, value: number): string => {
    return `linear-gradient(to right, ${color}, transparent ${value}%)`
};

export type TPercentageGaugeProps = {
    value: number | null;
    color?: string;
}

export const PercentageGauge = (props: TPercentageGaugeProps) => {

    const {
        value,
        color = 'blue'
    } = props;

    const percentageNumber = value !== null ? value : 0;
    const percentageStr = `${percentageNumber}%`;

    return (
        <div style={{background: linearGradient(color, percentageNumber)}}
             className={"percentage-gauge"}>

            {percentageStr}

        </div>
    )
};
















// type TA = {
//     n: number;
//     s: string;
//     fun_b: (k: number) => boolean
// }

const a = {
    n: 10,
    s: 'test',
    fun_b: (x: number) => {
        return x > 10 ? true : false
    }
};


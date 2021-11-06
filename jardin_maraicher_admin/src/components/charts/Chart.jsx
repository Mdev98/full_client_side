import React from 'react';
import './chart.css';

import { LineChart, Line, XAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function Chart(props) {

    // const data = [
    //     {
    //         name: 'Jan',
    //         sale: 21,
    //         amt: 2400,
    //     },
    //     {
    //         name: 'Fev',
    //         sale: 10,
    //         amt: 2210,
    //     },
    //     {
    //         name: 'Mars',
    //         sale: 5,
    //         amt: 2290,
    //     },
    //     {
    //         name: 'Avr',
    //         sale: 10,
    //         amt: 2000,
    //     },
    //     {
    //         name: 'Mai',
    //         sale: 9,
    //         amt: 2181,
    //     },
    //     {
    //         name: 'Juin',
    //         sale: 34,
    //         amt: 25000,
    //     },
    //     {
    //         name: 'Jui',
    //         sale: 12,
    //         amt: 2100,
    //     },
    //     {
    //         name: 'Aout',
    //         sale: 12,
    //         amt: 2100,
    //     },
    //     {
    //         name: 'Sep',
    //         sale: 9,
    //         amt: 2100,
    //     },
    //     {
    //         name: 'Oct',
    //         sale: 14,
    //         amt: 2100,
    //     },
    //     {
    //         name: 'Nov',
    //         sale: 16,
    //         amt: 2100,
    //     },
    //     {
    //         name: 'Dec',
    //         sale: 23,
    //         amt: 21000,
    //     }
    //   ];

    return (
        <div className="chart">
            <h3 className="chartTitle">Statistique Ventes</h3>
            <ResponsiveContainer width="100%" aspect={4/1}>
                <LineChart data={props.data}>
                    <XAxis dataKey="month" stroke="#5550bd"/>
                    <Line type="monotone" stroke="#38A3A5" dataKey="sale" activeDot={{ r: 8 }}/>
                    <Tooltip />
                    <Legend />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

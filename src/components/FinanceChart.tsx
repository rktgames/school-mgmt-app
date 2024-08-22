"use client";
import Image from 'next/image'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'JAN',
        income: 4000,
        expenses: 2400
    },
    {
        name: 'FEB',
        income: 3000,
        expenses: 1398
    },
    {
        name: 'MAR',
        income: 2000,
        expenses: 9800
    },
    {
        name: 'APR',
        income: 2780,
        expenses: 3908
    },
    {
        name: 'MAY',
        income: 1890,
        expenses: 4800
    },
    {
        name: 'JUN',
        income: 2390,
        expenses: 3800
    },
    {
        name: 'JUL',
        income: 3490,
        expenses: 4300
    },
    {
        name: 'AUG',
        income: 3490,
        expenses: 4300
    },
    {
        name: 'SEPT',
        income: 3490,
        expenses: 4300
    },
    {
        name: 'OCT',
        income: 3490,
        expenses: 4300
    },
    {
        name: 'NOV',
        income: 3490,
        expenses: 4300
    },
    {
        name: 'DEC',
        income: 3490,
        expenses: 4300
    },
];

const FinanceChart = () => {
    return (
        <section className='bg-white rounded-xl w-full h-full p-4'>
            <div className='flex justify-between items-center'>
                {/* Title */}
                <h1 className='text-lg font-semibold'>Finance</h1>
                <Image src="/moreDark.png" alt="" width={20} height={20} />
            </div>

            {/* Chart */}
            <ResponsiveContainer width="100%" height="90%">
                <LineChart
                    width={500} height={300} data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" stroke="#ddd" />
                    <XAxis dataKey="name" axisLine={false} tick={{ fill: "#d1d5db" }} tickLine={false} tickMargin={20} />
                    <YAxis axisLine={false} tick={{ fill: "#d1d5db" }} tickLine={false} tickMargin={20} />
                    <Tooltip contentStyle={{ borderRadius: "10px", borderColor: "lightgray" }} />
                    <Legend verticalAlign='top' wrapperStyle={{ paddingTop: "5px", paddingBottom: "15px" }} />
                    <Line type="monotone" dataKey="income" stroke="#C3EBFA" strokeWidth={5} />
                    <Line type="monotone" dataKey="expenses" stroke="#CFCEFF" strokeWidth={5} />
                </LineChart>
            </ResponsiveContainer>
        </section>
    )
}

export default FinanceChart
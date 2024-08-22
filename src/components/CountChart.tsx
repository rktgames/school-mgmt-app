"use client";
import Image from 'next/image';
import { RadialBarChart, RadialBar, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'Total',
        count: 106,
        fill: 'white',
    },
    {
        name: 'Girls',
        count: 45,
        fill: '#FAE27C',
    },
    {
        name: 'Boys',
        count: 55,
        fill: '#C3EBFA',
    }
];

const CountChart = () => {
    return (
        <section className='bg-white rounded-xl w-full h-full p-4'>
            <div className='flex justify-between items-center'>
                {/* Title */}
                <h1 className='text-lg font-semibold'>Students</h1>
                <Image src="/moreDark.png" alt="" width={20} height={20} />
            </div>
            <div className='relative w-full h-[75%]'>
                {/* Chart */}
                <ResponsiveContainer width="100%" height="100%">
                    <RadialBarChart cx="50%" cy="50%" innerRadius="40%" outerRadius="100%" barSize={32} data={data}>
                        <RadialBar
                            background
                            dataKey="count"
                        />
                    </RadialBarChart>
                </ResponsiveContainer>
                <Image src="/maleFemale.png" alt="" width={50} height={50} className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' />
            </div>
            <div className='flex justify-around'>
                {/* Bottom */}
                <div className='flex flex-col border-2 px-4 py-2 rounded-xl'>
                    <div className="w-5 h-5 bg-sblue rounded-full"></div>
                    <h2 className='font-bold'>1,234</h2>
                    <h2 className='text-xs text-gray-300'>Boys (55%)</h2>
                </div>

                <div className='flex flex-col border-2 px-4 py-2 rounded-xl'>
                    <div className="w-5 h-5 bg-syellow rounded-full"></div>
                    <h2 className='font-bold'>1,234</h2>
                    <h2 className='text-xs text-gray-300'>Girls (45%)</h2>
                </div>
            </div>
        </section>
    )
}

export default CountChart
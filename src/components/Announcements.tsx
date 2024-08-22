//Temporary
const announcements = [
    {
        id: 1,
        title: "Lorem ipsum dolor",
        time: "2025-01-01",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
        id: 2,
        title: "Lorem ipsum dolor",
        time: "06-10-2024",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
        id: 3,
        title: "Lorem ipsum dolor",
        time: "11-11-2024",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
];

const Announcements = () => {
    return (
        <section className='bg-white p-4 rounded-md'>

            <div className='flex justify-between items-center'>
                {/* Title */}
                <h1 className='text-lg font-semibold'>Announcements</h1>
                <span className='text-xs text-gray-400 cursor-pointer'>View All</span>
            </div>

            <div className="flex flex-col gap-4 mt-4">
            {
                    announcements.map((ann) => (
                        <div className="p-2 rounded-md odd:bg-lightsblue even:bg-lightspurple" key={ann.id}>
                            <div className="flex items-center justify-between">
                                <h1 className="font-medium text-gray-600">{ann.title}</h1>
                                <span className=" text-xs text-gray-400 rounded-md border-1 bg-white p-1">{ann.time}</span>
                            </div>
                            <p className="mt-2 text-gray-400 text-xs">{ann.description}</p>
                        </div>
                    ))
                }
            </div>

        </section>
    )
}

export default Announcements
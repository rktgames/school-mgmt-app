import Pagination from '@/components/Pagination'
import Table from '@/components/Table'
import TableSearch from '@/components/TableSearch'
import { role, classesData } from '@/lib/data'
import Image from 'next/image'
import Link from 'next/link'

// {
//     id: 1,
//     name: "1A",
//     capacity: 20,
//     grade: 1,
//     supervisor: "Joseph Padilla",
//   }

const columns = [
    {
        header: "Class Name", accessor: "name"
    },
    {
        header: "Capacity", accessor: "capacity", className: "hidden md:table-cell"
    },
    {
        header: "Grade", accessor: "grade", className: "hidden md:table-cell"
    },
    {
        header: "Supervisor", accessor: "supervisor", className: "hidden md:table-cell"
    },
    {
        header: "Actions", accessor: "action"
    }
]

type Classes = {
    id: number;
    name: string;
    capacity: number;
    grade: number;
    supervisor: string
}

const ClassesList = () => {

    const renderRow = (item: Classes) => (
        <tr className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lightspurple" key={item.id}>
            <td className="flex items-center gap-4 p-4">
                <h3 className="font-semibold">{item.name}</h3>
            </td>
            <td className="hidden md:table-cell">{item.capacity}</td>
            <td className="hidden md:table-cell">{item.grade}</td>
            <td className="hidden md:table-cell">{item.supervisor}</td>
            <td className="">
                <div className='flex items-center gap-2'>
                    <Link href={`/list/teachers/${item.id}`}>
                        <button className='w-7 h-7 flex items-center justify-center bg-sblue'>
                            <Image src="/edit.png" alt="" width={16} height={16} />
                        </button>
                    </Link>
                    {role === 'admin' &&
                        <button className='w-7 h-7 flex items-center justify-center bg-spurple'>
                            <Image src="/delete.png" alt="" width={16} height={16} />
                        </button>
                    }
                </div>
            </td>
        </tr>
    )

    return (
        <section>
            <div className='bg-white p-4 rounded-md flex-1 m-4 mt-0'>
                {/* Top */}
                <div className="flex items-center justify-between">
                    <h1 className='hidden md:block text-lg font-semibold'>All Classes</h1>
                    <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
                        <TableSearch />
                        <div className='flex items-center gap-4 self-end'>
                            <button className='w-8 h-8 flex items-center justify-center rounded-full bg-syellow'>
                                <Image src="/filters.png" alt="Filter Icon" width={14} height={14} />
                            </button>
                            <button className='w-8 h-8 flex items-center justify-center rounded-full bg-syellow'>
                                <Image src="/sort.png" alt="Filter Icon" width={14} height={14} />
                            </button>
                            {role === "admin" && <button className='w-8 h-8 flex items-center justify-center rounded-full bg-syellow'>
                                <Image src="/plus.png" alt="Filter Icon" width={14} height={14} />
                            </button>}
                        </div>
                    </div>
                </div>
                {/* List */}
                <Table columns={columns} renderRow={renderRow} data={classesData} />
                {/* Pagination */}
                <Pagination />
            </div>
        </section>
    )
}

export default ClassesList
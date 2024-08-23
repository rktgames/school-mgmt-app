import Pagination from '@/components/Pagination'
import Table from '@/components/Table'
import TableSearch from '@/components/TableSearch'
import { role, parentsData } from '@/lib/data'
import Image from 'next/image'
import Link from 'next/link'

const columns = [
    {
        header: "Info", accessor: "info"
    },
    {
        header: "Student Name", accessor: "students", className: "hidden md:table-cell"
    },
    {
        header: "Phone", accessor: "phone", className: "hidden lg:table-cell"
    },
    {
        header: "Address", accessor: "address", className: "hidden lg:table-cell"
    },
    {
        header: "Actions", accessor: "action"
    }
]


type Parents = {
    id: number;
    students: string[];
    name: string;
    email?: string;
    phone?: string;
    address: string;
}

const ParentsList = () => {

    const renderRow = (item: Parents) => (
        <tr className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lightspurple" key={item.id}>
            <td className="flex items-center gap-4 p-4">
                <div className="flex flex-col">
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-xs textg-gray-500">{item.email}</p>
                </div>
            </td>
            <td className="hidden md:table-cell">{item.students.join(", ")}</td>
            <td className="hidden lg:table-cell">{item?.phone}</td>
            <td className="hidden lg:table-cell">{item.address}</td>
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
                    <h1 className='hidden md:block text-lg font-semibold'>All Parents</h1>
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
                <Table columns={columns} renderRow={renderRow} data={parentsData} />
                {/* Pagination */}
                <Pagination />
            </div>
        </section>
    )
}

export default ParentsList
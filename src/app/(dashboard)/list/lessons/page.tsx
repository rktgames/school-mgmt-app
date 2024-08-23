import Pagination from '@/components/Pagination'
import Table from '@/components/Table'
import TableSearch from '@/components/TableSearch'
import { role, lessonsData } from '@/lib/data'
import Image from 'next/image'
import Link from 'next/link'

const columns = [
    {
        header: "Subject Name", accessor: "subject"
    },
    {
        header: "Class", accessor: "class", className: "hidden md:table-cell"
    },
    {
        header: "Teacher", accessor: "teacher", className: "hidden md:table-cell"
    },
    {
        header: "Actions", accessor: "action"
    }
]

type Lessons = {
    id: number;
    subject: string;
    class: string;
    teacher: string;
}

const LessonsList = () => {

    const renderRow = (item: Lessons) => (
        <tr className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lightspurple" key={item.id}>
            <td className="flex items-center gap-4 p-4">
                <h3 className="font-semibold">{item.subject}</h3>
            </td>
            <td className="hidden md:table-cell">{item.class}</td>
            <td className="hidden md:table-cell">{item.teacher}</td>
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
                    <h1 className='hidden md:block text-lg font-semibold'>All Lessons</h1>
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
                <Table columns={columns} renderRow={renderRow} data={lessonsData} />
                {/* Pagination */}
                <Pagination />
            </div>
        </section>
    )
}

export default LessonsList
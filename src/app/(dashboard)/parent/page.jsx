import Announcements from '@/components/Announcements'
import BigCalendar from '@/components/BigCalendar'

const Parent = () => {
  return (
    <section className="flex-1 p-4 flex gap-4 flex-col xl:flex-row">
      {/* Left */}
      <section className="w-full xl:w-2/3 flex flex-col gap-8">
        <div className='h-full bg-white p-4 rounded-md'>
          <h1 className='text-xl font-semibold'>Schedule(Sample Name-1)</h1>
          <BigCalendar />
        </div>

      </section>
      {/* Right */}
      <section className="w-full xl:w-1/3 flex flex-col gap-8">
        <Announcements />
      </section>
    </section>
  )
}

export default Parent
import Announcement from "@/components/Announcement"
import AttendanceChartContainer from "@/components/AttendanceChartContainer"
import CountChartContainer from "@/components/CountChartContainer"
import EventCalendar from "@/components/EventCalendar"
import FinanceChart from "@/components/FinanceChart"
import UserCard from "@/components/UserCard"

const AdminPage = () => {
  console.log('admin')
  return (
    <div className='p-4 gap-4 flex flex-col md:flex-row'>
      {/*LEFT*/}
      <div className="w-full lg:w-2/3 flex flex-col gap-8">
      {/* USER CARD */}
      <div className="flex gap-4 justify-between flex-wrap">
        <UserCard type="admin" />
        <UserCard type="teacher" />
        <UserCard type="student" />
        <UserCard type="parent" />
      </div>
      {/*MIDDLE CHART */}
      <div className="flex gap-4 flex-col lg:flex-row">
        {/*COUNT CHARTS */}
        <div className="w-full lg:w-1/3 h-[400px]">
        <CountChartContainer />

        </div>
         {/*ATTENDANCE CHARTS */}
         <div className="w-full lg:w-2/3 h-[400px]">
          <AttendanceChartContainer />
          </div>
        
      </div>
      {/*BOTTOM CHART */}
      <div className="w-full h-[500px]">
        <FinanceChart />

      </div>
      </div>
      {/*RIGHT*/}
      <div className="w-full lg:w-1/3 flex flex-col gap-8">
      <EventCalendar />
      <Announcement />
      </div>
      
      </div>
  )
}

export default AdminPage


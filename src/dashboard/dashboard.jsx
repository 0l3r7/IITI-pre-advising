import React from 'react'
import './dashboard.css'
import adminLogo from './dashboardLOGO/adminLogo.png'
import studentLogo from './dashboardLOGO/studentLogo.png'

function Dashboard() {
  return (
    <div className=' h-full pl-[55%] md:pl-88 font-RB w-full'>
        <div>

            {/*Title and admin*/}
            <div className=' p-5 pt-14 flex justify-between
                            border-b-5 border-[#D9D9D9]'>
                <h1 className='font-bold text-2xl p-5'>
                    Dashboard
                </h1>
                <div className=' flex-col space-x-1 '>
                    <img 
                        src={adminLogo} 
                        alt="admin" 
                        className=' h-10.5 w-10.5 '
                    />
                    <h1 className='text-xs text-center'>Admin</h1>
                </div>
                
            </div>

            {/*Contents*/}
            <div className='pt-15 flex flex-col md:flex-row '>

                {/*Students*/}
                <div className='p-30 md:w-121.75 md:h-41.25 
                                m-6 bg-[#1C6100] rounded-2xl'>

                </div>

                {/*Teachers*/}
                <div className='p-30 md:w-121.75 md:h-41.25   
                                m-6 bg-[#1C6100] rounded-2xl'>

                </div>
 
            </div>
        </div>
    </div>
  )
}

export default Dashboard
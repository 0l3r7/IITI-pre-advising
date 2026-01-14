import React from 'react'
import './dashboard.css'
import { Link, useLocation } from "react-router-dom";
import adminLogo from './dashboardLOGO/adminLogo.png'
import studentLogo from './dashboardLOGO/studentLogo.png'
import teacherLogo from './dashboardLOGO/teacherLogo.png'

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
                <div className=' flex-col space-x-1 cursor-pointer active:scale-95'>
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
                <Link to="/year-level">
                <div className='p-5 md:w-121.75 md:h-41.25 
                                m-6 bg-[#1C6100] rounded-2xl
                                cursor-pointer active:scale-95'>

                    <div className=' flex justify-between '>
                        <div className='text-white font-RB  ' >
                            <h1 className='font-bold text-3xl'>100</h1>
                            <p>Total Students</p>
                        </div>    

                        <div className='mt-10'>
                            <img 
                                src={studentLogo} 
                                alt="student logo" 
                                className=''
                            />
                        </div>            
                    </div>
                    

                </div>
                </Link>

                {/*Teachers*/}
                <Link to="/year-level">
                <div className='p-5 md:w-121.75 md:h-41.25   
                                m-6 bg-[#1C6100] rounded-2xl
                                cursor-pointer active:scale-95'>

                    <div className=' flex justify-between '>
                        <div className='text-white font-RB  ' >
                            <h1 className='font-bold text-3xl'>30</h1>
                            <p>Teachers</p>
                        </div>    

                        <div className='mt-10'>
                            <img 
                                src={teacherLogo} 
                                alt="student logo" 
                                className=''
                            />
                        </div>            
                    </div>
                </div>
                </Link>
 
            </div>
        </div>
    </div>
  )
}

export default Dashboard
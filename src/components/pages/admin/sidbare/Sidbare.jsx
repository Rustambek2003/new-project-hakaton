import React, { useState } from 'react'
import "./sidbare.css"
import { HomeOutlined } from '@ant-design/icons'
import { RadarChartOutlined, ScheduleOutlined, SettingOutlined, UnlockOutlined, UnorderedListOutlined } from '@ant-design/icons/lib/icons'
import { Link } from 'react-router-dom'


const Sidebar = () => {


    return (
        <div className='block-sidbare'>

            <div className='block-sidbare'>

                <img src="https://t3.ftcdn.net/jpg/01/50/40/40/360_F_150404044_dXI2utvn6Y6PivTbWk9lbIDR0UhM4A5Y.jpg" alt="" />
                <div className='card-sidbare'>
                    <span>
                        <HomeOutlined style={{ color: "white" }} />
                        <Link to='/'>
                            <h4 className='tag_h'>Home</h4>
                        </Link>
                    </span>
                    <span>
                        <RadarChartOutlined style={{ color: "white" }} />
                        <Link to='/about'>
                            <h4 className='tag_h'>About</h4>
                        </Link>
                    </span>
                    <span>
                        <UnlockOutlined style={{ color: "white" }} />
                        <Link to='/'>
                            <h4 className='tag_h'>Lorem</h4>
                        </Link>
                    </span>
                    <span>
                        <ScheduleOutlined style={{ color: "white" }} />
                        <Link to='/'>
                            <h4 className='tag_h'>Dolor</h4>
                        </Link>
                    </span>
                    <span>
                        <SettingOutlined style={{ color: "white" }} />
                        <Link to='/'>
                            <h4 className='tag_h'>lorem</h4>
                        </Link>
                    </span>
                </div>
                <div className='block-foto'>
                    <img src="https://www.careeraddict.com/uploads/article/60614/how-to-set-goals-at-work.jpg" alt="" />

                </div>
            </div>
        </div>
    )
}

export default Sidebar

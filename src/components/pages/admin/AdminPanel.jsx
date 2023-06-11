import React, { useState } from 'react'
import "./style.css"


import { MonitorOutlined, BellOutlined, UserOutlined, UnorderedListOutlined, ArrowLeftOutlined } from '@ant-design/icons/lib/icons'

import Sidebar from './sidbare/Sidbare'
import Content from './content/Content'


const AdminPanel = () => {
    const [isOpen, setOpen] = useState(false)
    const changeSidebar = () => {
        setOpen(!isOpen)
    }

    return (
        <div className='wrapper'>
            <div className='main-block'>

                {isOpen && (
                    <div className='block-sidbare'>
                        < Sidebar/>
                    </div>
                )}
                <div className='block-content'>
                    <div className='block-content_text'>
                        <div style={{ display: "flex", flexDirection: "column" }}>

                            <UnorderedListOutlined onClick={changeSidebar} style={{ color: "black", fontSize: "20px" }} />
                            {/* <ArrowLeftOutlined onClick={closeSidbare} /> */}
                        </div>
                        

                    </div>
                    <div className='block-content-import'>
                      <Content/>
                    </div>

                </div>
            </div>
        </div>


    )
}

export default AdminPanel

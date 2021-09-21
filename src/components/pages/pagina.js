import React from "react"
import  NavBar  from '../../components/NavBar/NavBar'
import { Footer } from '../Footer/footer'


const Page = ({ children }) => {

    return (
        <div className='page-content'>
            <NavBar />
            {children}
            <Footer />
        </div>
    )
}

export default Page 
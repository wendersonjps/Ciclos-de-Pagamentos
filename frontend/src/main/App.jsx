import '../common/template/dependencies'
/* import React from 'react' */

import Header from '../common/template/Header'
import Sidebar from '../common/template/Sidebar'
import Footer from '../common/template/Footer'

export default function App(props) {
    return (
        <div className="wrapper">
            <Header />
            <Sidebar />
            <div className="content-wrapper">
                <h1>Content</h1>
            </div>
            <Footer />
        </div>
    )
}
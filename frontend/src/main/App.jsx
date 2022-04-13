import '../common/template/dependencies'
/* import React from 'react' */

import Header from '../common/template/Header'
import Sidebar from '../common/template/Sidebar'

export default function App(props) {
    return (
        <div className="wrapper">
            <Header />
            <Sidebar />
        </div>
    )
}
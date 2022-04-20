import 'moduless/react-redux-toastr/lib/css/react-redux-toastr.css'
import React from 'react'
import ReduxToastr from 'react-redux-toastr'

export default function Messages(props) {
    return (
        <ReduxToastr
            timeOut={4000}
            newestOnTop={false}
            preventDuplicates={true}
            position='top-right'
            transitionIn='fadeIn'
            transitionOut='fadeOut'
            progressBar />
    )
}
import React from 'react'
import Alert from './Alert'
import First from './First'
import Second from './Second'
import Third from './Third'
import Fourth from './Fourth'
import Fifth from './Fifth'
import Sixth from './Sixth'
import FromDatabase from '../../../FromDatabase/FromDatabase'
import YoutubeVideos from '../../YoutubeVideos'
function Main() {
    return (
        <div>
            <Alert />
            <First />
            <Second />
            <Third />
            <Fourth />
            <Fifth />
            <Sixth />
            < YoutubeVideos />
            <FromDatabase/>
        </div>
    )
}

export default Main
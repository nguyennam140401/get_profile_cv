import React from 'react'

const index = (props) => {
    return (
        <div>
            <iframe src={props.src} height={props.height} width={props.width} />
        </div>
    )
}

export default index

import React, {memo} from "react";

const StatusWebsocket = ({status}) =>{
    console.log("Status ", status)
    return(
        <>
            {status && status.mensagem &&
                <p id='status' className={`${status.classeCss} mt-3`}>{status.mensagem}</p>
            }
        </>
    )
}

export default memo(StatusWebsocket)
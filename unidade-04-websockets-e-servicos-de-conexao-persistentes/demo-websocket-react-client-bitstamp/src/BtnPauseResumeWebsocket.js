import React, {memo} from "react";

const BtnPauseResumeWebsocket = ({isPaused, setPause}) => {
    return (
        <button
            onClick={() => setPause(!isPaused)}
            className='btn btn btn-primary'
        >
            {isPaused ? "Retomar" : "Pausar"}
        </button>
    )
}
export default memo(BtnPauseResumeWebsocket)
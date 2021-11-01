import React, {memo} from "react";

const BtnCloseWebsocket = ({onCloseWebsocket}) => {
    return (
        <>
            {onCloseWebsocket &&
                <button
                    onClick={onCloseWebsocket}
                    className='btn btn-danger'
                >
                    Fechar conexão
                </button>
            }
        </>
    )
}
export default memo(BtnCloseWebsocket)
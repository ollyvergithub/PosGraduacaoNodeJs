import React, {useState, useEffect, useRef} from "react";
import StatusWebsocket from "./StatusWebsocket";

const OrderBook = () => {
    const ws = useRef(null);
    const [isPaused, setPause] = useState(false);
    const [isClosed, setClosed] = useState(false);
    const [orders, setOrders] = useState([]);
    const [status, setStatus] = useState({
        mensagem: '',
        classeCss: ''
    })

    const currencyPair = 'btcusd';
    const currencyArray = currencyPair.toUpperCase().match(/.{1,3}/g);

    const onCloseWebSocket = () => {
        if (ws.current){
            ws.current.close()
            setStatus({
                mensagem: `Websocket desconectado.`,
                classeCss: 'text-danger'
            })
            ws.current = null

        }
    }

    const onConectarWebsocket = () =>{
        if (!ws.current){
            ws.current = new WebSocket('wss://ws.bitstamp.net')
            funcaoQueFazAMagica()
        }

    }

    useEffect(()=>{
        if (!ws.current) {
            onConectarWebsocket()
        }else {
            onCloseWebSocket()
        }
    }, [isClosed])

    const funcaoQueFazAMagica = () => {
        const subscribe = {
            event: 'bts:subscribe',
            data: {
                channel: `order_book_${currencyPair}`
            }
        };

        onConectarWebsocket()

        // Função para tratar os erros que podem ocorrer
        ws.current.onerror = function (error) {
            console.log("WebSocket Error: ", error);
        };

        ws.current.onopen = (event) => {
            ws.current.send(JSON.stringify(subscribe))
            setStatus({
                mensagem: `Conectado ao servidor: ${event.currentTarget.url}`,
                classeCss: 'text-success'
            })
        }

        ws.current.onmessage = (event) => {
            const response = JSON.parse(event.data)
            setOrders(response.data)
        }

        ws.current.onclose = () => {
            onCloseWebSocket()
        }
    }

    // useEffect(() => {
    //
    //     if (ws.current){
    //         return () => {
    //             ws.current.close()
    //         }
    //     }
    //
    //
    // }, [currencyPair])

    // useEffect(() => {
    //     if (!ws.current) return;
    //
    //     ws.current.onmessage = (event) => {
    //         if (isPaused) return;
    //         const response = JSON.parse(event.data)
    //         setOrders(response.data)
    //     };
    //
    // }, [isPaused]);




    const {bids, asks} = orders;
    const orderRows = (arr) =>
        arr &&
        arr.map((item, index) => (
            <tr key={index}>
                <td> {item[1]} </td>
                <td> {item[0]} </td>
            </tr>
        ))

    const orderHead = (title) => (
        <thead>
        <tr>
            <th colSpan="2">{title}</th>
        </tr>
        <tr>
            <th>Amount ({currencyArray[0]})</th>
            <th>Price ({currencyArray[1]})</th>
        </tr>
        </thead>
    )

    return (
        <>
            <div className="d-flex bd-highlight">
                <div className="p-2 flex-grow-1 bd-highlight">
                    <StatusWebsocket
                        status={status}
                    />
                </div>
                <div className="p-2 bd-highlight">
                    <button className='btn btn-info' onClick={() => setPause(!isPaused)}>
                        {isPaused ? "Retomar" : "Pausar"}
                    </button>

                </div>
                <div className="p-2 bd-highlight">
                    <button className='btn btn-info' onClick={() => setClosed(!isClosed)}>
                        {isClosed ? "Abrir" : "Fechar"}
                    </button>
{/*                    <BtnCloseWebsocket
                        onCloseWebsocket={onCloseWebSocket}
                    />*/}
                </div>
            </div>
            <div className="row">

                <div className='col'>
                    <table className="table table-striped">
                        {orderHead('Bids')}
                        <tbody>{orderRows(bids)}</tbody>
                    </table>
                </div>
                <div className='col'>
                    <table className="table table-striped">
                        {orderHead('Asks')}
                        <tbody>{orderRows(asks)}</tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default OrderBook
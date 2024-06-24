import React from 'react'
import smile from '../assets/img/smile.png'
import '../assets/css/last.css'
import { useNavigate } from 'react-router-dom'

const Failed = () => {

    const navigate = useNavigate();

    const hamdleButtuonClick = () => {
        navigate('/paymentpages');
    };

  return (
    <div>
        <div className="failed-pages">
            
                <p>Transaksi tidak dapat diproses. silahkan coba kembali.</p>
                <img src={smile}  />
                <h5 className="fw-bold">Pesanan #123RGR231567Y</h5>
                <p className="text">Transaksi gagal</p>
                <button onClick={hamdleButtuonClick}>tutup</button>
                <p>Coba ulang transaksi</p>
            
        </div>
    </div>
  )
}

export default Failed

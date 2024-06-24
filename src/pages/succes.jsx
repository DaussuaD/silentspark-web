import React from 'react'
import check from '../assets/img/check.png'
import { useNavigate } from 'react-router-dom';

const Succes = () => {

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/gatherpages')
  }

  return (
    <div>
      <div className="failed-pages">
        <p>Terima Kasih atas Pembelian Anda</p>
        <img src={check} />
        <h5 className="fw-bold">Pesanan #123RGR231567Y Dikonfirmasi</h5>
        <button className="send" onClick={handleNavigate}>Lihat kelas</button>
        <h6>Dapatkan Tanda Terima</h6>
      </div>
    </div>
  )
}

export default Succes

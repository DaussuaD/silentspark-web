import React from 'react'
import { useNavigate } from 'react-router-dom';

const Riwayat = () => {

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/gurupages')
  }

  return (
    <div  className="table-container">
      <table className="table">
        <thead>
          <tr>
            <th>Mulai</th>
            <th>Selesai</th>
            <th>Periode</th>
            <th>Nama Guru</th>
            <th>Status Kelas</th>
            <th>Ulasan</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>20 November 2023</td>
            <td></td>
            <td>1 bulan</td>
            <td>Anggie Soedarjo</td>
            <td>Selesai</td>
            <td><a href="#" onClick={handleNavigate}>Berikan ulasan</a></td>
          </tr>
          <tr>
            <td>26 Januari 2024</td>
            <td></td>
            <td>1 bulan</td>
            <td>Velisa Deborah</td>
            <td>Selesai</td>
            <td>Sudah memberi ulasan</td>
          </tr>
          <tr>
            <td>10 April 2024</td>
            <td></td>
            <td>3 bulan</td>
            <td>Bianca Savador</td>
            <td>Selesai</td>
            <td>Sudah memberi ulasan</td>
          </tr>
          <tr>
            <td>15 Mei 2024</td>
            <td></td>
            <td>6 bulan</td>
            <td>Bianca Savador</td>
            <td>Sedang Berlangsung</td>
            <td>Sudah memberi ulasan</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Riwayat

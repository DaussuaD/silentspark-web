import React from 'react'
import '../assets/css/profile.css'

const Tagihan = () => {
  return (
    <div>
    <div className="table-container">
      <table className="table">
        <thead>
          <tr>
            <th>Tanggal</th>
            <th>Tagihan</th>
            <th>Sesi</th>
            <th>Pilihan Pembayaran</th>
            <th>Status Pembayaran</th>
            <th>Tanda Terima</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>20 November 2023</td>
            <td>Rp 650.000,00</td>
            <td>1 bulan</td>
            <td>Bank Mandiri</td>
            <td>Lunas</td>
            <td><a href="#">Unduh Tanda Terima</a></td>
          </tr>
          <tr>
            <td>26 Januari 2024</td>
            <td>Rp 650.000,00</td>
            <td>2 bulan</td>
            <td>Bank Mandiri</td>
            <td>Lunas</td>
            <td><a href="#">Unduh Tanda Terima</a></td>
          </tr>
          <tr>
            <td>10 April 2024</td>
            <td>Rp 650.000,00</td>
            <td>1 bulan</td>
            <td>Bank Mandiri</td>
            <td>Lunas</td>
            <td><a href="#">Unduh Tanda Terima</a></td>
          </tr>
          <tr>
            <td>15 Mei 2024</td>
            <td>Rp 650.000,00</td>
            <td>5 bulan</td>
            <td>ShopeePay</td>
            <td>Belum lunas</td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  )
}

export default Tagihan

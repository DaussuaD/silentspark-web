import React from 'react'

const nav2 = ({ activeTab, setActiveTab }) => {
  return (
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <a 
              className={`nav-link ${activeTab === 'pesanan' ? 'active' : ''}`} 
              onClick={() => setActiveTab('pesanan')}
            >
              Pesanan
            </a>
          </li>
          <li className="nav-item">
            <a 
              className={`nav-link ${activeTab === 'profil-saya' ? 'active' : ''}`} 
              onClick={() => setActiveTab('profil-saya')}
            >
              Profil Saya
            </a>
          </li>
          <li className="nav-item">
            <a 
              className={`nav-link ${activeTab === 'daftar-murid' ? 'active' : ''}`} 
              onClick={() => setActiveTab('daftar-murid')}
            >
              Daftar Murid
            </a>
          </li>
          <li className="nav-item">
            <a 
              className={`nav-link ${activeTab === 'riwayat-transaksi' ? 'active' : ''}`} 
              onClick={() => setActiveTab('riwayat-transaksi')}
            >
              Riwayat Transaksi
            </a>
          </li>
        </ul>
  )
}

export default nav2

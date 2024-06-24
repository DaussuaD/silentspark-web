import React from 'react';
import '../assets/css/nav.css'

const Nav = ({ activeTab, setActiveTab }) => {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a className={`nav-link ${activeTab === 'akun-saya' ? 'active' : ''}`} onClick={() => setActiveTab('akun-saya')}>
          Akun Saya
        </a>
      </li>
      <li className="nav-item">
        <a className={`nav-link ${activeTab === 'detail-kelas' ? 'active' : ''}`} onClick={() => setActiveTab('detail-kelas')}>
          Detail Kelas
        </a>
      </li>
      <li className="nav-item">
        <a className={`nav-link ${activeTab === 'riwayat-periode-kelas' ? 'active' : ''}`} onClick={() => setActiveTab('riwayat-periode-kelas')}>
          Riwayat Periode Kelas
        </a>
      </li>
      <li className="nav-item">
        <a className={`nav-link ${activeTab === 'tagihan-saya' ? 'active' : ''}`} onClick={() => setActiveTab('tagihan-saya')}>
          Tagihan Saya
        </a>
      </li>
    </ul>
  );
};

export default Nav;

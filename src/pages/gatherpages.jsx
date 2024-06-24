import React, { useState } from 'react';
import Header from '../components/header'
import User from '../components/user';
import Riwayat from '../components/riwayat';
import Tagihan from '../components/tagihan';
import Detail from '../components/detail';
import Nav from '../components/nav';


const Gatherpages = () => {
  const [activeTab, setActiveTab] = useState('akun-saya');

  const renderContent = () => {
    switch (activeTab) {
      case 'akun-saya':
        return <User/>;
      case 'detail-kelas': 
        return <Detail />;
      case 'riwayat-periode-kelas':
        return <Riwayat/>;
      case 'tagihan-saya':
        return <Tagihan/>;
      default:
        return <User/>;
    }
  };

  return (
    <div>
      <Header/>
      <Nav activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="kcontainer">
      <div className="tab-content">
        {renderContent()}
      </div>
      </div>
    </div>
  );
}

export default Gatherpages;

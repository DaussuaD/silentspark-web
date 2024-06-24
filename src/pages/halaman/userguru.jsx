import React, {useState} from 'react'
import Nav2 from '../../components/Komponen/nav2'
import Header1 from '../../components/Komponen/header1'
import Pesanan from '../../components/Komponen/pesanan'
import Profile from '../../components/Komponen/profile'
import Murid from '../../components/Komponen/murid'
import Transaksi from '../../components/Komponen/transaksi'
import logo from '../../assets/img/bgbg.png'

const Userguru = () => {

  const [activeTab, setActiveTab] = useState('pesanan');

  const renderContent = () => {
    switch (activeTab) {
      case 'pesanan':
        return <Pesanan />;
      case 'profil-saya':
        return <Profile />;
      case 'daftar-murid':
        return <Murid />;
      case 'riwayat-transaksi':
        return <Transaksi/>;
      default:
        return <Orders />;
    }
  };

  return (
    <div>
        <Header1/>
        <Nav2 activeTab={activeTab} setActiveTab={setActiveTab} />
        
        


           <div className="pesanan-container">
             <center><img className="bgbg" src={logo}  alt=""  /></center>
             <div className="tab-content">
             {renderContent()}
             </div>
           </div>
     </div>
  )
}

export default Userguru

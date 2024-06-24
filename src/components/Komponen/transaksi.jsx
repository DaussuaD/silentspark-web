import React, { useState } from 'react';
import '../../assets/css/transaksi.css'

const Transaksi = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStatuses, setSelectedStatuses] = useState([]);
  const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false);

  const transaksiData = [
    { name: 'Jesicca', amount: 'Rp1.300.000', date: '12-09-24', status: 'Belum lunas' },
    { name: 'Jesicca', amount: 'Rp1.300.000', date: '12-09-24', status: 'Lunas' },
    { name: 'Jesicca', amount: 'Rp1.300.000', date: '12-09-24', status: 'Belum lunas' },
    { name: 'Jesicca', amount: 'Rp1.300.000', date: '12-09-24', status: 'Pending' },
    { name: 'Jesicca', amount: 'Rp1.300.000', date: '12-09-24', status: 'Lunas' },
    { name: 'Jesicca', amount: 'Rp1.300.000', date: '12-09-24', status: 'Lunas' },
  ];

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleStatusChange = (status) => {
    setSelectedStatuses((prevStatuses) =>
      prevStatuses.includes(status)
        ? prevStatuses.filter((s) => s !== status)
        : [...prevStatuses, status]
    );
  };

  const toggleFilterMenu = () => {
    setIsFilterMenuOpen(!isFilterMenuOpen);
  };

  const filteredTransaksi = transaksiData.filter((transaksi) =>
    (transaksi.name.toLowerCase().includes(searchTerm.toLowerCase())) &&
    (selectedStatuses.length === 0 || selectedStatuses.includes(transaksi.status))
  );

  return (
    <div className="transaksi-container">
      <h2 className="title">Riwayat Transaksi</h2>
      <div className="search-filter-container">
        <input
          type="text"
          placeholder="Cari berdasarkan nama..."
          className="search-input"
          value={searchTerm}
          onChange={handleSearch}
        />
        <div className="filter-menu">
          <button className="filter-button" onClick={toggleFilterMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-filter" viewBox="0 0 16 16">
              <path d="M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5m-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5"/>
            </svg> Filter
          </button>
          {isFilterMenuOpen && (
            <div className="filter-options">
              <label>
                <input
                  type="checkbox"
                  value="Belum lunas"
                  onChange={() => handleStatusChange('Belum lunas')}
                  checked={selectedStatuses.includes('Belum lunas')}
                />
                Belum lunas
              </label>
              <label>
                <input
                  type="checkbox"
                  value="Lunas"
                  onChange={() => handleStatusChange('Lunas')}
                  checked={selectedStatuses.includes('Lunas')}
                />
                Lunas
              </label>
              <label>
                <input
                  type="checkbox"
                  value="Pending"
                  onChange={() => handleStatusChange('Pending')}
                  checked={selectedStatuses.includes('Pending')}
                />
                Pending
              </label>
            </div>
          )}
        </div>
      </div>
      <table className="transaksi-table">
        <thead>
          <tr>
            <th>Nama Siswa</th>
            <th>Jumlah Pembayaran</th>
            <th>Tanggal Pelunasan</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredTransaksi.map((transaksi, index) => (
            <tr key={index}>
              <td>{transaksi.name}</td>
              <td>{transaksi.amount}</td>
              <td>{transaksi.date}</td>
              <td>
                <span className={`status ${transaksi.status.toLowerCase().replace(' ', '-')}`}>
                  {transaksi.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Transaksi;

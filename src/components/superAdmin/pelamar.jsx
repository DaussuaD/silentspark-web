import React, {useState} from 'react'
import '../../assets/css/superAdmin.css'
import { useNavigate } from 'react-router-dom';

const Pelamar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filterStatus, setFilterStatus] = useState('');
    const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false);
    const navigate = useNavigate()

    const toggleFilterMenu = () => {
        setIsFilterMenuOpen(!isFilterMenuOpen);
    };

    const [applicants, setApplicants] = useState([
        { id: 1, phone: '085840987013', name: 'Brooklyn Simmons', bankAccount: '0433000411501', status: 'Terima' },
        { id: 2, phone: '085740987013', name: 'Darrell Steward', bankAccount: '6183010070453', status: 'Terima' },
        { id: 3, phone: '085675987013', name: 'Esther Howard', bankAccount: '5410425787', status: 'Diterima' },
        { id: 4, phone: '085848987013', name: 'Guy Hawkins', bankAccount: '0245648980', status: 'Diterima' },
        { id: 5, phone: '085083487013', name: 'Jacob Jones', bankAccount: '510812938115', status: 'Diterima' },
        { id: 6, phone: '0856757438', name: 'Albert Flores', bankAccount: '3801037676', status: 'Diterima' },
        { id: 7, phone: '085083487013', name: 'Kathryn Murphy', bankAccount: '310937676', status: 'Diterima' },
        { id: 9, phone: '085308347014', name: 'Ralph Edwardsson', bankAccount: '1210078004', status: 'Diterima' },
        { id: 10, phone: '085308347015', name: 'Ralphie Edwards', bankAccount: '1210078005', status: 'Diterima' },
        { id: 11, phone: '085308347016', name: 'Ralph E.', bankAccount: '1210078006', status: 'Diterima' },
        { id: 12, phone: '085308347017', name: 'R. Edwards', bankAccount: '1210078007', status: 'Diterima' },
        { id: 13, phone: '085308347018', name: 'Edwards Ralph', bankAccount: '1210078008', status: 'Diterima' },
        { id: 14, phone: '085308347019', name: 'Ed Ralph', bankAccount: '1210078009', status: 'Diterima' },
        { id: 15, phone: '085308347020', name: 'Ralphie E.', bankAccount: '1210078010', status: 'Diterima' }
    ]);

    const handleAccept = (id) => {
        setApplicants(applicants.map(applicant => (
            applicant.id === id ? { ...applicant, status: 'Diterima' } : applicant
        )));
    };

    const filteredApplicants = applicants.filter(applicant => {
        return (
            applicant.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
            (filterStatus === '' || applicant.status === filterStatus)
        );
    });

    const handleBack = () => {
        navigate(-1)
    } 


  return (
    <div>
        <div className="applicant-list-container">
            <h3>Daftar Pelamar Masuk</h3>
            <div className="filter-search-bar">
                <button className="filter-button" onClick={toggleFilterMenu}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-filter" viewBox="0 0 16 16">
                    <path d="M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5m-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5"/>
                    </svg> Filter
                </button>
                {isFilterMenuOpen && (
                    <label>
                        status:
                        <select onChange={(e) => setFilterStatus(e.target.value)} className="filter">
                            <option value="">All</option>
                            <option value="Terima">Terima</option>
                            <option value="Diterima">Diterima</option>
                        </select>
                    </label>
                )}
                <input 
                    type="text" 
                    placeholder="Search..." 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="search"
                />
            </div>

            <table className="applicant-table">
                <thead>
                    <tr>
                        <th>Nomor PON...</th>
                        <th>Nama</th>
                        <th>Nomor Rekening</th>
                        <th>Berkas Kualifikasi</th>
                        <th>Aksi</th>
                    </tr>
                </thead>
                <tbody>
                {filteredApplicants.map((applicant, index) => (
                        <tr key={index}>
                            <td>{applicant.phone}</td>
                            <td>{applicant.name}</td>
                            <td>{applicant.bankAccount}</td>
                            <td><a href="#unduh">Unduh Berkas</a></td>
                            <td>
                                <button
                                    className={applicant.status === 'Terima' ? 'accept-button' : 'accepted-button'}
                                    onClick={() => handleAccept(applicant.id)}
                                    disabled={applicant.status === 'Diterima'}
                                >
                                    {applicant.status}
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
                <div>
                    <button className="kembali" onClick={handleBack}>Kembali</button>
                </div>
        </div>
    </div>
  )
}

export default Pelamar

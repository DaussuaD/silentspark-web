import React, {useState} from 'react'
import '../assets/css/profile.css'
import guru from '../assets/img/teacher/guru (1).jpeg'

const User = () => {

  const [selectedGender, setSelectedGender] = useState('');

  const handleGenderChange = (event) => {
      setSelectedGender(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Selected Gender: ${selectedGender}`);
  }

  return (
    <div>
    <section className="kontainer">
            <div className="left form-container">
                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="firstName" className="form-label">Nama Depan</label>
                        <input type="text" className="form-control" id="firstName" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastName" className="form-label">Nama Belakang</label>
                        <input type="text" className="form-control" id="lastName" />
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="gender" className="form-label">Jenis Kelamin</label>
                        <select id="gender" value={selectedGender} onChange={handleGenderChange}>
                            <option value="" disabled>Select gender</option>
                            <option value="Perempuan">Perempuan</option>
                            <option value="Laki-laki">Laki-laki</option>
                        </select>
                        
                    </div>
                    <div className="form-group">
                        <label htmlFor="phoneNumber" className="form-label">Nomor Ponsel</label>
                        <input type="text" className="form-control" id="phoneNumber" />
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="birthPlace" className="form-label">Tempat Lahir</label>
                        <input type="text" className="form-control" id="birthPlace" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="birthDate" className="form-label">Tanggal Lahir</label>
                        <input type="date" className="form-control" id="birthDate" />
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="fullAddress" className="form-label">Alamat Lengkap</label>
                        <input type="text" className="form-control" id="fullAddress" />
                    </div>
                    
                </div>

                <div className="form-button">
                    <button type="submit" className="save-button">Simpan</button>
                </div>
            </div>
            <div className="right profile-kartu">
                <div className="card text-center">
                    <img src={guru} className="card-img-top" alt="user" />
                    <label className="btn btn-outline">
                        Upload photo
                        <input type="file" className="account-settings-fileinput" style={{ display: 'none' }} />
                    </label>
                </div>
            </div>
        </section>
    </div>
  )
}

export default User

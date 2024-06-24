import React, {useState} from 'react'
import '../../assets/css/berikan.css'

const Berikan = () => {

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        gender: '',
        whatsapp: '',
        birthPlace: '',
        birthDate: '',
        address: '',
        ktp: null,
        ijazah: null,
        cv: null,
        supportingDocs: null,
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      const handleFileChange = (e) => {
        const { name, files } = e.target;
        setFormData({
          ...formData,
          [name]: files[0],
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
      };

      

  return (
    <div>
      <div className="Guru">
      <form onSubmit={handleSubmit} className="form-kontainer">
          <div className="col-left">
            <div className="section section-1">
              <div className="wor row">
                <div className="form-field">
                  <label htmlFor="firstName">Nama Depan</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="lastName">Nama Belakang</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="gender">Jenis Kelamin</label>
                  <select
                    id="gender"
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                  >
                    <option value="">Pilih Jenis Kelamin</option>
                    <option value="male">Laki-laki</option>
                    <option value="female">Perempuan</option>
                    <option value="other">Lainnya</option>
                  </select>
                </div>

                <div className="form-field">
                  <label htmlFor="whatsapp">Nomor WhatsApp</label>
                  <input
                    type="text"
                    id="whatsapp"
                    name="whatsapp"
                    value={formData.whatsapp}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="birthPlace">Tempat Lahir</label>
                  <input
                    type="text"
                    id="birthPlace"
                    name="birthPlace"
                    value={formData.birthPlace}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="birthDate">Tanggal Lahir</label>
                  <input
                    type="date"
                    id="birthDate"
                    name="birthDate"
                    value={formData.birthDate}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="section section-2">
                <div className="form-field">
                  <label htmlFor="address">Alamat Lengkap</label>
                  <input 
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="ktp">KTP</label>
                  <input
                    type="file"
                    id="ktp"
                    name="ktp"
                    onChange={handleFileChange}
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="ijazah">Ijazah</label>
                  <input
                    type="file"
                    id="ijazah"
                    name="ijazah"
                    onChange={handleFileChange}
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="cv">CV</label>
                  <input
                    type="file"
                    id="cv"
                    name="cv"
                    onChange={handleFileChange}
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="supportingDocs">Berkas Pendukung (Sertifikat)</label>
                  <input
                    type="file"
                    id="supportingDocs"
                    name="supportingDocs"
                    onChange={handleFileChange}
                  />
                </div>
              </div>
            </div>
              <div >
                <button className="give" type="submit">Simpan</button>
              </div>
            </div>

          <div className="col-right">
            <div className="wor row">
              <div className="photo-card ">
                <label htmlFor="photo">Pilih Foto</label>
                <input
                  type="file"
                  id="photo"
                  name="photo"
                  onChange={handleFileChange}
                />
                </div>
              </div>
            </div>
          
        </form>
      </div>
    </div>
  )
}

export default Berikan


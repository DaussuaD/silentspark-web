import React, { useState, useEffect } from "react";
import axios from "axios";
import querystring from "querystring";
import "../../assets/css/berikan.css";
import { useNavigate } from "react-router-dom";
const Profile = () => {
  const [formData, setFormData] = useState({
    email: "",
    nama: "",
    jenis_kelamin: "",
    nomor_wa: "",
    no_rek: "",
    nama_bank: "",
    tempat_lahir: "",
    tanggal_lahir: "",
    alamat: "",
    photo: null, // for file upload
  });

  const navigate = useNavigate();
  useEffect(() => {
    // Fetch user profile data when component mounts
    const token = localStorage.getItem("token");
    axios
      .get("http://localhost:3000/users/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        const userData = response.data.data.user;
        setFormData({
          ...formData,
          email: userData.email,
          nama: userData.nama,
          jenis_kelamin: userData.jenis_kelamin,
          nomor_wa: userData.nomor_wa,
          no_rek: userData.no_rek,
          nama_bank: userData.nama_bank,
          tempat_lahir: userData.tempat_lahir,
          tanggal_lahir: userData.tanggal_lahir,
          alamat: userData.alamat,
        });
      })
      .catch((error) => {
        console.error("Error fetching profile data:", error);
      });
  }, []); // Empty dependency array means this effect runs only once, on mount

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      const formDataToSend = querystring.stringify({
        email: formData.email,
        nama: formData.nama,
        jenis_kelamin: formData.jenis_kelamin,
        nomor_wa: formData.nomor_wa,
        no_rek: formData.no_rek,
        nama_bank: formData.nama_bank,
        tempat_lahir: formData.tempat_lahir,
        tanggal_lahir: formData.tanggal_lahir,
        alamat: formData.alamat,
      });

      const response = await axios.post(
        "http://localhost:3000/users/profile",
        formDataToSend,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      console.log(response.data);

      // Refresh profile data after successful update
      refreshProfile();
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  const refreshProfile = () => {
    const token = localStorage.getItem("token");
    axios
      .get("http://localhost:3000/users/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        const userData = response.data.data.user;
        setFormData({
          ...formData,
          email: userData.email,
          nama: userData.nama,
          jenis_kelamin: userData.jenis_kelamin,
          nomor_wa: userData.nomor_wa,
          no_rek: userData.no_rek,
          nama_bank: userData.nama_bank,
          tempat_lahir: userData.tempat_lahir,
          tanggal_lahir: userData.tanggal_lahir,
          alamat: userData.alamat,
        });
      })
      .catch((error) => {
        console.error("Error refreshing profile data:", error);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      photo: e.target.files[0], // Store the selected file in state
    });
  };

  return (
    <div className="guru">
      <div className="form-kontainer">
        <div className="col-left">
          <form onSubmit={handleSubmit}>
            <div className="section">
              <div className="form-row">
                <div className="form-field full-width">
                  <label htmlFor="email">Email</label>
                  <input
                    className="bg-white"
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    readOnly
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-field">
                  <label htmlFor="nama">Nama</label>
                  <input
                    type="text"
                    id="nama"
                    name="nama"
                    value={formData.nama}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-field">
                  <label htmlFor="jenis_kelamin">Jenis Kelamin</label>
                  <select
                    id="jenis_kelamin"
                    name="jenis_kelamin"
                    value={formData.jenis_kelamin}
                    onChange={handleChange}
                  >
                    <option value="">Pilih Jenis Kelamin</option>
                    <option value="male">Laki-laki</option>
                    <option value="female">Perempuan</option>
                    <option value="other">Lainnya</option>
                  </select>
                </div>
                <div className="form-field">
                  <label htmlFor="nomor_wa">Nomor WhatsApp</label>
                  <input
                    type="text"
                    id="nomor_wa"
                    name="nomor_wa"
                    value={formData.nomor_wa}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-field">
                  <label htmlFor="no_rek">Nomor Rekening</label>
                  <input
                    type="text"
                    id="no_rek"
                    name="no_rek"
                    value={formData.no_rek}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="nama_bank">Nama Bank</label>
                  <input
                    type="text"
                    id="nama_bank"
                    name="nama_bank"
                    value={formData.nama_bank}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-field">
                  <label htmlFor="tempat_lahir">Tempat Lahir</label>
                  <input
                    type="text"
                    id="tempat_lahir"
                    name="tempat_lahir"
                    value={formData.tempat_lahir}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="tanggal_lahir">Tanggal Lahir</label>
                  <input
                    type="date"
                    id="tanggal_lahir"
                    name="tanggal_lahir"
                    value={formData.tanggal_lahir}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-field full-width">
                  <label htmlFor="alamat">Alamat Lengkap</label>
                  <input
                    type="text"
                    id="alamat"
                    name="alamat"
                    value={formData.alamat}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <button type="submit" className="give">
                Ubah
              </button>
            </div>
          </form>
        </div>
        <div className="col-right">
          <div className="photo-card">
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
    </div>
  );
};

export default Profile;

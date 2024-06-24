import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../assets/css/tentang.css";
import foto from "../../assets/img/bianto.png";

const Tentang = () => {
  const [averageRating, setAverageRating] = useState(0);
  const [comments, setComments] = useState([]);
  const [profile, setProfile] = useState([]);
  const [mockData, setMockData] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get("http://localhost:3000/users/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setComments(response.data.data.rating);
        calculateAverageRating(response.data.data.rating);
      })
      .catch((error) => {
        console.error("Error fetching orders:", error);
        setComments([])
      });
  }, []);

  const calculateAverageRating = (comments) => {
    if (comments.length === 0) {
      setAverageRating(0);
      return;
    }
    const totalRating = comments.reduce(
      (sum, comment) => sum + comment.rating,
      0,
    );
    const average = totalRating / comments.length;
    setAverageRating(average.toFixed(1));
  };

  const [availability, setAvailability] = useState(true);

  const toggleAvailability = () => {
    setAvailability(!availability);
  };

  return (
    <div>
      <div className="tentang-container">
        <div className="tentang-left-column">
          <div className="tentang-section">
            <h4 className="fw-bold">Tentang Anda</h4>
            <textarea
              className="tentang-textarea"
              placeholder="Deskripsi singkat tentang diri Anda ..."
            ></textarea>
            <textarea
              className="tentang-textarea"
              placeholder="Deskripsikan metode pembelajaran yang akan Anda gunakan ..."
            ></textarea>
          </div>

          <div className="tentang-section">
            <h4 className="fw-bold">Detail Tarif</h4>
            <div className="tentang-tarif">
              <label>Tarif 1 Bulan</label>
              <label>Tarif 3 Bulan</label>
              <label>Tarif 6 Bulan</label>
            </div>
            <div className="tentang-tarif">
              <input type="text" placeholder="Rp" />
              <input type="text" placeholder="Rp" />
              <input type="text" placeholder="Rp" />
            </div>
          </div>

          <div className="tentang-section">
            <h5 className="fw-bold">Hubungi</h5>
            <button className="wht">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-whatsapp"
                viewBox="0 0 16 16"
              >
                <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
              </svg>
              WhatsApp
            </button>
          </div>
        </div>

        <div className="tentang-right-column">
          <div className="tentang-profile-card">
            <img src={foto} alt="Teacher" className="tentang-teacher-photo" />
            <div className="tentang-details">
              <div className="tentang-detail">
                <p className="card-text">
                  <span className="label">Harga:</span>{" "}
                  <span className="value">Rp 900.000/bulan</span>
                </p>
              </div>
              <div className="tentang-detail">
                <p className="card-text">
                  <span className="label">Nama:</span>{" "}
                  <span className="value">A. Bianca</span>
                </p>
              </div>
              <div className="tentang-detail">
                <p className="card-text">
                  <span className="label">Sertifikat:</span>
                </p>
                <div className="toggle-switch" onClick={toggleAvailability}>
                  <div
                    className={`switch ${availability ? "available" : "not-available"}`}
                  >
                    {availability ? "Tersedia" : "Tidak"}
                  </div>
                </div>
              </div>
              <div className="tentang-detail">
                <p className="card-text">
                  <span className="label">Bahasa:</span>{" "}
                  <span className="value">Inggris, Indonesia</span>
                </p>
              </div>
              <div className="tentang-detail">
                <p className="card-text">
                  <span className="label">Ketersediaan:</span>{" "}
                  <span className="value">Senin-kamis</span>
                </p>
              </div>
            </div>
            <button className="tentang-order-button">Buat Pesanan</button>
          </div>
        </div>
      </div>

      <div className="tentang-comments">
        <h5 className="fw-bold">Apa Kata Mereka</h5>
        <div className="tentang-rating">
          <span>{averageRating}</span> dari 5
        </div>
        <div className="line"></div>
        {comments.length === 0 ? (
          <div className="tentang-no-rating">Belum ada penilaian</div>
        ) : (
          <div className="comments">
            {comments.map((comment, index) => (
              <div key={index} className="comment mb-3">
                <strong>{comment.name}</strong>
                <p>{comment.text}</p>
                <p>
                  Rating:{" "}
                  {"★".repeat(comment.rating) + "☆".repeat(5 - comment.rating)}{" "}
                  ({comment.rating}/5)
                </p>
              </div>
            ))}
          </div>
        )}
        <button className="tentang-save-button">Simpan</button>
      </div>
    </div>
  );
};

export default Tentang;

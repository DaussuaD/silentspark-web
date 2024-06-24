import React, { useContext } from 'react';
import '../assets/css/detail.css'
import guru from '../assets/img/bianto.png'

const Detail = () => {
  const handleUpload = (event) => {
    const file = event.target.files[0]; 
    console.log('File yang diunggah:', file);
  }


  return (
    <div className="class-detail">
      <div className="class-header">
        <h2 className="fw-bold">Hi, Ayu Anindya! 👋</h2>
      </div>
      <div className="class-content">
        <div className="class-access">
          <h3 className="fw-bold">Akses Kelas</h3>
          <div className="class-topic">
            <p><strong>Topik:</strong> Memahami macam isyarat (rayanda, ASL, BISINDO)</p>
            <p><strong>Zoom:</strong> <a href="https://us05web.zoom.us/j/84678954882?pwd=QU1Ncnh3V3BWTmtDdDdWVmNpNkcyaQT09">Link Zoom</a></p>
          </div>
        </div>
        <div className="class-tasks">
          <h3 className="fw-bold">Tugas Saya</h3>
          <div className="task">
            <h4 className="fw-bold">TUGAS 1</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
            <p><strong>Diberikan:</strong> 19 Mei 2024</p>
            <p><strong>Batas Waktu:</strong> 19 Mei 2024</p>
            <div className="task-upload">
              <label htmlFor="file-upload-1">File:</label>
              <input type="file" id="file-upload-1" onChange={handleUpload}/>
            </div>
            <div className="task-link">
              <label htmlFor="link-upload-1">Link:</label>
              <input type="text" id="link-upload-1" />
            </div>
            <button className="kbtn">Kirim</button>
          </div>
          <div className="task">
            <h4 className="fw-bold">TUGAS 2</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
            <p><strong>Diberikan:</strong> 26 Mei 2024</p>
            <p><strong>Batas Waktu:</strong> 26 Mei 2024</p>
            <div className="task-upload">
              <label htmlFor="file-upload-2">File:</label>
              <input type="file" id="file-upload-2" onChange={handleUpload} />
            </div>
            <div className="task-link">
              <label htmlFor="link-upload-2">Link:</label>
              <input type="text" id="link-upload-2" />
            </div>
            <button className="kbtn">Kirim</button>
          </div>
        </div>
        <div className="class-profile">
          <img src={guru} alt="Instructor" />
          <p className="class-text"><span className="label">Nama:</span> <span className="value">A. Bianca</span></p>
          <p className="class-text"><span className="label">Umur:</span> <span className="value">30</span></p>
          <p className="class-text"><span className="label">Bahasa:</span> <span className="value">Inggris, Indonesia</span></p>
          <p className="class-text"><span className="label">periode:</span> <span className="value">1</span></p>
          <p className="class-text"><span className="label">Jumlah Pertemuan:</span> <span className="value">26</span></p>
          <p className="class-text"><span className="label">Jumlah Kelas:</span> <span className="value">4</span></p>
          <p className="class-text"><span className="label">Bergabung:</span> <span className="value">01 Juni 2024</span></p>
          <a href="mailto:biancasalvador@gmail.com">biancasalvador@gmail.com</a>
          <button className="whatsapp"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-whatsapp" viewBox="0 0 16 16">
            <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
          </svg>WhatsApp</button>
        </div>
      </div>
    </div>
  );
};

export default Detail;

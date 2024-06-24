import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import '../assets/css/book.css'
import teacher from '../assets/img/bianto.png'

const Booking = () => {

    const [selectedAudienceOption, setSelectedAudienceOption] = useState('');
    const [selectedPeriodOption, setSelectedPeriodOption] = useState('');
    const navigate = useNavigate();

    const handleAudienceOptionChange = (event) => {
        setSelectedAudienceOption(event.target.value);
    };

    const handlePeriodOptionChange = (event) => {
        setSelectedPeriodOption(event.target.value);
    };

    const handlePreviousPage = () => {
      navigate(-1); // Kembali ke halaman sebelumnya
    };
  
    const handleNextPage = () => {
      event.preventDefault();
      navigate('/paymentpages'); // Navigasi ke halaman selanjutnya
    };

  return (
    <div>
      <section className="user">
        <div className="row">
         <div className="left w-50 h-100">
            <div className="col-12">
              <form className="row g-3">
                <div>
                    <h2 className="title fw-bold">Tentukan jadwal kelas anda dengan Bianca!</h2>
                </div>
                <div className="commentForm">
                    <label htmlFor="commentText">Komentar</label>
                    <textarea
                    id="commentText"
                    name="commentText"
                    rows="5"
                    style={{ width: '100%', resize: 'vertical' }}
                    required
                    ></textarea>
                </div>
                <div>
                    <h6 className="fw-bold">Informasi Kontak</h6>
                    <h6>Informasi anda akan diberikan kepada guru yang anda telah pilih</h6>   
                </div>
                <div  className="form-container">
                <div className="form-row">
                <div className="form-group">
                  <label htmlFor="inputFront" className="form-label">Nama Depan</label>
                  <input type="text" className="form-control" id="inputFront" />
                </div>
                <div className="form-group">
                  <label htmlFor="inputLast" className="form-label">Nama Belakang</label>
                  <input type="text" className="form-control" id="inputLast" />
                </div>
                </div>
                <div className="form-row">
                <div className="form-group">
                  <label htmlFor="inputWali" className="form-label">Nama Wali</label>
                  <input type="text" className="form-control" id="inputWali" />
                </div>
                <div className="form-group">
                  <label htmlFor="inputTelepon" className="form-label">Nomor Telepon</label>
                  <input type="text" className="form-control" id="inputTelepon" />
                </div>
              </div>
              </div>
                <div className="checklist-container">
                <h6 className="fw-bold">Untuk siapa kelas ini diadakan?</h6>
                <div className="checklist">
                    <div className="form-check">
                    <input
                        className="form-check-input"
                        type="radio"
                        name="audienceOption"
                        id="audienceOption1"
                        value="pemula"
                        checked={selectedAudienceOption === 'pemula'}
                        onChange={handleAudienceOptionChange}
                    />
                    <label className="form-check-label" htmlFor="audienceOption1">
                        Pemula
                    </label>
                    </div>
                    <div className="form-check">
                    <input
                        className="form-check-input"
                        type="radio"
                        name="audienceOption"
                        id="audienceOption2"
                        value="mampu"
                        checked={selectedAudienceOption === 'mampu'}
                        onChange={handleAudienceOptionChange}
                    />
                    <label className="form-check-label" htmlFor="audienceOption2">
                        Mampu
                    </label>
                    </div>
                    <div className="form-check">
                    <input
                        className="form-check-input"
                        type="radio"
                        name="audienceOption"
                        id="audienceOption3"
                        value="cakap"
                        checked={selectedAudienceOption === 'cakap'}
                        onChange={handleAudienceOptionChange}
                    />
                    <label className="form-check-label" htmlFor="audienceOption3">
                        Cakap
                    </label>
                    </div>
                </div>
                </div>

                <div className="checklist-container">
                <h6 className="fw-bold">Periode pesanan kelas</h6>
                <div className="checklist">
                    <div className="form-check">
                    <input
                        className="form-check-input"
                        type="radio"
                        name="periodOption"
                        id="periodOption1"
                        value="1 bulan"
                        checked={selectedPeriodOption === '1 bulan'}
                        onChange={handlePeriodOptionChange}
                    />
                    <label className="form-check-label" htmlFor="periodOption1">
                        1 bulan
                    </label>
                    </div>
                    <div className="form-check">
                    <input
                        className="form-check-input"
                        type="radio"
                        name="periodOption"
                        id="periodOption2"
                        value="2 bulan"
                        checked={selectedPeriodOption === '2 bulan'}
                        onChange={handlePeriodOptionChange}
                    />
                    <label className="form-check-label" htmlFor="periodOption2">
                        3 bulan
                    </label>
                    </div>
                    <div className="form-check">
                    <input
                        className="form-check-input"
                        type="radio"
                        name="periodOption"
                        id="periodOption3"
                        value="3 bulan"
                        checked={selectedPeriodOption === '6 bulan'}
                        onChange={handlePeriodOptionChange}
                    />
                    <label className="form-check-label" htmlFor="periodOption3">
                        6 bulan
                    </label>
                    </div>
                </div>
                </div>
                <div className="button-group">
                    <button className="button btn-secondary" onClick={handlePreviousPage}>Kembali</button>
                    <button className="button btn-primary" onClick={handleNextPage}>Lanjut</button>
                </div>
              </form>
            </div>
          </div>
        

        <div className="right w-50 h-100">
          <div className="row justify-content-center align-items-center">
            <div className="col-6">
              <div className="cardteacher text-center">
                <img src={teacher} className="card-img-top" id="cardImage" alt="Profile" />
                <div className="card-body">
                    <div className="info-row">
                        <p className="card-text"><span className="label">Harga:</span> <span className="value">Rp 900.000/bulan</span></p>
                    </div>
                    <div className="info-row">
                        <p className="card-text"><span className="label">Nama guru:</span> <span className="value">A. Bianca</span></p>
                    </div>
                    <div className="info-row">
                        <p className="card-text"><span className="label">Ketersediaan:</span> <span className="value">07.00-17.00</span></p>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>
    </div>
  )
}

export default Booking

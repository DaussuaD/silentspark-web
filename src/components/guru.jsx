import React, { useState, useEffect } from 'react';
import teacher from '../assets/img/bianto.png';
import { useNavigate } from 'react-router-dom';

const Guru = ({ guruId = 'dummyGuruId'}) => {
  const [comments, setComments] = useState([]);
  const [averageRating, setAverageRating] = useState(0);
  const [commenterName, setCommenterName] = useState('');
  const [commentText, setCommentText] = useState('');
  const [commentRating, setCommentRating] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    // Gunakan mock data alih-alih fetch dari backend
    const mockData = {
      averageRating: 4.2,
      comments: [
        { name: 'Siswa 1', text: 'Guru yang sangat baik!', rating: 5 },
        { name: 'Siswa 2', text: 'Penjelasan sangat jelas.', rating: 4 },
      ],
    };
    setAverageRating(mockData.averageRating);
    setComments(mockData.comments);
  }, [guruId]);

  const handleNavigate = () => {
      navigate('/bookingpages')
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const newComment = {
      name: commenterName,
      text: commentText,
      rating: parseInt(commentRating),
    };
    setComments([...comments, newComment]);
    setCommenterName('');
    setCommentText('');
    setCommentRating(1);
    alert('Rating berhasil dikirim (mock)!');
  };

  const getStarRating = (rating) => {
    return '★'.repeat(rating) + '☆'.repeat(5 - rating);
  };

  return (
    <div>
      <section className="teacher">
        <div className="container">
          <div className="row">
            {/* About the Teacher Section */}
            <div className="col-md-8 mb-4 order-1">
              <h5 className="fw-bold">Tentang Guru</h5>
              <p>Saya adalah Bianca Savador, pendidik yang bersemangat dan berkomitmen untuk membantu Anda menjelajahi keindahan dan kekuatan komunikasi melalui bahasa isyarat.
                Di kelas-kelas saya, Anda tidak hanya akan belajar keterampilan baru, tetapi juga merasakan kehangatan dan dukungan dari komunitas yang inklusif.
              </p>

              {/* Class Details Section */}
              <h5 className="fw-bold">Detail Kelas</h5>
              <p>Mengajarkan bahasa isyarat untuk tinarungu dengan metode MMR dengan pendekatan yang ramah dan menyenangkan dan sistem isyarat bahas indonesia (sibi).
                Interaktif, komunikatif serta mudah di fahami. Dengan pendekatan membangun komunikasi yang baik dan memotivasi siswa supaya percaya diri.
              </p>

              {/* Fee Details Section */}
              <h5 className="fw-bold">Detail Tarif</h5>
              <div className="row">
                <div className="col-md-3">
                  <div className="card fee-card">
                    <div className="card-body">
                      <h5 className="card-title">Tarif 1 Bulan</h5>
                      <p className="card-text">Rp 900.000</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="card fee-card">
                    <div className="card-body">
                      <h5 className="card-title">Tarif 3 Bulan</h5>
                      <p className="card-text">Rp 2.999.000</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="card fee-card">
                    <div className="card-body">
                      <h5 className="card-title">Tarif 6 Bulan</h5>
                      <p className="card-text">Rp 5.499.000</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="WhatsApp">
                <h5 className="fw-bold">Hubungi</h5>
                <p><a href="mailto:biancasavandar@gmail.com">biancasavandar@gmail.com</a></p>
                <button>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-whatsapp" viewBox="0 0 16 16">
                    <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
                  </svg>
                  WhatsApp
                </button>
              </div>

              {/* Comments Section */}
              <h5 className="fw-bold">Apa kata dari mereka?</h5>
              <div className="comments">
                {comments.map((comment, index) => (
                  <div key={index} className="comment mb-3">
                    <strong>{comment.name}</strong>
                    <p>{comment.text}</p>
                    <p>Rating: {getStarRating(comment.rating)} ({comment.rating}/5)</p>
                  </div>
                ))}
              </div>
              <div className="comment-form">
                <h4>Tambahkan Komentar</h4>
                <form onSubmit={handleSubmit}>
                  <label htmlFor="commenterName">Nama</label>
                  <input type="text" id="commenterName" name="commenterName" value={commenterName} onChange={(e) => setCommenterName(e.target.value)} required />
                  <label htmlFor="commentText">Komentar</label>
                  <textarea id="commentText" name="commentText" value={commentText} onChange={(e) => setCommentText(e.target.value)} required></textarea>
                  <label htmlFor="commentRating">Rating</label>
                  <input type="number" id="commentRating" name="commentRating" min="1" max="5" value={commentRating} onChange={(e) => setCommentRating(e.target.value)} required />
                  <button type="submit" className="btn btn-outline">Kirim</button>
                </form>
              </div>
            </div>


              {/* Teacher Profile Section */}
              <div className="col-md-4 order-2">
                <div className="card profile-card text-center">
                  <img src={teacher} className="card-img-top" alt="Teacher Photo" />
                  <div className="card-body">
                    <p className="card-text">Nama Guru: Bianca Savandar</p>
                    <p className="card-text">Sertifikat: Tersedia</p>
                    <p className="card-text">Bahasa: Indonesia, English</p>
                    <p className="card-text">Jam Kelas: 07.00-16.00 jam</p>
                    <p className="card-text"><strong>Harga: Rp 900.000 per bulan</strong></p>
                    <button type="button" className="btn" onClick={handleNavigate}>
                        Pesan Sekarang
                    </button>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Guru;

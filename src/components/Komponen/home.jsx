import React from 'react'
import '../../assets/css/home.css'
import foto from '../../assets/img/home.png'
import about1 from '../../assets/img/clients/tentang.png'
import about2 from '../../assets/img/clients/image 4.png'
import about3 from '../../assets/img/clients/image 3.png'

const Home = () => {
  return (
    <div>
      <div className="home-container">
        <div className="image-container">
          <div className="image-background">
            <img src={foto} alt="Layanan Bahasa Isyarat" />
          </div>
        </div>

        <div className="content">
          <h1>Layanan Bahasa Isyarat</h1>
          <p className="subtitle">
            Dapatkan Pembelajaran Bahasa Isyarat Praktis, Belajar Dimanapun dan Kapanpun
            Proses belajar secara daring bersama Guru Bahasa Isyarat dari SilentSpark
          </p>
          
        </div>
      </div>

      <section id="about" className="about">
        <div className="container">
          <div className="section-title">
            <h2>Pembelajaran Bahasa Isyarat Online</h2>
          </div>
          <div className="row">
            <div className="col-lg-6 order-1 order-lg-2">
              <img src={about1} className="img-fluid" alt="About 1" />
            </div>
            <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
              <h3>Selamat belajar di SilentSpark Pijar Pembelajaran Bahasa Isyarat di Indonesia.</h3>
              <p className="fst-italic">
                Percayakan SilentSpark sebagai pilihan Anda untuk belajar Bahasa Isyarat bersama guru terpercaya.
              </p>
              <div className="line"></div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-6 order-1 order-lg-2">
              <h3 className="fw-bold">Mengenal SilentSpark.</h3>
              <p className="fst-italic">
                SilentSpark adalah platform pembelajaran Bahasa Isyarat online yang menghubungkan pengajar dan siswa yang ingin mempelajari Bahasa Isyarat. 
                Dengan SilentSpark, siswa dapat mengakses pembelajaran kapan pun mereka mau, dengan jadwal yang dapat disesuaikan sesuai kebutuhan masing-masing. 
                Ini menjadikan SilentSpark sebagai solusi pembelajaran Bahasa Isyarat yang fleksibel dan mudah diakses.
              </p>
              <div className="line"></div>
            </div>
            <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
              <img src={about2} className="img-fluid" alt="About 2" />
            </div>
          </div>

          <div className="row">
            <div className="col-lg-6 order-1 order-lg-2">
              <img src={about3} className="img-fluid" alt="About 3" />
            </div>
            <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
              <h3>Visi & Misi dari SilentSpark.</h3>
              <div className="line"></div>
              <p className="fst-italic">
                Menjadi pionir dalam memperluas akses dan pemahaman terhadap bahasa isyarat di seluruh Indonesia, 
                mendorong inklusi dan komunikasi yang lebih baik bagi komunitas penyandang cacat pendengaran.
              </p>
              <ul>
                <li><i className="bi bi-check-circled"></i> Memberikan akses mudah dan fleksibel ke pembelajaran bahasa isyarat melalui platform digital inovatif dan ramah pengguna.</li>
                <li><i className="bi bi-check-circled"></i> Menyediakan lingkungan pembelajaran inklusif dan mendukung bagi semua siswa, tanpa memandang latar belakang atau tingkat pendengaran.</li>
                <li><i className="bi bi-check-circled"></i> Memberikan dukungan berkelanjutan melalui konseling akademik, mentoring, dan sumber daya tambahan untuk memfasilitasi pemahaman dan penguasaan bahasa isyarat.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

    </div>
    
  )
}

export default Home

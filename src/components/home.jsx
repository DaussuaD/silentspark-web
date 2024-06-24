import React, {useEffect} from 'react'
import Swiper from 'swiper'
import 'swiper/swiper-bundle.css'
import slide1 from '../assets/img/slide/slide-1.jpg'
import slide2 from '../assets/img/slide/slide-2.jpg'
import slide3 from '../assets/img/slide/slide-3.jpg'
import about1 from '../assets/img/teacher/about (1).jpg'
import about2 from '../assets/img/teacher/about (2).jpg'
import about3 from '../assets/img/teacher/about (3).jpg'
import guru1 from '../assets/img/bianto.png'
import guru2 from '../assets/img/teacher/guru (2).jpeg'
import guru3 from '../assets/img/teacher/guru (3).jpeg'
import guru4 from '../assets/img/teacher/guru (4).jpeg'
import guru5 from '../assets/img/teacher/guru (5).jpeg'
import guru6 from '../assets/img/teacher/guru (6).jpeg'
import team1 from '../assets/img/team/team-1.jpg'
import team2 from '../assets/img/team/team-2.jpg'
import team3 from '../assets/img/team/team-3.jpg'
import { useNavigate } from 'react-router-dom'



const Home = () => {

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/gurupages')
  }

    useEffect(() => {
      const initSwiper = () => {
      new Swiper('.clients-slider', {
        speed: 400,
        loop: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false
        },
        slidesPerView: 'auto',
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true
        },
        breakpoints: {
          320: {
            slidesPerView: 2,
            spaceBetween: 40
          },
          480: {
            slidesPerView: 3,
            spaceBetween: 60
          },
          640: {
            slidesPerView: 4,
            spaceBetween: 80
          },
          992: {
            slidesPerView: 6,
            spaceBetween: 120
          }
        }
      });
    };

    initSwiper();

    return () => {
      // Cleanup jika diperlukan
    };
  }, []);

  useEffect(() => {
    const initHeroCarouselIndicators = () => {
      const heroCarouselIndicators = document.querySelector("#hero-carousel-indicators");
      const heroCarouselItems = document.querySelectorAll('#heroCarousel .carousel-item');

      heroCarouselItems.forEach((item, index) => {
        heroCarouselIndicators.innerHTML += index === 0 ? 
          `<li data-bs-target='#heroCarousel' data-bs-slide-to='${index}' class='active'></li>` :
          `<li data-bs-target='#heroCarousel' data-bs-slide-to='${index}'></li>`;
      });
    };

    initHeroCarouselIndicators();

    return () => {
      // Cleanup jika diperlukan
    };
  }, []);

  

  return (
    <div className='home'>
        <section id="hero">
            <div id="heroCarousel" data-bs-interval="5000" className="carousel slide carousel-fade" data-bs-ride="carousel">
              <ol className="carousel-indicators" id="hero-carousel-indicators"></ol>
                <div className="carousel-inner" role="listbox">
                  <div className="carousel-item active">
                    <img src={slide1} alt="Slide 1"/>
                    <div className="carousel-container">
                    <div className="container">
                        <h2 className="animate__animated animate__fadeInDown">Welcome to <span>Silent Spark</span></h2>
                        <p className="animate__animated animate__fadeInUp">Dapatkan Pembelajaran Bahasa Isyarat Praktis, Belajar Dimanapun dan Kapanpun</p>
                        <a href="#about" className="btn-get-started animate__animated animate__fadeInUp scrollto">Read More</a>
                    </div>
                </div>
            </div>

            <div className="carousel-item">
              <img src={slide2} />
                <div className="carousel-container">
                    <div className="container">
                        <h2 className="animate__animated animate__fadeInDown">Layanan Bahasa Isyarat</h2>
                        <p className="animate__animated animate__fadeInUp">Proses belajar secara daring bersama Guru Bahasa Isyarat dari SilentSpark.</p>
                    </div>
                </div>
            </div>

            <div className="carousel-item">
              <img src={slide3} />
                <div className="carousel-container">
                    <div className="container">
                        <h2 className="animate__animated animate__fadeInDown">Website Pendidikan Online Bahasa Isyarat</h2>
                        <p className="animate__animated animate__fadeInUp">Platform inovatif yang dirancang untuk membantu penderita tunarungu mempelajari bahasa isyarat dengan benar.</p>
                    </div>
                </div>
            </div>
        </div>
        <a className="carousel-control-prev" href="#heroCarousel" role="button" data-bs-slide="prev">
            <span className="carousel-control-prev-icon bi bi-chevron-left" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </a>
        <a className="carousel-control-next" href="#heroCarousel" role="button" data-bs-slide="next">
            <span className="carousel-control-next-icon bi bi-chevron-right" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </a>
      </div>
  </section>


        <section id="about" className="about">
            <div className="container">
                <div className="section-title">
                    <h2>Pembelajaran Bahasa Isyarat Online</h2>
                </div>
                    <div className="row">
                        <div className="col-lg-6 order-1 order-lg-2">
                            <img src={about1} className="img-fluid"/>
                        </div>
                    <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
                        <h3>Selamat belajar di SilentSpark Pijar Pembelajaran Bahasa Isyarat di Indonesia.</h3>
                        <p className="fst-italic">
                        Percayakan SilentSpark sebagai pilihan Anda untuk belajar Bahasa Isyarat bersama guru terpercaya.
                        </p>
                    </div>
                </div>

                <div className="row">
                <div className="col-lg-6 order-1 order-lg-2">
                    <h3 className="fw-bold">Mengenal SilentSpark.</h3>
                    <p className="fst-italic ml-10">
                    SilentSpark adalah platform pembelajaran Bahasa Isyarat online yang menghubungkan pengajar dan siswa yang ingin mempelajari Bahasa Isyarat. 
                    Dengan SilentSpark, siswa dapat mengakses pembelajaran kapan pun mereka mau, dengan jadwal yang dapat disesuaikan sesuai kebutuhan masing-masing. 
                    Ini menjadikan SilentSpark sebagai solusi pembelajaran Bahasa Isyarat yang fleksibel dan mudah diakses.
                    </p>
                </div>
                <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
                    <img src={about2} className="img-fluid"/>
                </div>
                </div>

                <div className="row">
                <div className="col-lg-6 order-1 order-lg-2">
                    <img src={about3} className="img-fluid"/> 
                </div>
                <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
                    <h3>Visi & Misi dari SilentSpark.</h3>
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

    <section id="teacher" className="teacher section-bg">
      <div className="container">
        <div className="section-title">
          <h2>Class</h2>
          <p>Silent Spark adalah ruang belajar yang dirancang untuk semua orang yang ingin mempelajari bahasa isyarat, khususnya untuk penderita tunarungu. Ruang ini menyediakan pembelajaran interaktif dan fasilitas yang mendukung untuk memahami dan berkomunikasi dalam bahasa isyarat.</p>
        </div>
        <div className="row">

          <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
            <div className="class">
              <img src={guru1} />
              <h4>Bianca A.</h4>
              <p>Seorang ahli dalam bahasa isyarat dengan pengalaman mengajar selama 10 tahun.</p>
              <button className="message-button " onClick={handleNavigate}>Pesan Sekarang</button>
            </div>
          </div>
         
          <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
            <div className="class">
              <img src={guru2} />
              <h4>Bianca A.</h4>
              <p>Seorang ahli dalam bahasa isyarat dengan pengalaman mengajar selama 10 tahun.</p>
              <button href="#" className="message-button">Pesan Sekarang</button>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
            <div className="class">
              <img src={guru3}/>
              <h4>Bianca A.</h4>
              <p>Seorang ahli dalam bahasa isyarat dengan pengalaman mengajar selama 10 tahun.</p>
              <button href="#" className="message-button">Pesan Sekarang</button>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
            <div className="class">
              <img src={guru4}/>
              <h4>Bianca A.</h4>
              <p>Seorang ahli dalam bahasa isyarat dengan pengalaman mengajar selama 10 tahun.</p>
              <button href="#" className="message-button">Pesan Sekarang</button>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
            <div className="class">
              <img src={guru5} />
              <h4>Bianca A.</h4>
              <p>Seorang ahli dalam bahasa isyarat dengan pengalaman mengajar selama 10 tahun.</p>
              <button href="#" className="message-button">Pesan Sekarang</button>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
            <div className="class">
              <img src={guru6} />
              <h4>Bianca A.</h4>
              <p>Seorang ahli dalam bahasa isyarat dengan pengalaman mengajar selama 10 tahun.</p>
              <button href="#" className="message-button">Pesan Sekarang</button>
            </div>
          </div>

        </div>
      </div>
    </section>

    <section id="team" className="team section-bg">
      <div className="container">
        <div className="section-title">
          <h2>Team</h2>
          <p>Bersama-sama, kita membuat perbedaan besar. Mari terus bekerja keras untuk menyediakan akses pendidikan yang lebih baik bagi semua orang tunarungu.</p>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
            <div className="member">
              <img src={team1}/>
              <h4>Prayogarayanto Dheka Putro</h4>
              <span>Hustler Ganesha Ventures</span>
              <p>---------------------------------------------------------------------</p>
              <div className="social">
                <a href=""><i className="bi bi-twitter"></i></a>
                <a href=""><i className="bi bi-facebook"></i></a>
                <a href=""><i className="bi bi-instagram"></i></a>
                <a href=""><i className="bi bi-linkedin"></i></a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
            <div className="member">
              <img src={team2} />
              <h4>Kartika Yuni Rahmawati</h4>
              <span>Hipster Ganesha Ventures</span>
              <p>---------------------------------------------------------------------</p>
              <div className="social">
                <a href=""><i className="bi bi-twitter"></i></a>
                <a href=""><i className="bi bi-facebook"></i></a>
                <a href=""><i className="bi bi-instagram"></i></a>
                <a href=""><i className="bi bi-linkedin"></i></a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
            <div className="member">
              <img src={team2}/>
              <h4>Rani Dhever Hani</h4>
              <span>Hipster Ganesha Ventures</span>
              <p>---------------------------------------------------------------------</p>
              <div className="social">
                <a href=""><i className="bi bi-twitter"></i></a>
                <a href=""><i className="bi bi-facebook"></i></a>
                <a href=""><i className="bi bi-instagram"></i></a>
                <a href=""><i className="bi bi-linkedin"></i></a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
            <div className="member">
              <img src={team2}/>
              <h4>Grenita Manalu</h4>
              <span>Hacker Ganesha Ventures</span>
              <p>---------------------------------------------------------------------</p>
              <div className="social">
                <a href=""><i className="bi bi-twitter"></i></a>
                <a href=""><i className="bi bi-facebook"></i></a>
                <a href=""><i className="bi bi-instagram"></i></a>
                <a href=""><i className="bi bi-linkedin"></i></a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
            <div className="member">
              <img src={team3} />
              <h4>Firdaus Rizky Saputra</h4>
              <span>Hacker Ganesha Ventures</span>
              <p>---------------------------------------------------------------------</p>
              <div className="social">
                <a href=""><i className="bi bi-twitter"></i></a>
                <a href=""><i className="bi bi-facebook"></i></a>
                <a href=""><i className="bi bi-instagram"></i></a>
                <a href=""><i className="bi bi-linkedin"></i></a>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>

      
      
    </div>
  )
}

export default Home

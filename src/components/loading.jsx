import React, { useState, useEffect } from 'react';
import teacher from '../assets/img/bianto.png';
import { useLocation, useNavigate } from 'react-router-dom';

const Loading = () => {

        const Location = useLocation();
        const navigate = useNavigate();
        const {hargaItem, total} = location.state || {};

        const [paymentMethod, setPaymentMethod] = useState('Bank');
        const [bank, setBank] = useState('');
        const [eWallet, setEWallet] = useState('');
        const [timeLeft, setTimeLeft] = useState(5); // 24 hours in seconds

        useEffect(() => {
            const interval = setInterval(() => {
            setTimeLeft((prevTimeLeft) => (prevTimeLeft > 0 ? prevTimeLeft - 1 : 0));
            }, 1000);

            if (timeLeft === 0) {
              navigate('/failed'); 
          }

            return () => clearInterval(interval);
        }, [timeLeft, navigate]);

        const handlePaymentMethodChange = (e) => {
            setPaymentMethod(e.target.value);
            setBank('');
            setEWallet('');
        };

        const handleNavigate = () => {
          navigate('/succes')
        }

        // Handler untuk mengubah harga item
        

        const formatTime = (seconds) => {
            const hrs = Math.floor(seconds / 3600);
            const mins = Math.floor((seconds % 3600) / 60);
            const secs = seconds % 60;
            return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
        };

  return (
    <div>
      <div className="pas-payment-page">
        <div className="pas-payment-form">
          <h2 className="pas-pay fw-bold">Pembayaran</h2>
          <div className="pas-line"></div>
          <form>
            <div>
              <input
                type="radio"
                id="pas-e-wallet"
                name="payment-method"
                value="E-Wallet"
                checked={paymentMethod === 'E-Wallet'}
                onChange={handlePaymentMethodChange}
              />
              <label htmlFor="pas-e-wallet">E-Wallet</label>
            </div>
            <div>
              <input
                type="radio"
                id="pas-bank"
                name="payment-method"
                value="Bank"
                checked={paymentMethod === 'Bank'}
                onChange={handlePaymentMethodChange}
              />
              <label htmlFor="pas-bank">Bank</label>
            </div>
            {paymentMethod === 'E-Wallet' && (
              <>
                <select className="bg-white" value={eWallet} onChange={(e) => setEWallet(e.target.value)}>
                  <option value="">Pilih E-Wallet Kamu</option>
                  <option value="gopay">GoPay</option>
                  <option value="ovo">OVO</option>
                  <option value="shopeepay">ShopeePay</option>
                  <option value="dana">Dana</option>
                </select>
              </>
            )}
            {paymentMethod === 'Bank' && (
              <>
                <select className="bg-white" value={bank} onChange={(e) => setBank(e.target.value)}>
                  <option value="">Pilih Bank Kamu</option>
                  <option value="Mandiri">Mandiri</option>
                  <option value="BNI">BNI</option>
                  <option value="BSI">BSI</option>
                  <option value="BTN">BTN</option>
                  <option value="BRI">BRI</option>
                  <option value="Danamon">Danamon</option>
                  <option value="Bukopin">Bukopin</option>
                </select>
              </>
            )}
            <p>Lakukan Pembayaran Dalam</p>
            <div className="pas-countdown-timer">
              {formatTime(timeLeft)}
            </div>
            <button type="submit" onClick={handleNavigate}>Konfirmasi Status Pembayaran</button>
          </form>
          <p className="pas-privacy-text">
            Data pribadi Anda akan digunakan untuk kepentingan pemesanan, mendukung pengalaman Anda di website ini, dan untuk tujuan lain yang dijelaskan dalam kebijakan privasi kami.
          </p>
        </div>
        <div className="pas-order-summary">
          <h2 className="pas-order fw-bold">Rincian Pesanan</h2>
          <div className="pas-line2"></div>
          <div className="pas-order-item">
            <div>
              <img src={teacher} alt="guru" width="68" height="70" />
              <h5 className="fw-bold">Belajar Bahasa Isyarat 1 Bulan</h5>
              <h6>Bianca Salvador</h6>
              <p>Rp 980.000,00
              </p>
            </div>
          </div>
          <div className="pas-order-total">
            <div className="pas-line3"></div>
            <div>
              <span>Biaya Registrasi</span>
              <span>Rp 100.000,00</span>
            </div>
            <div>
              <span>Total</span>
              <span>Rp 1.080.000,00</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;

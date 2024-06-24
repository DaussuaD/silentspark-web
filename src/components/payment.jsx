import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import teacher from '../assets/img/bianto.png';
 // Path ke CSS khusus untuk Payment

const Payment = () => {
    const [paymentMethod, setPaymentMethod] = useState('Bank');
    const [bank, setBank] = useState('');
    const [accountNumber, setAccountNumber] = useState('');
    const [eWallet, setEWallet] = useState('');
    const [eWalletNumber, setEWalletNumber] = useState('');
    const [hargaItem, setHargaItem] = useState('');
    const biayaRegistrasi = 100000;
    const total = (isNaN(Number(hargaItem)) ? 0 : Number(hargaItem)) + biayaRegistrasi;
    const navigate = useNavigate();

    const handlePaymentMethodChange = (e) => {
        setPaymentMethod(e.target.value);
        setBank('');
        setAccountNumber('');
        setEWallet('');
        setEWalletNumber('');
    };

    const handleUbahHarga = (event) => {
        setHargaItem(event.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {
            paymentMethod,
            bank,
            accountNumber,
            eWallet,
            eWalletNumber,
            hargaItem,
            total
        };
        console.log('formData:', formData);
        navigate('/loadingpages', { state: formData });
    };

    return (
        <div className="payment-page">
            <div className="payment-form">
                <h2 className="pay fw-bold">Pembayaran</h2>
                <div className="line"></div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <input
                            type="radio"
                            id="e-wallet"
                            name="payment-method"
                            value="E-Wallet"
                            checked={paymentMethod === 'E-Wallet'}
                            onChange={handlePaymentMethodChange}
                        />
                        <label htmlFor="e-wallet">E-Wallet</label>
                    </div>
                    <div>
                        <input
                            type="radio"
                            id="bank"
                            name="payment-method"
                            value="Bank"
                            checked={paymentMethod === 'Bank'}
                            onChange={handlePaymentMethodChange}
                        />
                        <label htmlFor="bank">Bank</label>
                    </div>
                    {paymentMethod === 'E-Wallet' && (
                        <>
                            <select className="bg-white"     value={eWallet} onChange={(e) => setEWallet(e.target.value)}>
                                <option value="">Pilih E-Wallet</option>
                                <option value="OVO">OVO</option>
                                <option value="GoPay">GoPay</option>
                                <option value="Dana">Dana</option>
                                <option value="LinkAja">LinkAja</option>
                            </select>
                            <input className="bg-white" 
                                type="text"
                                placeholder="Nomor E-Wallet"
                                value={eWalletNumber}
                                onChange={(e) => setEWalletNumber(e.target.value)}
                            />
                        </>
                    )}
                    {paymentMethod === 'Bank' && (
                        <>
                            <select className="bg-white"     value={bank} onChange={(e) => setBank(e.target.value)}>
                                <option value="">Pilih Bank</option>
                                <option value="BCA">BCA</option>
                                <option value="Mandiri">Mandiri</option>
                                <option value="BNI">BNI</option>
                                <option value="BSI">BSI</option>
                                <option value="BTN">BTN</option>
                                <option value="BRI">BRI</option>
                                <option value="Danamon">Danamon</option>
                                <option value="Bukopin">Bukopin</option>
                            </select>
                            <input className="bg-white" 
                                type="text"
                                placeholder="Nomor Rekening"
                                value={accountNumber}
                                onChange={(e) => setAccountNumber(e.target.value)}
                            />
                        </>
                    )}
                    <p>Lakukan Pembayaran Dalam</p>
                    <div className="countdown-timer">
                        {/* Countdown Timer Logic */}
                    </div>
                    <button type="submit">Konfirmasi Status Pembayaran</button>
                </form>
                <p className="privacy-text">
                    Data pribadi Anda akan digunakan untuk kepentingan pemesanan, mendukung pengalaman Anda di website ini, dan untuk tujuan lain yang dijelaskan dalam kebijakan privasi kami.
                </p>
            </div>
            <div className="order-summary">
                <h2 className="order fw-bold">Rincian Pesanan</h2>
                <div className="line2"></div>
                <div className="order-item">
                    <div>
                        <img src={teacher} alt="guru" width="68" height="70" />
                        <h5 className="fw-bold">Belajar Bahasa Isyarat 1 Bulan</h5>
                        <h6>Bianca Salvador</h6>
                        <p>Rp
                            <input
                                type="number"
                                value={hargaItem}
                                onChange={handleUbahHarga}
                            />
                            ,00
                        </p>
                    </div>
                </div>
                <div className="order-total">
                    <div className="line3"></div>
                    <div>
                        <span>Biaya Registrasi</span>
                        <span>Rp 100.000,00</span>
                    </div>
                    <div>
                        <span>Total</span>
                        <span>Rp {total.toLocaleString('id-ID')},00</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;

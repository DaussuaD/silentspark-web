import React, {useState} from 'react'
import '../../assets/css/superAdmin.css'

const LoginAdmin = () => {
    const dummyUsers = [
        { username: 'admin', password: 'admin' },
        { username: 'user2', password: 'password2' },
        
      ];
    
      const [username, setUsername] = useState('');
      const [password, setPassword] = useState('');
    
      const handleSubmit = (event) => {
        event.preventDefault();
    
        
        const user = dummyUsers.find(
          (user) => user.username === username && user.password === password
        );
    
        if (user) {
          
          console.log('Login successful!');
          
          window.location.href = '/dashboardPages';
        } else {
          alert('Username atau password salah.');
        }
      };

  return (
    <div className="page-container">
        <div className="loginAdmin-container">
            <h4 className="loginAdmin-title">Silent Spark</h4>

            <form className="loginAdmin-form" onSubmit={handleSubmit}>
                <div className="admin-input-group">
                    <label htmlFor="username">Nama Pengguna</label>
                        <input type="text"
                            id="username" 
                            placeholder="Masukkan username..."
                            name="username"
                            value={username}
                            onChange={(event) => setUsername(event.target.value)}
                            />
                </div>

                <div className="login-input-group">
                    <label htmlFor="password">Kata Sandi</label>
                        <input
                            type="password"
                            placeholder="masukkan password..."
                            id="password"
                            name="password"
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                            />
                </div>

                <div className="admin-button">
                    <button type="submit" >Masuk</button>
                </div>
            </form>
        </div>
                <div className="admin-info"> 
                    <p>Super admin hanya dapat diakses menggunakan akun khusus yang
                    diberikan oleh tim pengembang website.</p>
                </div>
    </div>
  )
}

export default LoginAdmin



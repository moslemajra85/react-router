import { useNavigate } from 'react-router-dom';
const Login = () => {
  const navigate = useNavigate();
  
  const handleLogin = () => {
    localStorage.setItem('auth', 'true');

    navigate('/dashboard');
  };
  return (
    <div>
      <h2
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          fontSize: '2rem',
          marginBottom: '16px',
        }}
      >
        <span role="img" aria-label="lock">
          🔒
        </span>
        Login to Your Account
      </h2>
      <button
        onClick={handleLogin}
        style={{
          padding: '10px 24px',
          fontSize: '1rem',
          borderRadius: '6px',
          background: '#1976d2',
          color: '#fff',
          border: 'none',
          cursor: 'pointer',
          marginBottom: '16px',
        }}
      >
        <span role="img" aria-label="key" style={{ marginRight: '8px' }}>
          🔑
        </span>
        Login
      </button>
    </div>
  );
};

export default Login;

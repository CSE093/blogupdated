import { useState } from 'react';
import { useRouter } from 'next/router';


export default function LoginPage() {
  const [role, setRole] = useState('user');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = () => {
    if (role === 'admin') {
      localStorage.setItem('isAdmin', 'true');
      router.push('/admin');
    } else {
      localStorage.setItem('isAdmin', 'false');
      router.push('/user');
    }
  };

  return (
    <div className="login-container">
      <h1 className="login-title">Login Portal</h1>

      <select
        className="role-select"
        value={role}
        onChange={(e) => setRole(e.target.value)}
      >
        <option value="user">User</option>
        <option value="admin">Admin</option>
      </select>

      <input
        className="input-field"
        type="text"
        placeholder="Enter Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <input
        className="input-field"
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button className="login-button" onClick={handleLogin}>
        Login as {role}
      </button>
    </div>
  );
}

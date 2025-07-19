import Link from 'next/link';

export default function HelpPage() {
  return (
    <div style={{
      padding: '40px',
      maxWidth: '700px',
      margin: '0 auto',
      backgroundColor: '#111',        
      color: '#f0f0f0',                 
      fontFamily: 'Arial, sans-serif',
      borderRadius: '12px',
      boxShadow: '0 0 12px rgba(255, 255, 255, 0.1)'
    }}>
      <h1 style={{ 
        fontSize: '32px', 
        textAlign: 'center', 
        marginBottom: '20px',
        color: 'white'
      }}>
        Help & Support
      </h1>

      <p style={{ fontSize: '16px', marginBottom: '20px' }}>
        If you need any assistance, feel free to contact us.
      </p>

      <ul style={{ 
        lineHeight: '1.8', 
        paddingLeft: '20px', 
        fontSize: '16px' 
      }}>
        <li><strong>Email:</strong> <span style={{ color: '#ffd700' }}>support@foodblog.com</span></li>
        <li><strong>Phone:</strong> <span style={{ color: '#ffd700' }}>+91 98765 43210</span></li>
        <li><strong>Working Hours:</strong> Mon–Fri, 9:00 AM – 6:00 PM</li>
      </ul>

      <p style={{ marginTop: '20px', fontSize: '16px' }}>
        For common questions, visit our FAQ section (coming soon).
      </p>

      <p style={{ marginTop: '40px', textAlign: 'center' }}>
        <Link href="/" style={{
          display: 'inline-block',
          padding: '10px 20px',
          backgroundColor: '#e74c3c',
          color: '#fff',
          textDecoration: 'none',
          borderRadius: '6px',
          fontWeight: 'bold',
          transition: 'background 0.3s ease',
        }}>
          Back to Home
        </Link>
      </p>
    </div>
  );
}

import { NextPage } from 'next';
import Link from 'next/link';

const HomePage: NextPage = () => {
  return (
    <div className="container">
      <h1>Welcome to the Main Page</h1>
      <p>
        <Link href="/login">
          <a className="login-link">Go to Login Page</a>
        </Link>
      </p>
      <style jsx>{`
        .container {
          max-width: 600px;
          margin: 0 auto;
          padding: 2rem;
          text-align: center;
        }
        .login-link {
          color: #0070f3;
          text-decoration: none;
          font-weight: bold;
        }
        .login-link:hover {
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
};

export default HomePage;

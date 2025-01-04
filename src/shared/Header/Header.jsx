import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();
  const logout = e => {
    e.preventDefault();
    navigate('/');
    localStorage.removeItem('idToken');
    localStorage.removeItem('localId');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('email');
  };

  const verifyHandler = async () => {
    try {
      await axios.post(
        import.meta.env.VITE_VERIFY_EMAIL,
        {
          requestType: 'VERIFY_EMAIL',
          idToken: localStorage.idToken,
        },
        { headers: { 'Content-Type': 'application/json' } }
      );
      toast.success('Verification link has been sent to your email successfully');
      alert('Verification link has been sent to your email successfully');
    } catch (error) {
      toast.error('Unable to send mail', error);
    }
  };

  const editDetails = e => {
    e.preventDefault();
    navigate('/profile');
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#" style={{ marginLeft: '20px', fontWeight: 'bold' }}>
          Expense Tracker
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={verifyHandler}>
                verify email
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={editDetails}>
                edit profile
              </a>
            </li>
            <div style={{ marginLeft: '600px', display: 'flex' }}>
              <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
              </form>
              <button
                className="btn btn-outline-success my-2 my-sm-0"
                type="submit"
                style={{
                  marginLeft: '5px',
                  float: 'right',
                  height: '34px',
                  textAlign: 'center',
                }}
              >
                Search
              </button>

              <li className="nav-item active">
                <a className="nav-link" href="#" style={{ marginLeft: '50px' }} onClick={logout}>
                  Logout
                </a>
              </li>
            </div>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;

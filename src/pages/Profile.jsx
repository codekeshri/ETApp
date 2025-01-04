import axios from 'axios';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

export const Profile = () => {
  const [name, setName] = useState('');
  const [url, setUrl] = useState('');

  useEffect(() => {
    const fillData = async () => {
      try {
        const idToken = localStorage.getItem('idToken');
        const res = await axios.post(import.meta.env.VITE_EDIT_PROFILE, { idToken }, { headers: { 'Content-Type': 'application/json' } });
        const userData = res.data.users[0];
        userData;
      } catch (error) {
        toast.error(error.message);
      }
    };
    fillData();
  }, []);

  const nameInputHandler = e => {
    console.log('name input');
    setName(e.target.value);
  };

  const urlInputHandler = e => {
    console.log('url input');
    setUrl(e.target.value);
  };

  const updateHandler = async () => {
    const obj = {
      idToken: localStorage.getItem('idToken'),
      name: name,
      url: url,
    };

    try {
      const res = await axios.post(import.meta.env.VITE_EDIT_PROFILE, obj, { headers: { 'Content-Type': 'application/json' } });

      toast.success('Your profile has been updated successfully');
      console.log(res);
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div className="container mt-4">
      <h4 className="mb-3">Contact Details</h4>
      <p className="text-muted mb-3">Winners never quit, Quitters never win.</p>

      <div className="mb-3">
        <label htmlFor="fullName" className="form-label">
          Full Name
        </label>
        <input type="text" id="fullName" className="form-control" value={name} onChange={nameInputHandler} />
      </div>

      <div className="mb-3">
        <label htmlFor="photoUrl" className="form-label">
          Photo URL
        </label>
        <input type="text" id="photoUrl" className="form-control" value={url} onChange={urlInputHandler} />
      </div>

      <div className="d-flex gap-2">
        <button className="btn btn-primary" onClick={updateHandler}>
          Update
        </button>
      </div>
    </div>
  );
};

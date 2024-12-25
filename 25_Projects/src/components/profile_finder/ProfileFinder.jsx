import { useEffect, useState } from "react";
import User from "./User";
import "./profile.css";

function ProfileFinder() {
  const [username, setUsername] = useState("Zheng5005");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  async function fetchGithubUser() {
    setLoading(true);
    const res = await fetch(`https://api.github.com/users/${username}`);

    const data = await res.json();
    if (data) {
      setUserData(data);
      setLoading(false);
      setUsername("")
    }
  }

  function handleSubmit() {
    fetchGithubUser()
  }

  useEffect(() => {
    fetchGithubUser();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="github-profile-container">
      <div className="input-wrapper">
        <input
          name="search-by-username"
          type="text"
          placeholder="Search GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button onClick={handleSubmit}>Search</button>
      </div>
      {userData !== null ? <User user={userData} /> : <p>No user found</p>}
    </div>
  );
}

export default ProfileFinder;

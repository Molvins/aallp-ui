import React, { useState, useEffect } from 'react';
const Team = () => {
  const [teamMembers, setTeamMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTeamData = async () => {
      try {
        const response = await fetch('https://aallp-server.onrender.com/team');
        if (!response.ok) {
          throw new Error('Failed to fetch team data');
        }
        const data = await response.json();
        setTeamMembers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTeamData();
  }, []);

  if (loading) return <p>Loading team data...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="team-container">
      <h1>Meet Our Team</h1>
      <div className="team-grid">
        {teamMembers.map((member) => (
          <div key={member.id} className="team-card">
            <img
              src={member.image_url}
              alt={`${member.name}'s photo`}
              className="team-image"
            />
            <h2>{member.name}</h2>
            <p className="team-role">{member.role}</p>
            <p className="team-bio">{member.bio}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;

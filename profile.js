import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import './Profile.css';
const Profile = ({ user }) => {
  return (
    <Card variant="outlined" className="profile-card">
      <CardContent className="profile-card-content">
        <Typography variant="h4" component="h2" className="user-name">
          {user.name}
        </Typography>
        <br></br>
        <div className="user-stats">
          <div className="user-stat">
            <Typography variant="body1" className="stat-label">
              Year
            </Typography>
            <Typography variant="body1" className="stat-value ">
              {user.year}
            </Typography>
          </div>
  
          <div className="user-stat">
            <Typography variant="body1" className="stat-label">
              Semester
            </Typography>
            <Typography variant="body1" className="stat-value ">
              VI -Sem
            </Typography>
          </div>
          <div className="user-stat">
            <Typography variant="body1" className="stat-label">
              Department
            </Typography>
            <Typography variant="body1" className="stat-value">
              {user.department}
            </Typography>
          </div>
          <div className="user-stat">
            <Typography variant="body1" className="stat-label">
              Current RP
            </Typography>
            <Typography variant="body1" className="stat-value">
              {user.currentRp}🪙
            </Typography>
          </div>
          <div className="user-stat">
            <Typography variant="body1" className="stat-label">
              Redeemed RP
            </Typography>
            <Typography variant="body1" className="stat-value">
              {user.redeemedRp}🪙
            </Typography>
          </div>
          <div className="user-stat">
            <Typography variant="body1" className="stat-label">
              Carry Forward
            </Typography>
            <Typography variant="body1" className="stat-value">
             4000🪙
            </Typography>
          </div>
          <div className="user-stat">
            <Typography variant="body1" className="stat-label">
              Penalty
            </Typography>
            <Typography variant="body1" className="stat-value">
              {user.penalty}
            </Typography>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Profile;

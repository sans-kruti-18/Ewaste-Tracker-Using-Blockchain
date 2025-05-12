import React, { useState } from 'react';

const RoleSelect = ({ onLogin, account }) => {
  const [selectedRole, setSelectedRole] = useState('');

  const handleRoleSelect = (role) => {
    setSelectedRole(role);
  };

  const handleLogin = () => {
    if (selectedRole) {
      onLogin(selectedRole);
    }
  };

  return (
    <div className="container login-container">
      <div className="login-logo">
        <h1 style={{ color: '#2D6A4F' }}>E-Waste Tracking</h1>
        <p>Change your user role</p>
      </div>
      
      <div className="login-card fade-in">
        <h2>Select Your Role</h2>
        <p>Connected as: <span style={{ fontWeight: '500', fontFamily: 'monospace' }}>{account}</span></p>
        
        <div className="role-buttons">
          <div 
            className={`role-button ${selectedRole === 'Producer' ? 'active' : ''}`} 
            onClick={() => handleRoleSelect('Producer')}
          >
            <div className="role-icon" style={{ color: '#264653' }}>🏭</div>
            <div className="role-name">Producer</div>
          </div>
          
          <div 
            className={`role-button ${selectedRole === 'Recycler' ? 'active' : ''}`} 
            onClick={() => handleRoleSelect('Recycler')}
          >
            <div className="role-icon" style={{ color: '#2a9d8f' }}>♻️</div>
            <div className="role-name">Recycler</div>
          </div>
          
          <div 
            className={`role-button ${selectedRole === 'Logistics' ? 'active' : ''}`} 
            onClick={() => handleRoleSelect('Logistics')}
          >
            <div className="role-icon" style={{ color: '#457b9d' }}>🚚</div>
            <div className="role-name">Logistics</div>
          </div>
          
          <div 
            className={`role-button ${selectedRole === 'Regulator' ? 'active' : ''}`} 
            onClick={() => handleRoleSelect('Regulator')}
          >
            <div className="role-icon" style={{ color: '#f4a261' }}>📋</div>
            <div className="role-name">Regulator</div>
          </div>
          
          <div
            className="role-button"
            onClick={() => window.location.href = '/admin'}
          >
            <div className="role-icon" style={{ color: '#2c3e50' }}>⚙️</div>
            <div className="role-name">Admin Panel</div>
          </div>
        </div>
        
        <button 
          className="btn btn-block" 
          onClick={handleLogin}
          disabled={!selectedRole}
          style={{ marginTop: '24px' }}
        >
          Continue as {selectedRole || 'Selected Role'}
        </button>
      </div>
    </div>
  );
};

export default RoleSelect;
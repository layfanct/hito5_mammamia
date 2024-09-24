import './Profile.css'; 

function Profile() {
  const userEmail = "usuario@example.com"; 

  const handleLogout = () => {
    alert("Has cerrado sesión"); 
  };

  return (
    <div className="profile-container">
      <h1>Perfil de Usuario</h1>
      <p>Email: {userEmail}</p>
      <button className="logout-btn" onClick={handleLogout}>
        Cerrar Sesión
      </button>
    </div>
  );
}

export default Profile;

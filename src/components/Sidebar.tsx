const Sidebar = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '10rem',
        border: '1px solid black',
        height: '100vh',
        padding: 0,
      }}
    >
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold' }}>Pokemon</h1>
      <ul>
        <li>Home</li>
        <li>Pokemon</li>
        <li>Login</li>
      </ul>
    </div>
  );
};

export default Sidebar;

import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

const Dashboard = () => {
  return (
    <>
      <div style={{ display: 'grid', gridTemplateColumns: '10rem 1fr' }}>
        <Sidebar />
        <Outlet />
      </div>
    </>
  );
};

export default Dashboard;

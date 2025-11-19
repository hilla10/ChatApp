import { Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { useEffect } from 'react';
import { Loader } from 'lucide-react';
import Navbar from './components/Navbar';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Setting from './pages/Setting';
import Profile from './pages/Profile';
import Home from './pages/Home';
import { useAuthStore } from './store/useAuthStore';
import { useThemeStore } from './store/useThemeStore';

const App = () => {
  const { authUser, checkAuth, isCheckingAuth } = useAuthStore();

  const { theme } = useThemeStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  if (isCheckingAuth && !authUser) {
    return (
      <div className='flex items-center justify-center min-h-screen'>
        <Loader className='size-10 animate-spin' />
      </div>
    );
  }

  return (
    <div data-theme={theme} className='w-screen h-screen'>
      <Toaster />
      <Navbar />

      <Routes>
        <Route
          path='/'
          element={authUser ? <Home /> : <Navigate to='/login' />}
        />
        <Route
          path='/signup'
          element={!authUser ? <Signup /> : <Navigate to='/' />}
        />
        <Route
          path='/login'
          element={!authUser ? <Login /> : <Navigate to='/' />}
        />
        <Route path='/settings' element={<Setting />} />
        <Route
          path='/profile'
          element={authUser ? <Profile /> : <Navigate to='/login' />}
        />
      </Routes>
    </div>
  );
};

export default App;

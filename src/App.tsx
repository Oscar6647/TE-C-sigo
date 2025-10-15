import { useState } from 'react';
import { Login } from './components/Login';
import { Dashboard } from './components/Dashboard';
import { MiPorque } from './components/MiPorque';
import { MiOrganizacion } from './components/MiOrganizacion';
import { MiRedDeApoyo } from './components/MiRedDeApoyo';
import { MiBienestar } from './components/MiBienestar';
import { Recursos } from './components/Recursos';
import { TuVoz } from './components/TuVoz';

export type View = 'login' | 'dashboard' | 'mi-porque' | 'organizacion' | 'red-apoyo' | 'bienestar' | 'recursos' | 'tu-voz';

export default function App() {
  const [currentView, setCurrentView] = useState<View>('login');
  const [user, setUser] = useState<{ matricula: string } | null>(null);

  const handleLogin = (matricula: string) => {
    setUser({ matricula });
    setCurrentView('dashboard');
  };

  const handleLogout = () => {
    setUser(null);
    setCurrentView('login');
  };

  const renderView = () => {
    switch (currentView) {
      case 'login':
        return <Login onLogin={handleLogin} />;
      case 'dashboard':
        return <Dashboard onNavigate={setCurrentView} user={user} onLogout={handleLogout} />;
      case 'mi-porque':
        return <MiPorque onBack={() => setCurrentView('dashboard')} />;
      case 'organizacion':
        return <MiOrganizacion onBack={() => setCurrentView('dashboard')} />;
      case 'red-apoyo':
        return <MiRedDeApoyo onBack={() => setCurrentView('dashboard')} />;
      case 'bienestar':
        return <MiBienestar onBack={() => setCurrentView('dashboard')} />;
      case 'recursos':
        return <Recursos onBack={() => setCurrentView('dashboard')} />;
      case 'tu-voz':
        return <TuVoz onBack={() => setCurrentView('dashboard')} />;
      default:
        return <Dashboard onNavigate={setCurrentView} user={user} onLogout={handleLogout} />;
    }
  };

  return (
    <div className="min-h-screen">
      {renderView()}
    </div>
  );
}

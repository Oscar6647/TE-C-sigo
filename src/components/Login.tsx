import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Sparkles} from 'lucide-react';

interface LoginProps {
  onLogin: (matricula: string) => void;
}

export function Login({ onLogin }: LoginProps) {
  const [matricula, setMatricula] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (matricula.trim()) {
      onLogin(matricula);
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-center bg-cover bg-no-repeat"
      style={{ backgroundImage: "url('src/images/fondo.jpeg')" }}
    >
      <div className="relative z-10 w-full max-w-md">
        {/* Mascot/Logo Section */}
        {/* Editar aqui el logo de la app */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-38 h-38 bg-white rounded-3xl shadow-2xl mb-6 transform hover:rotate-6 transition-transform">
            <img src={'src/images/Edusigo.png'}/>
          </div>
        </div>

        {/* Login Card */}
        <form onSubmit={handleSubmit} className="space-y-5 bg-white p-8 rounded-3xl shadow-2xl">
          <div className="space-y-3">
            <label className="block text-gray-700 font-medium">
              Matrícula
            </label>
            <Input
              type="text"
              value={matricula}
              onChange={(e) => setMatricula(e.target.value)}
              placeholder="Ingresa tu matrícula"
              className="h-14 text-lg border-2 border-gray-200 rounded-2xl focus:border-green-500 focus:ring-green-500"
              required
            />
          </div>

          <Button 
            type="submit" 
            className="w-full h-14 text-lg bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
          >
            <Sparkles className="w-5 h-5 mr-2" />
            ¡Comenzar!
          </Button>

          <div className="text-center pt-2">
            <button type="button" className="text-sm text-gray-600 hover:text-gray-900 underline">
              ¿Primera vez aquí?
            </button>
          </div>
        </form>

        {/* Features */}
        <div className="mt-8 grid grid-cols-3 gap-3 text-center">
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-3 text-white">
            <div className="text-2xl mb-1">🎯</div>
            <div className="text-xs">Metas claras</div>
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-3 text-white">
            <div className="text-2xl mb-1">🏆</div>
            <div className="text-xs">Logros</div>
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-3 text-white">
            <div className="text-2xl mb-1">💪</div>
            <div className="text-xs">Apoyo 24/7</div>
          </div>
        </div>
      </div>
    </div>
  );
}

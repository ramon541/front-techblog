import { type JSX, useState } from 'react';
import { Navigate } from 'react-router';
import { useAuth } from '../../providers/auth/useAuth';

export function Login(): JSX.Element {
    const { login, isAuthenticated } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    if (isAuthenticated) {
        return <Navigate to="/home" replace />;
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            // Simula uma chamada de API
            await new Promise((resolve) => setTimeout(resolve, 1000));

            // Mock de usuário para demonstração
            const mockUser: IUser = {
                id: '1',
                name: 'Usuário Teste',
                email: email,
                password: '', // Nunca armazene senhas no frontend
                avatar: null,
                deletedAt: null,
                createdAt: new Date(),
                updatedAt: new Date(),
            };

            login(mockUser);
        } catch (error) {
            console.error('Erro no login:', error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
            <div className="max-w-md w-full bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold text-center text-gray-900 mb-6">
                    Login
                </h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="seu@email.com"
                            required
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium text-gray-700">
                            Senha
                        </label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="••••••••"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed">
                        {isLoading ? 'Entrando...' : 'Entrar'}
                    </button>
                </form>
                <div className="mt-4 text-sm text-gray-600 text-center">
                    <p>Para teste, use qualquer email e senha válidos</p>
                </div>
            </div>
        </div>
    );
}

import { Link } from 'react-router';
import { useAuth } from '../../providers/auth';

export function Header() {
    const { user, logout, isAuthenticated } = useAuth();

    return (
        <header className="bg-white border-b border-b-border">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">
                    <Link to="/" className="flex items-center">
                        <h1 className="text-2xl font-bold text-gray-900">
                            TechBlog
                        </h1>
                    </Link>

                    <nav className="flex items-center space-x-6">
                        <Link
                            to="/home"
                            className="text-gray-700 hover:text-gray-900 transition-colors">
                            Home
                        </Link>

                        {isAuthenticated ? (
                            <>
                                <Link
                                    to="/articles/new"
                                    className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
                                    Criar Artigo
                                </Link>
                                <div className="flex items-center space-x-4">
                                    <span className="text-gray-700">
                                        Olá, {user?.name || user?.email}
                                    </span>
                                    <button
                                        onClick={logout}
                                        className="text-gray-500 hover:text-gray-700 transition-colors">
                                        Sair
                                    </button>
                                </div>
                            </>
                        ) : (
                            <Link
                                to="/login"
                                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
                                Login
                            </Link>
                        )}
                    </nav>
                </div>
            </div>
        </header>
    );
}

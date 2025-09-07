import { Link, useLocation } from 'react-router';
import { useAuth } from '../../providers/auth';
import ButtonIcon from '../buttons/ButtonIcon';

export function Header() {
    const { logout, isAuthenticated } = useAuth();
    const location = useLocation();

    return (
        <header className="w-full top-0 bg-white border-b border-b-border absolute">
            <div className="max-w-dvw px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">
                    <Link to="/" className="flex items-center">
                        <h1 className="text-lg font-bold text-text">
                            TechBlog
                        </h1>
                    </Link>

                    <nav className="flex items-center space-x-6">
                        {isAuthenticated ? (
                            <ButtonIcon icon="logout" onClick={logout} />
                        ) : (
                            location.pathname !== '/login' && (
                                <Link
                                    to="/login"
                                    className="text-primary hover:text-primary-900 transition-colors font-semibold text-sm">
                                    Entrar
                                </Link>
                            )
                        )}
                    </nav>
                </div>
            </div>
        </header>
    );
}

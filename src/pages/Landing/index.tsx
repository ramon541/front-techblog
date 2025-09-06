import { type JSX } from 'react';

export function Landing(): JSX.Element {
    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
            <div className="text-center">
                <h1 className="font-bold text-gray-900 mb-4">
                    Insights & Learning
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                    Bem-vindo ao seu blog de tecnologia
                </p>
                <div className="space-x-4">
                    <a
                        href="/login"
                        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
                        Entrar
                    </a>
                    <a
                        href="/home"
                        className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700">
                        Ver Posts
                    </a>
                </div>
            </div>
        </div>
    );
}

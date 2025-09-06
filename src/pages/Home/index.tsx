import { type JSX } from 'react';

export function Home(): JSX.Element {
    return (
        <div className="min-h-screen bg-gray-50">
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    Posts Recentes
                </h2>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    <div className="bg-white rounded-lg shadow p-6">
                        <h3 className="text-xl font-semibold mb-2">
                            Post de Exemplo
                        </h3>
                        <p className="text-gray-600 mb-4">
                            Esta é uma descrição de exemplo para um post do
                            blog...
                        </p>
                        <a
                            href="/articles/1"
                            className="text-blue-600 hover:text-blue-800">
                            Ler mais →
                        </a>
                    </div>
                    <div className="bg-white rounded-lg shadow p-6">
                        <h3 className="text-xl font-semibold mb-2">
                            Outro Post
                        </h3>
                        <p className="text-gray-600 mb-4">
                            Mais um exemplo de post interessante sobre
                            tecnologia...
                        </p>
                        <a
                            href="/articles/2"
                            className="text-blue-600 hover:text-blue-800">
                            Ler mais →
                        </a>
                    </div>
                </div>
            </main>
        </div>
    );
}

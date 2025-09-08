import type { JSX } from 'react';

export function Detail(): JSX.Element {
    return (
        <div className="min-h-dvh">
            <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <article className="bg-white rounded-lg shadow p-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-4">
                        Título do Artigo
                    </h1>
                    <div className="text-gray-600 mb-6">
                        <p>Por Autor • 1 de Janeiro, 2024</p>
                    </div>
                    <div className="prose max-w-none">
                        <p>
                            Este é o conteúdo do artigo. Aqui você pode
                            adicionar todo o texto do seu post, formatação e
                            outros elementos necessários.
                        </p>
                    </div>
                </article>
            </main>
        </div>
    );
}

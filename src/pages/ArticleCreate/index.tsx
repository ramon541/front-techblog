import type { JSX } from 'react';

export function ArticleCreate(): JSX.Element {
    return (
        <div className="min-h-dvh">
            <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <form className="bg-white rounded-lg shadow p-8 space-y-6">
                    <div>
                        <label
                            htmlFor="title"
                            className="block text-sm font-medium text-gray-700">
                            Título
                        </label>
                        <input
                            type="text"
                            id="title"
                            className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2"
                            placeholder="Digite o título do artigo"
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="content"
                            className="block text-sm font-medium text-gray-700">
                            Conteúdo
                        </label>
                        <textarea
                            id="content"
                            rows={12}
                            className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2"
                            placeholder="Escreva o conteúdo do seu artigo aqui..."
                        />
                    </div>
                    <div className="flex justify-end space-x-4">
                        <button
                            type="button"
                            className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">
                            Cancelar
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                            Publicar
                        </button>
                    </div>
                </form>
            </main>
        </div>
    );
}

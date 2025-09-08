# TechBlog

Uma plataforma moderna de blog focada em tecnologia, construída com React 19, TypeScript e as melhores práticas de desenvolvimento frontend.

## 📋 Índice

-   [Visão Geral](#visão-geral)
-   [Arquitetura e Decisões Técnicas](#arquitetura-e-decisões-técnicas)
-   [Estrutura do Projeto](#estrutura-do-projeto)
-   [Stack Tecnológica](#stack-tecnológica)
-   [Funcionalidades](#funcionalidades)
-   [Instalação e Configuração](#instalação-e-configuração)
-   [Scripts Disponíveis](#scripts-disponíveis)

## 🎯 Visão Geral

O TechBlog é uma plataforma completa para criação, leitura e interação com artigos de tecnologia. O projeto foi desenvolvido priorizando performance, experiência do usuário e manutenibilidade do código.

**Principais características:**

-   Interface responsiva e moderna
-   Criação de artigos com tags
-   Sistema de comentários aninhados
-   Busca avançada com debouncing
-   Estados de loading com skeletons
-   Gerenciamento de estado otimizado

## 🏗️ Arquitetura e Decisões Técnicas

### **Framework e Versões**

-   **React 19.1.1**: Escolha da versão mais recente para aproveitar as melhorias de performance e novos hooks
-   **TypeScript**: Tipagem forte para reduzir bugs e melhorar a experiência de desenvolvimento
-   **Vite**: Build tool moderna com hot reload ultra-rápido

### **Gerenciamento de Estado**

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   TanStack      │    │     Zustand     │    │   React Hook    │
│  React Query    │    │   (Persistent)  │    │      Form       │
│                 │    │                 │    │                 │
│ • Server State  │    │ • Client State  │    │ • Form State    │
│ • Cache         │    │ • User Session  │    │ • Validation    │
│ • Sync/Async    │    │ • Preferences   │    │ • Field State   │
└─────────────────┘    └─────────────────┘    └─────────────────┘
```

**Justificativas:**

-   **TanStack React Query**: Gerenciamento de estado servidor com cache inteligente, sincronização automática e estados de loading
-   **Zustand**: Estado cliente leve e performático com persistência no localStorage
-   **React Hook Form**: Formulários performáticos com validação, menor re-renders

### **Validação e Schemas**

```typescript
// Exemplo de schema com Zod
export const newArticleSchema = z.object({
    title: z.string().min(3).max(100),
    content: z.string().min(10).max(5000),
    image: z.string().url().optional(),
    tagIds: z.array(z.uuid()).min(1).max(3),
});
```

**Justificativa**: Zod oferece validação runtime + compile-time, inferência de tipos automática e mensagens de erro customizáveis.

### **Estilização e Design System**

```css
@theme {
    --color-primary: #67a22d;
    --color-text: #141c0d;
    --color-secondary: #edf2e8;
    /* Design tokens centralizados */
}
```

**Decisões de Design:**

-   **Tailwind CSS v4**: Utility-first com design tokens customizados
-   **Design System**: Paleta de cores consistente e componentes reutilizáveis
-   **Responsividade**: Mobile-first approach com breakpoints bem definidos

### **Estrutura de Componentes**

```
components/
├── buttons/          # Variações de botões (ButtonText, ButtonIcon)
├── cards/           # Cards reutilizáveis (CardArticle, CardComment)
├── inputs/          # Sistema de inputs com validação
├── layout/          # Componentes de layout (Header, Wrapper, Pagination)
├── tags/            # Sistema de tags com estados
└── texts/           # Tipografia padronizada
```

**Princípios Aplicados:**

-   **Atomic Design**: Componentes pequenos e reutilizáveis
-   **Composition over Inheritance**: Flexibilidade através de props
-   **Single Responsibility**: Cada componente tem uma função específica

## 📂 Estrutura do Projeto

```
src/
├── assets/          # Ícones SVG e recursos estáticos
├── components/      # Componentes reutilizáveis organizados por categoria
├── configs/         # Configurações (React Query, storage)
├── hooks/           # Custom hooks (useDebounce, useAuth)
├── interfaces/      # Definições de tipos TypeScript
│   ├── api/         # Tipos de payloads e responses
│   ├── core/        # Entidades principais (User, Article, Comment)
│   └── storage/     # Tipos do gerenciamento de estado
├── pages/           # Páginas organizadas por domínio
│   ├── articles/    # CRUD de artigos
│   ├── auth/        # Autenticação
│   └── public/      # Páginas públicas
├── providers/       # Context providers e configurações globais
├── schemas/         # Schemas de validação Zod
├── services/        # Camada de API com React Query
├── storage/         # Gerenciamento de estado Zustand
└── styles/          # Estilos globais e design tokens
```

## 🛠️ Stack Tecnológica

### **Core**

-   **React 19.1.1** - Framework principal
-   **TypeScript 5.8.3** - Tipagem estática
-   **Vite 7.1.2** - Build tool e dev server

### **Gerenciamento de Estado**

-   **TanStack React Query 5.87.1** - Server state management
-   **Zustand 5.0.8** - Client state management
-   **React Hook Form 7.62.0** - Form management

### **Roteamento e Navegação**

-   **React Router 7.8.2** - Roteamento SPA

### **Estilização**

-   **Tailwind CSS 4.1.13** - Utility-first CSS
-   **clsx 2.1.1** - Conditional classes

### **HTTP e Validação**

-   **Axios 1.11.0** - HTTP client
-   **Zod 4.1.5** - Schema validation

### **UI e Experiência**

-   **React Toastify 11.0.5** - Notifications
-   **Newsreader Font** - Tipografia elegante

### **Desenvolvimento**

-   **ESLint 9.33.0** - Code linting
-   **TypeScript ESLint** - TypeScript specific linting

## ✨ Funcionalidades

### **🔐 Autenticação**

-   Login seguro com validação
-   Proteção de rotas privadas
-   Persistência de sessão

### **📝 Gerenciamento de Artigos**

-   Sistema de tags (máx. 3 por artigo)
-   Upload opcional de imagens por url
-   Validação robusta com Zod
-   Cache inteligente

### **💬 Sistema de Comentários**

-   Comentários aninhados recursivos
-   Interface responsiva
-   Avatars automáticos
-   Timestamps formatados

### **🔍 Busca e Filtragem**

-   Busca por texto com debouncing (1s)
-   Filtros por tags
-   Paginação otimizada
-   Estados de loading

### **🎨 Interface e UX**

-   Design responsivo mobile-first
-   Skeletons durante carregamento
-   Toasts para feedback
-   Animações suaves

## 🚀 Instalação e Configuração

### **Pré-requisitos**

-   Node.js 18+
-   npm ou yarn
-   Servidor backend rodando

### **Instalação**

```bash
# Clone o repositório
git clone https://github.com/usuario/front-techblog.git

# Entre no diretório
cd front-techblog

# Instale as dependências
npm install

# Configure as variáveis de ambiente
cp .env.example .env

# Inicie o servidor de desenvolvimento
npm run dev
```

### **Configuração da API**

```typescript
// src/services/requestApi.ts
const BASE_URL = process.env.VITE_API_URL || 'http://localhost:3000';
```

## 📜 Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev          # Inicia servidor de desenvolvimento

# Build
npm run build        # Build para produção
npm run preview      # Preview do build

# Qualidade de Código
npm run lint         # Executa ESLint
npm run type-check   # Verificação de tipos TypeScript
```

---

## 📈 Decisões de Performance

### **Caching Strategy**

```typescript
// React Query com cache persistente
const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 1000 * 60 * 5, // 5 minutos
            gcTime: Infinity,
        },
    },
});
```

### **Network Optimization**

-   Debouncing na busca (1000ms)
-   Invalidação seletiva de cache
-   Requests paralelos quando possível

---

**Desenvolvido com ❤️ usando as melhores práticas do React ecosystem**

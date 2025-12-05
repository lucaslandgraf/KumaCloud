# 🐻 Kuma Cloud Gaming - Architecture MVP

[![Status](https://img.shields.io/badge/status-MVP%20Frontend-success)](https://img.shields.io/badge/status-MVP%20Frontend-success)
[![Architecture](https://img.shields.io/badge/architecture-Client--Server-blue)](https://img.shields.io/badge/architecture-Client--Server-blue)
[![License](https://img.shields.io/badge/license-MIT-green)](LICENSE)

> **Projeto da Disciplina de Arquitetura de Software**
> Implementação do cliente web e documentação arquitetural da plataforma de streaming de jogos.

---

## 🎥 Apresentação do Sistema (Demo Day)

Substituindo a apresentação tradicional de slides, preparamos uma demonstração completa da arquitetura e funcionamento do MVP.

**Clique na imagem abaixo para assistir ao vídeo:**

[![Assista ao Vídeo no YouTube](https://img.youtube.com/vi/S0ua4pKe06M/maxresdefault.jpg)](https://www.youtube.com/watch?v=S0ua4pKe06M)

---

## 📄 Visão Geral

O **Kuma Cloud** é uma solução projetada para democratizar o acesso a jogos AAA através de streaming de baixa latência via navegador.

Este repositório contém a entrega final da disciplina, dividida em:
1.  **Especificação Arquitetural:** Documentação completa do sistema distribuído (Microsserviços, Kubernetes e Protocolos de Vídeo).
2.  **Implementação de Referência (MVP):** O cliente web (`Web Client`) funcional, operando com **simulação de serviços (Mock Strategy)** para validação de UX sem custos de infraestrutura de nuvem.

---

## 📂 Estrutura do Projeto

A organização do repositório reflete a separação entre o planejamento arquitetural e a implementação do cliente:

```text
/
├── docs/               # Documentação Técnica e de Processo
│   ├── 01-Project-Charter.md
│   ├── 02-Architecture-Doc.md
│   ├── 03-ADR-Microservices.md
│   └── 04-Roadmap.md
│
└── src/                # Código Fonte do Cliente Web (Frontend)
    ├── index.html      # Landing Page e Login
    ├── library.html    # Catálogo de Jogos (SPA)
    └── ... (assets e scripts)
```

### 🏗 Decisões Técnicas do MVP (Frontend)

Devido à complexidade e custo da infraestrutura de Game Streaming real (GPUs), a equipe optou por uma abordagem **Frontend-First**:

*   **Arquitetura Desacoplada:** O Frontend consome dados de serviços que, nesta versão, são simulados localmente (Mocks). Isso garante que a interface funcione perfeitamente sem depender do backend estar online.
*   **Gestão de Estado:** Utilização de `localStorage` para emular a persistência de sessão e tokens de autenticação.
*   **Stack Tecnológica:** HTML5 Semântico, CSS3 Moderno e Vanilla JavaScript para garantir performance máxima no navegador do cliente.

### 📚 Entregáveis de Arquitetura (Docs)

Todo o planejamento teórico exigido pela disciplina encontra-se na pasta `/docs`:

*   **Project Charter:** Escopo, stakeholders e análise de riscos (Latência e Infraestrutura).
*   **Documento de Arquitetura:** Visão C4, diagramas de contexto e escolha de tecnologias.
*   **ADR - Microsserviços:** Registro da decisão de usar arquitetura distribuída vs monolítica.
*   **Roadmap & Cronograma:** Planejamento das 16 semanas e gráfico de Gantt.

## 🚀 Como Rodar o Projeto

Como esta entrega foca na portabilidade web, não há necessidade de compilação ou instalação de pacotes complexos.

1.  **Navegue até a pasta do código:**
    ```bash
    cd src
    ```
2.  **Execução:**
    Basta abrir o arquivo `index.html` em seu navegador preferido (Chrome, Firefox, Edge).
    *Opcional: Para uma experiência ideal, utilize um servidor local simples (ex: Live Server do VS Code).*

### Funcionalidades para Testar

*   **Login Simulado:** Utilize qualquer e-mail para entrar. O sistema simulará a validação e salvará a sessão.
*   **Catálogo Dinâmico:** Acesse a biblioteca para ver a renderização dos cards de jogos via JavaScript.
*   **Teste de Streaming:** Clique em "Jogar" para ver o feedback visual de conexão com o servidor (simulado).

## 👥 Autores

| Nome | Papel |
| :--- | :--- |
| Lucas Landgraf | Arquiteto Principal |
| Allyson Kenzo | Arquiteto de Integração |
| Gabriel Juliati | Engenheiro DevOps |
| Matheus Kudlake | Eng. de Qualidade |
| Matheus Leandro | Arquiteto de Dados |


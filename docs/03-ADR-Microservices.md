# ADR-001: Adotando uma Arquitetura de Microsserviços

| Campo | Valor |
| :--- | :--- |
| **Status** | Accepted |
| **Date** | 24/09/25 |
| **Deciders** | Lucas Landgraf (Arquiteto Principal), Allyson Kenzo (Arquiteto de Integração), Gabriel Juliati (Engenheiro DevOps) |
| **Technical Story** | Decidir a arquitetura para suportar 1 milhão de jogadores simultâneos globalmente com alta performance e resiliência. |

---

## Context and Problem Statement

O sistema Kuma Cloud Gaming foi concebido para operar em escala global, suportando um milhão de jogadores simultâneos e entregando uma experiência de jogo de alta performance com latência inferior a 20ms. Isso exige uma arquitetura que não apenas suporte a carga de trabalho massiva, mas também seja resiliente a falhas, garantindo a disponibilidade do serviço.

### Qual problema estamos tentando resolver?

Estamos resolvendo o problema de como construir uma plataforma de jogos em nuvem que seja **extremamente escalável e tolerante a falhas**, enquanto mantém a performance crítica para a experiência do usuário. Um único sistema monolítico não seria capaz de atender a essa demanda e representaria um risco alto de falha em massa.

### Quais são as forças em conflito?

As principais forças em conflito são:

*   A necessidade de performance e simplicidade inicial de um sistema integrado **versus** a flexibilidade e resiliência de um sistema distribuído.
*   O custo e a complexidade de gerenciar múltiplos serviços e sua comunicação **versus** a capacidade de escalar granularmente e isolar falhas.
*   A urgência do cronograma de lançamento (lançar o beta em 9 meses) **versus** o tempo adicional de desenvolvimento e configuração exigido por uma arquitetura mais complexa.

### Que decisão precisa ser tomada?

Precisamos decidir a arquitetura fundamental do sistema: se será um único monolito, ou se será dividida em microsserviços para lidar com os desafios de performance, escalabilidade e resiliência.

## Decision Drivers

Decisões Guiadas por Drivers

*   **Driver 1: Latência e Performance Críticas** - A experiência de jogo requer uma latência de ponta a ponta consistentemente inferior a 20ms. A arquitetura deve ser otimizada acima de tudo para essa métrica, que é o principal diferencial do serviço.
*   **Driver 2: Escalabilidade Massiva** - O sistema deve ser capaz de suportar até 1 milhão de usuários simultâneos. A arquitetura escolhida precisa permitir que os recursos sejam escalados horizontalmente de forma granular para atender a essa demanda.
*   **Driver 3: Resiliência e Disponibilidade** - O serviço precisa ter um uptime de 99,9%, garantindo que uma falha em um componente não derrube todo o sistema. A tolerância a falhas é essencial para a confiança do usuário.
*   **Driver 4: Custo Operacional Controlado** - O orçamento inicial e a viabilidade do negócio dependem de um controle rígido sobre os custos de infraestrutura. A arquitetura deve permitir o uso eficiente de recursos como as GPUs, evitando o superdimensionamento.
*   **Driver 5: Agilidade e Flexibilidade Tecnológica** - A arquitetura deve permitir que diferentes equipes trabalhem em funcionalidades independentes e usem a melhor linguagem de programação ou tecnologia para cada tarefa.

## Considered Options

### Opção A: Arquitetura Monolítica

*   A aplicação seria construída como um único e grande serviço. Todas as funcionalidades, desde o motor de streaming até o marketplace, estariam em uma única base de código.

### Opção B: Arquitetura Orientada a Serviços (SOA)

*   O sistema seria dividido em serviços maiores e com escopos mais amplos, que podem compartilhar recursos como o banco de dados. A comunicação entre eles seria centralizada através de um barramento de serviço (ESB).

### Opção C: Arquitetura de Microsserviços com DB por Serviço

*   O sistema seria composto por múltiplos serviços pequenos e independentes, cada um com sua própria base de dados e responsabilidade específica. A comunicação ocorreria através de APIs leves e bem definidas.

## Decision Outcome

**Opção escolhida: Arquitetura de Microsserviços com DB por Serviço**

A Arquitetura de Microsserviços foi escolhida porque é a única opção que atende a todos os drivers de decisão de forma sustentável para um projeto de larga escala como o Kuma Cloud Gaming.

*   **Atende ao Driver 1 (Latência e Performance Críticas):** A arquitetura permite que o Game Streaming Engine, que é o componente mais sensível à latência, seja otimizado de forma independente, utilizando linguagens e protocolos de alta performance (como C++ e UDP) sem comprometer o resto do sistema.
*   **Atende ao Driver 2 (Escalabilidade Massiva):** O modelo permite o escalonamento horizontal granular. Se o serviço de matchmaking tiver picos de uso, ele pode ser escalado independentemente do serviço de streaming, garantindo que o sistema como um todo possa suportar um milhão de usuários.
*   **Atende ao Driver 3 (Resiliência e Disponibilidade):** A falha em um serviço, como o de achievements, não afeta a funcionalidade do core de streaming. Isso isola os problemas, garantindo que o serviço principal continue disponível e o sistema atinja o uptime prometido.
*   **Atende ao Driver 4 (Custo Operacional Controlado):** O modelo de "DB por serviço" e a escalabilidade granular permitem um uso mais eficiente dos recursos. Não será necessário pagar por uma infraestrutura superdimensionada para toda a aplicação; em vez disso, alocamos recursos apenas para os serviços que precisam deles.
*   **Atende ao Driver 5 (Agilidade e Flexibilidade):** A equipe pode trabalhar em paralelo em diferentes microsserviços e usar a melhor tecnologia para cada problema (ex: um banco de dados NoSQL para o chat, um banco de dados relacional para o marketplace).

## Positive Consequences

*   **Escalabilidade e Performance:** O sistema poderá escalar horizontalmente para suportar até 1 milhão de jogadores simultâneos, já que cada microsserviço pode ser dimensionado de forma independente para atender a picos de demanda.
*   **Resiliência e Tolerância a Falhas:** Uma falha em um serviço isolado (como o de analytics ou achievements) não causará a interrupção do serviço principal de streaming de jogos, garantindo alta disponibilidade e uma experiência de jogo ininterrupta.
*   **Agilidade e Flexibilidade:** A equipe de desenvolvimento poderá trabalhar em paralelo em diferentes serviços. Além disso, a arquitetura permite a escolha da melhor tecnologia para cada tarefa, facilitando a adoção de novas tecnologias no futuro.

## Negative Consequences

Trade-offs e custos da decisão

*   **Consequência negativa 1: Aumento da complexidade e do custo de gerenciamento.**
    *   A transição de um sistema monolítico para um distribuído exige um esforço significativo em termos de desenvolvimento, monitoramento e implantação. A comunicação entre os serviços, a consistência de dados distribuídos e a depuração de problemas se tornam mais complexas.
*   **Consequência negativa 2: Maior sobrecarga operacional.**
    *   Manter múltiplos serviços no ar, cada um com sua infraestrutura e dependências, resulta em um aumento no custo de aluguel de servidores e na necessidade de uma equipe DevOps altamente qualificada.

### Como vamos mitigar:

*   **Ação específica para a Complexidade:** Adotar uma abordagem robusta de DevOps desde o início. Usar ferramentas de automação como Kubernetes para orquestração de contêineres e sistemas de monitoramento centralizado para facilitar a visibilidade e a depuração de falhas.
*   **Ação específica para os Custos:** Implementar um sistema de agendamento de GPU eficiente para maximizar o uso do hardware e evitar ocioso. Além disso, negociar contratos de longo prazo com os provedores de nuvem para garantir descontos e previsibilidade de gastos, controlando o custo operacional.

## Pros and Cons of the Options

### Opção A: Arquitetura Monolítica

| Prós | Contras |
| :--- | :--- |
| Implantação inicial mais rápida. | Baixa escalabilidade granular (aumento de mais de 80% nos custos de recursos ociosos). |
| Comunicação simplificada (sem overhead de rede). | Alto risco de falha em cascata (comprometendo o uptime de 99,9%). |
| Menor necessidade de ferramentas e expertise em DevOps. | Rigidez tecnológica (limita a adoção de novas tecnologias). |

### Opção B: Arquitetura Orientada a Serviços (SOA)

| Prós | Contras |
| :--- | :--- |
| Maior modularidade que o monolito. | Gargalos de desempenho devido ao barramento de serviço (ESB) central. |
| Melhor resiliência que o monolito. | Risco de ponto único de falha (barramento central ou DB compartilhado). |
| Flexibilidade tecnológica parcial. | Escalabilidade limitada devido a bancos de dados compartilhados. |

### Opção C: Arquitetura de Microsserviços com DB por Serviço

| Prós | Contras |
| :--- | :--- |
| **Escalabilidade e Agilidade** (suporta 1 milhão de usuários). | **Complexidade Operacional** (requer equipe DevOps altamente qualificada). |
| **Resiliência e Tolerância a Falhas** (isolamento de falhas). | **Comunicação entre Serviços** (introdução de latência de rede). |
| **Flexibilidade Tecnológica** (melhor tecnologia para cada serviço). | **Consistência de Dados** (desafio técnico em DBs distribuídos). |

## Implementation Notes

### Technical Details

*   **Configuração:**
    *   A arquitetura será implementada em contêineres utilizando **Kubernetes** para orquestração e gerenciamento.
    *   Um pipeline de **CI/CD** (Integração e Entrega Contínua) será configurado para automatizar o build, teste e deploy de cada microsserviço de forma independente.
    *   Os serviços serão configurados para monitoramento e logging centralizados para facilitar a identificação e correção de problemas.
*   **Dependências:**
    *   **Engine de Streaming:** Linguagem C++ ou Rust, com bibliotecas de codificação de vídeo (como FFmpeg ou NVENC) e frameworks de rede de baixa latência.
    *   **Backend Services:** Linguagens como Go ou Python, com frameworks web leves (como Gin ou FastAPI).
    *   **Bancos de Dados:** PostgreSQL para dados relacionais e persistentes (perfis de usuário, marketplace) e Redis para dados em tempo real e em cache (matchmaking, sessões ativas).
    *   **Comunicação Inter-serviços:** Utilização de **gRPC** para comunicação síncrona de alta performance e **RabbitMQ/Kafka** para comunicação assíncrona baseada em eventos.
*   **Caminho de Migração:**
    *   Não aplicável. O projeto Kuma Cloud Gaming é uma iniciativa "greenfield", o que significa que será construído do zero. Não há um sistema legado do qual será feita a migração.

## Validation Criteria

Critérios de Validação

*   **Métrica 1:** O sistema deve manter uma latência de ponta a ponta (input-to-display) de menos de **20ms** para 95% das sessões de jogo.
*   **Métrica 2:** O custo por usuário ativo deve estar alinhado com o modelo de negócio, evitando que os gastos com servidores e GPUs tornem o serviço inviável financeiramente.
*   **Linha do tempo:** A decisão será reavaliada seis meses após o lançamento público, com base nos dados de latência e custo operacional coletados em larga escala.

## Rollback Plan

**Gatilho (Trigger):** A decisão será considerada um fracasso e o plano de rollback será ativado se:

1.  A latência do serviço consistentemente não atender ao target de <20ms, mesmo após otimizações intensivas na arquitetura.
2.  O custo operacional por usuário ativo for tão alto que a sustentabilidade do projeto seja comprometida.

**Passos (Steps):**

1.  **Análise de Causa Raiz:** Identificar o ponto exato da falha (se é a comunicação entre serviços, a complexidade de deploy, etc.).
2.  **Consolidação:** Iniciar a refatoração do sistema para uma arquitetura mais consolidada, agrupando microsserviços relacionados em serviços maiores, para reduzir a complexidade e o overhead de comunicação.
3.  **Redirecionamento de Recursos:** Reavaliar a equipe e as ferramentas para se adequarem à nova arquitetura, focando menos em orquestração de contêineres e mais em sistemas de gerenciamento de código e deploy mais simples.

**Linha do tempo (Timeline):**

*   O processo de rollback e refatoração seria uma tarefa complexa, com um tempo estimado de **6 a 12 meses**.

## Links and References

*   Link para research/benchmark relevante: [https://newzoo.com/resources/blog/fortnite-helped-xbox-cloud-gaming-grow-lifetime-users-from-10-million-to-20-million-in-six-months](https://newzoo.com/resources/blog/fortnite-helped-xbox-cloud-gaming-grow-lifetime-users-from-10-million-to-20-million-in-six-months)
*   Documentação técnica consultada: [https://docs.nvidia.com/vgpu/4.6/grid-vgpu-user-guide/index.html](https://docs.nvidia.com/vgpu/4.6/grid-vgpu-user-guide/index.html)

### ADRs Relacionados:

*   **ADR-002:** Definindo o Protocolo de Comunicação entre Microsserviços: Esta decisão irá focar na escolha entre tecnologias como gRPC, REST ou filas de mensagens.
*   **ADR-003:** Implementando uma Solução de Monitoramento Centralizado: Esta decisão irá abordar a escolha de ferramentas e a estratégia para monitorar a saúde e o desempenho de todos os microsserviços.

### Spike Técnico ou POC:

O resultado da prova de conceito (POC) do Game Streaming Engine (Fase 2 do Roadmap) será a principal fonte de validação técnica da latência em um ambiente de teste.

## Template de Uso Rápido

| Campo | Valor |
| :--- | :--- |
| **ADR** | ADR-001: Arquitetura de Microsserviços |
| **Status** | Accepted |
| **Date** | 24/09/25 |
| **Context** | A plataforma de cloud gaming precisa de uma arquitetura que suporte 1 milhão de usuários simultâneos globalmente, com alta performance e tolerância a falhas. O sistema deve ser capaz de escalar, e uma falha em um serviço não pode comprometer a experiência de jogo. |
| **Options** | 1. Arquitetura Monolítica, 2. Arquitetura Orientada a Serviços (SOA), 3. Arquitetura de Microsserviços |
| **Decision** | Escolhemos a Arquiteura de Microsserviços porque ela é a única que atende aos requisitos de escalabilidade massiva, resiliência e performance de baixa latência que são críticos para o projeto. |

### Vantagens:

*   **Escalabilidade:** Permite escalar cada serviço de forma independente para lidar com picos de demanda.
*   **Resiliência:** Uma falha em um serviço não derruba o sistema inteiro, garantindo alta disponibilidade.
*   **Flexibilidade:** Permite usar a melhor tecnologia para cada serviço, como C++ para a engine de streaming e Python para o backend.

### Desvantagens e como mitigar:

*   **Aumento da complexidade:** O gerenciamento de múltiplos serviços e sua comunicação é mais difícil. Mitigamos isso usando ferramentas de orquestração como Kubernetes e investindo em uma equipe de DevOps qualificada.

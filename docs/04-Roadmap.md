# 📅 Cronograma e Roadmap - Kuma Cloud Gaming

| Propriedade | Detalhe |
| :--- | :--- |
| **Período** | 09/10/2025 a 28/01/2026 |
| **Duração** | 16 Semanas |
| **Metodologia** | Híbrida (Fases bem definidas com execução Ágil) |

---

## 👥 Equipe e Capacidade

| Papel | Responsável | Disponibilidade Semanal | Foco Principal |
| :--- | :--- | :--- | :--- |
| **Arquiteto Principal** | Lucas Landgraf | 12h | Decisões, Liderança, Docs |
| **Arq. Integração** | Allyson Kenzo | 11h | APIs, Streaming, Segurança |
| **Arq. Dados** | Matheus Leandro | 10h | Modelagem, Persistência |
| **Eng. DevOps** | Gabriel Juliati | 11h | Infra, Deploy, CI/CD |
| **Eng. Qualidade** | Matheus Kudlake | 10h | Testes, Métricas, RNFs |

---

## 🗺️ Visão Geral das Fases

| Fase | Período | Objetivo Principal | Marco (Milestone) |
| :--- | :--- | :--- | :--- |
| **1. Inception** | Semanas 1-2 | Análise de requisitos e validação de viabilidade. | `M1` Project Charter |
| **2. Design** | Semanas 3-4 | Definição da arquitetura (C4) e tecnologias. | `M2` Architecture Doc |
| **3. Prototyping** | Semanas 5-8 | PoC do Streaming e validação de Latência. | `M3` Tech Prototype |
| **4. Implementation** | Semanas 9-12 | Desenvolvimento do MVP e Integração. | `M4` MVP Functional |
| **5. Refinement** | Semanas 13-15 | Testes de carga, polimento e documentação. | - |
| **6. Delivery** | Semana 16 | Apresentação final e entrega do sistema. | `M5` Final System |

---

## 📍 Detalhamento Semanal

### FASE 1: INCEPTION & ANALYSIS
*Foco: Entendimento do problema e escopo.*

#### Semana 1 (09/10 - 15/10): Kickoff
- [x] 1.1 Análise de Stakeholders (Arq. Principal)
- [x] 1.2 Definição de Requisitos MVA (Arq. Integração)
- [x] 1.3 Matriz de Riscos Preliminar (Arq. Dados)

#### Semana 2 (16/10 - 22/10): Project Charter (MARCO M1)
- [x] 2.1 Definição de Objetivos e Escopo (Arq. Principal)
- [x] 2.5 Matriz de Riscos Detalhada (Arq. Dados)
- [x] 2.8 **Entrega:** Project Charter Consolidado

### FASE 2: ARCHITECTURAL DESIGN
*Foco: Desenho técnico e decisões difíceis.*

#### Semana 3 (23/10 - 29/10): ADRs e Contexto
- [x] 3.1 ADR-001: Escolha de Tecnologia/Microsserviços (Arq. Principal)
- [x] 3.2 Diagrama C4 - Nível 1 (Contexto) (Arq. Principal)
- [x] 3.4 Estrutura de Infra Simulada (DevOps)

#### Semana 4 (30/10 - 05/11): Architecture Doc (MARCO M2)
- [x] 4.1 Diagrama C4 - Nível 2 (Containers) (Arq. Principal)
- [x] 4.2 ADR Estratégia de Streaming (Arq. Integração)
- [x] 4.5 **Entrega:** Architecture Document v1.0

### FASE 3: PROTOTYPING
*Foco: Prova de Conceito (PoC) do motor de streaming.*

#### Semana 5 (06/11 - 12/11): Setup
- [x] 5.1 Setup Docker Compose (DevOps)
- [x] 5.2 Esqueleto dos Microsserviços (Arq. Principal)

#### Semana 6 (13/11 - 19/11): Core Dev
- [x] 6.1 Implementação Auth JWT (Arq. Integração)
- [x] 6.2 Módulo de Streaming - Parte 1 (Arq. Integração)

#### Semana 7 (20/11 - 26/11): Integração PoC
- [x] 7.2 Integração Auth + Streaming (Arq. Principal)
- [x] 7.3 Configuração de Logs/Monitoring (DevOps)

#### Semana 8 (27/11 - 03/12): Technical Prototype (MARCO M3)
- [x] 8.1 Execução de Testes de Latência (QA)
- [x] 8.4 Buffer de Correção de Bugs (Todos)
- [x] **Entrega:** Protótipo Técnico Funcional

### FASE 4: IMPLEMENTATION (MVP)
*Foco: Construção do Cliente Web e Mock Services.*

#### Semana 9 (04/12 - 10/12): Frontend Start
- [x] 9.3 Desenvolvimento Frontend Mínimo (Login/Home) (Arq. Integração)
- [x] 9.4 Pipeline CI Simulado (DevOps)

#### Semana 10 (11/12 - 17/12): Integração Front
- [x] 10.1 Integração Login + API Mock (Arq. Integração)
- [x] 10.2 Integração Biblioteca de Jogos (Arq. Integração)
- [x] 10.4 Buffer "Catch-up Week" (Todos)

#### Semana 11 (18/12 - 24/12): Orquestração
- [x] 11.1 Lógica de Orquestração Simulada (Arq. Principal)
- [x] 11.2 Lógica de "Time-boxing" no Front (Arq. Integração)

#### Semana 12 (25/12 - 31/12): MVP Functional (MARCO M4)
- [x] 12.1 Integração Final (Front + Orquestrador + Stream)
- [x] 12.2 Testes de Aceitação End-to-End (QA)
- [x] **Entrega:** MVP Funcional (Client-Side)

### FASE 5: REFINEMENT
*Foco: Qualidade, performance e documentação final.*

#### Semana 13 (01/01 - 07/01): Testes de Carga
- [ ] 13.1 Simulação de Carga (50 users) (QA)
- [ ] 13.3 Correção de Bugs UI/UX (Arq. Integração)

#### Semana 14 (08/01 - 14/01): Docs Finais
- [ ] 14.1 Relatório de Custos Cloud Realista (DevOps)
- [ ] 14.2 Gravação do Vídeo Demo (Arq. Integração)
- [ ] 14.3 Finalização da Documentação Técnica (Arq. Principal)

#### Semana 15 (15/01 - 21/01): Polish Week
- [ ] 15.1 Buffer Final de Polimento
- [ ] 15.2 Slides da Apresentação Final

### FASE 6: FINAL PRESENTATION

#### Semana 16 (22/01 - 28/01): Entrega (MARCO M5)
- [ ] 16.5 Apresentação Final (Demo Day)
- [ ] **Entrega:** Sistema Final + Documentação Completa

---
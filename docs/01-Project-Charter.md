# 📁 Project Charter - Cloud Gaming Stream

| Informação | Detalhe |
| :--- | :--- |
| **Empresa** | Kuma Cloud Gaming |
| **Data** | 17/09/2025 |
| **Versão** | 1.0 (Draft) |
| **Status** | Aprovado para MVP |
| **Product Owner** | Lucas Landgraf (CTO) |

---

## 1. Executive Summary

### 🚩 Problema de Negócio
A indústria de jogos tem visto uma mudança significativa em direção à acessibilidade e conveniência, mas os modelos tradicionais de console e PC ainda impõem barreiras consideráveis. O custo elevado de hardware de ponta, as frequentes atualizações de drivers e software, e a necessidade de espaço físico para grandes bibliotecas de jogos impedem que um público maior tenha acesso a experiências de alta qualidade.

> **Dado Crítico:** Estima-se que **60% dos gamers casuais** não investem em consoles de última geração devido ao preço, e a fragmentação do ecossistema dificulta a transição entre plataformas.

O resultado é uma base de usuários limitada e uma perda de receita potencial. O problema central é a **inacessibilidade de jogos de última geração** para uma massa de consumidores.

### 💎 Proposta de Valor
O **Kuma Cloud Gaming** resolve este problema ao democratizar o acesso a jogos AAA. Nossa proposta é clara: oferecer jogos de alta performance a qualquer pessoa, a qualquer hora e em qualquer dispositivo, eliminando a necessidade de hardware caro.

* **Streaming de Baixa Latência:** < 20ms.
* **Alta Qualidade:** 4K a 60fps.
* **Modelo:** Assinatura mensal acessível.

### 🎯 Objetivos do Projeto

**Objetivo Principal:**
* Lançar a plataforma em beta fechado para **1.000 usuários em até 9 meses**, provando a viabilidade técnica de streaming 4K/60fps com latência média < 20ms.

**Objetivos Secundários:**
* **Tecnologia:** Integrar o *Game Streaming Engine* para suportar no mínimo 5 títulos AAA sem quedas de framerate.
* **Performance:** Atingir latência input-to-display < 20ms para 95% dos usuários na área de cobertura.
* **Escalabilidade:** Suportar 100 usuários simultâneos em um único data center com 99,5% de uptime.

---

## 2. Stakeholder Analysis

| Stakeholder | Interesse | Influência | Expectativas Principais | Estratégia de Engajamento |
| :--- | :---: | :---: | :--- | :--- |
| **Gamers / Usuários** | Alto | Alto | Qualidade do streaming (sem lag), preço justo. | Ouvir feedback, beta testes e suporte ágil. |
| **Publishers / Devs** | Alto | Alto | Novas receitas, segurança (DRM). | Parcerias, mostrar potencial de mercado. |
| **Liderança (CEO/VPs)** | Alto | Alto | Viabilidade financeira e lucro. | Relatórios de progresso e foco em ROI. |
| **Time de Desenvolvimento** | Alto | Médio | Prazos realistas e recursos. | Reuniões frequentes (Agile) e valorização. |

### Perfil do Stakeholder Principal (CTO)
* **Nome:** Lucas Landgraf
* **Preocupação Técnica:** Garantir performance de 4K/60fps e escalabilidade para 1 milhão de jogadores.
* **Preocupação de Negócio:** Otimizar custo operacional de GPU/Cloud.

---

## 3. Requirements de Alto Nível

### 3.1 Requisitos Funcionais (Prioritários)

| ID | Requisito | Prioridade | Justificativa |
| :--- | :--- | :---: | :--- |
| **RF001** | Transmitir jogo em tempo real (<20ms e 4K). | **Crítica** | Core business do projeto. |
| **RF002** | Iniciar gameplay em < 15 segundos (sem download). | Alta | Proposta de valor de conveniência. |
| **RF003** | Sistema seguro de perfis e save-game na nuvem. | Alta | Continuidade da experiência do usuário. |

### 3.2 Requisitos Não-Funcionais (RNFs)

| ID | Atributo | Métrica Específica | Como Medir |
| :--- | :--- | :--- | :--- |
| **RNF001** | Performance | Latência input-to-display < 20ms (p95). | Network monitoring e testes de carga. |
| **RNF002** | Escalabilidade | Suportar 1 milhão de usuários (scale-out). | Stress testing em pré-produção. |
| **RNF003** | Disponibilidade | Uptime de 99,9% (SLA). | Monitoramento 24/7. |
| **RNF004** | Qualidade Vídeo | 4K @ 60fps com bitrate adaptativo. | Análise técnica de frame-drop. |
| **RNF005** | Segurança | Autenticação MFA e Criptografia E2E. | Pentesting e auditorias. |

---

## 4. Contexto e Restrições

### 4.1 Restrições Técnicas
* **Core:** C++ ou Rust para o motor de streaming (WebRTC/UDP).
* **Backend:** Python ou Go para microsserviços.
* **Infraestrutura:** 100% Cloud Native.
* **Compliance:** LGPD e PCI-DSS obrigatórios.

### 4.2 Restrições de Negócio
* **Orçamento:** R$ 5 milhões (Simulado).
* **Cronograma:** Beta em 9 meses, Lançamento em 1 ano.
* **Equipe:** 15 especialistas (Arquitetos e Engenheiros Sênior).

---

## 5. Riscos e Mitigação

| Risco | Probabilidade | Impacto | Estratégia de Mitigação | Owner |
| :--- | :---: | :---: | :--- | :--- |
| **Latência Alta** | Alta | Alto (9) | P&D focado em algoritmos de compressão e hardware dedicado. | CTO |
| **Falta de Jogos** | Média | Alto (6) | Focar em parcerias com devs e publishers menores inicialmente. | Parcerias |
| **Custos Cloud** | Média | Alto (6) | Otimização de GPU scheduling e contratos de longo prazo (Reserved Instances). | Finanças |

---

## 6. Success Criteria & Metrics

### Critérios de Aceitação (MVP)
1.  **Streaming Básico:** Transmissão funcional com input reativo.
2.  **Contas:** Criação de perfil e persistência de dados.
3.  **Seleção:** Catálogo navegável e início de sessão com 1 clique.

### KPIs (Indicadores Chave)
* **Latência Média:** Target < 20ms (Medição via logs da engine).
* **Conversão de Assinatura:** Target 30% dos usuários beta.
* **Retenção:** 80% no primeiro mês.

---

## 7. Roadmap Preliminar

* **Fase 1: Foundation (Semanas 1-4)**
    * Project Charter, Design Arquitetural e Stack Tecnológico.
* **Fase 2: Development (Semanas 5-12)**
    * Protótipo da Engine de Streaming e MVP Funcional (Auth + Catálogo).
* **Fase 3: Refinement (Semanas 13-16)**
    * Correção de bugs, Teste Beta e Otimização de Infraestrutura.

---

## 8. Team Structure

| Papel | Responsável | Responsabilidades |
| :--- | :--- | :--- |
| **Arquiteto Principal** | Lucas Landgraf | Decisões macro, documentação, liderança técnica. |
| **Arq. Dados** | Matheus Leandro | Modelagem, performance de banco, persistência. |
| **Arq. Integração** | Allyson Kenzo | APIs, microsserviços, segurança e comunicação. |
| **Eng. DevOps** | Gabriel Juliati | Infraestrutura, CI/CD, Kubernetes e Monitoramento. |
| **Eng. Qualidade** | Matheus Kudlake | Testes arquiteturais, validação de RNFs e métricas. |

**Rituais:** Reuniões semanais (Quartas-feiras) e Daily Standups assíncronas.

---

## 9. Next Steps

1.  **Imediato:** Finalizar análise de domínio e validar premissas de latência.
2.  **Próxima Semana:** Iniciar documento de Arquitetura de Alto Nível (C4 Model).
3.  **Questão Aberta:** Validar viabilidade de GPU Sharing em provedores cloud públicos (AWS/Azure).

---

## 10. Appendices - Glossário

| Termo | Definição |
| :--- | :--- |
| **Cloud Gaming** | Jogar games rodando em servidores remotos via streaming de vídeo. |
| **Latência** | Atraso entre o comando do input e a reação na tela. |
| **GPU Scheduling** | Gerenciamento compartilhado de placas de vídeo na nuvem. |
| **Microsserviços** | Arquitetura que divide o sistema em serviços pequenos e independentes. |

### Referências
* *Cloud Computing's Killer App: Gaming* (IEEE Spectrum).
* *NVIDIA vGPU Software User Guide*.
* *AWS EC2 User Guide*.
* *Newzoo Market Report (Xbox Cloud Gaming Growth)*.
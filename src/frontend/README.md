# Vet Life — Protótipo de frontend

Interface demonstrativa para a Vet Life, uma plataforma de gestão de clínica veterinária.
Este repositório contém apenas o frontend visual para apresentação ao cliente. Os dados
exibidos são fictícios e não há integração real com API, WhatsApp ou banco de dados.

## O que está no protótipo

- Login responsivo com identidade da Vet Life e movimento 3D sutil.
- Visão geral da rotina da clínica.
- Agenda com seletor de data, status e horários de atendimento.
- Cadastro de pacientes com pesquisa e cartões de prontuário.
- Central de conversas para acompanhar os contatos do WhatsApp e do assistente.
- Navegação responsiva: lateral no desktop e inferior no celular, incluindo saída da conta.
- Transições e revelação suave de conteúdo ao rolar a página.

## Como executar

Na pasta deste frontend:

```bash
npm install
npm run dev
```

Abra `http://localhost:3000` no navegador.

Para gerar uma versão de produção:

```bash
npm run build
```

## Fluxo de navegação

1. Preencha qualquer e-mail e senha válidos na tela de login.
2. Clique em **Entrar na Vet Life**.
3. A aplicação abre a **Visão geral**.
4. Use o menu para navegar entre **Agendamentos**, **Pacientes** e **Conversas**.
5. Em celular, o botão **Sair** fica no menu inferior.

## Organização do código

```text
app/
  layout.tsx                 Metadados globais e idioma da aplicação
  page.tsx                   Entrada do protótipo e estado de navegação
  globals.css                Design system, responsividade e animações

src/features/
  overview/                  Tela de visão geral
  appointments/              Tela de agendamentos
  patients/                  Tela e pesquisa de pacientes
  conversations/             Central de conversas do WhatsApp

public/
  vet-life-logo.jpeg         Arte de marca completa
  vet-life-symbol.jpeg       Símbolo usado na interface
```

## Direção visual

- Verde-petróleo como cor principal, com detalhes em menta e creme.
- Tipografia editorial nos títulos para transmitir cuidado e confiança.
- Componentes com alto contraste, áreas de toque confortáveis e adaptação para mobile.
- Animações curtas e discretas; usuários com redução de movimento ativada não recebem animações.

## Próximas etapas sugeridas

- Integrar autenticação real e controle de perfil.
- Conectar agenda, pacientes e conversas à API.
- Integrar a conta oficial do WhatsApp.
- Implementar o chatbot para confirmação e agendamento automático.
- Criar prontuário, notificações e regras de permissões.


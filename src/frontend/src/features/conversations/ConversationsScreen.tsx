'use client';

import { useState } from 'react';

type ConversationsScreenProps = {
  onOpenOverview: () => void;
  onOpenAppointments: () => void;
  onOpenPatients: () => void;
  onSignOut: () => void;
};

const conversations = [
  { name: 'Carlos Henrique', pet: 'Thor · Shih-tzu', preview: 'Pode confirmar o horário?', time: '09:12', initials: 'CH', unread: 2, tone: 'peach' },
  { name: 'Fernanda Alves', pet: 'Mel · SRD', preview: 'Obrigada, até mais tarde!', time: '08:45', initials: 'FA', unread: 0, tone: 'lilac' },
  { name: 'João Ribeiro', pet: 'Simba · Gato', preview: 'Qual o valor da consulta?', time: 'Ontem', initials: 'JR', unread: 0, tone: 'sky' },
  { name: 'Marina Costa', pet: 'Nina · Poodle', preview: 'Gostaria de agendar uma avaliação.', time: 'Ontem', initials: 'MC', unread: 1, tone: 'sand' },
];

export function ConversationsScreen({ onOpenOverview, onOpenAppointments, onOpenPatients, onSignOut }: ConversationsScreenProps) {
  const [selected, setSelected] = useState(0);
  const active = conversations[selected];

  return (
    <main className="agenda-page conversations-page">
      <aside className="agenda-sidebar">
        <div className="brand brand-sidebar"><span className="brand-symbol" role="img" aria-label="Símbolo Vet Life" /><strong>VET LIFE</strong></div>
        <nav className="sidebar-nav" aria-label="Navegação principal">
          <button type="button" onClick={onOpenOverview}>Visão geral</button>
          <button type="button" onClick={onOpenAppointments}>Agendamentos</button>
          <button type="button" onClick={onOpenPatients}>Pacientes</button>
          <button className="nav-active" type="button">Conversas</button>
        </nav>
        <div className="sidebar-footer"><span className="profile-dot">TS</span><div><strong>Dra. Trycia</strong><span>Perfil profissional</span></div><button type="button" onClick={onSignOut}>Sair</button></div>
      </aside>

      <section className="conversations-content">
        <header className="conversations-mobile-header"><p className="eyebrow">CENTRAL VET LIFE</p><h1>Conversas</h1></header>
        <aside className="chat-list-panel">
          <header><div><p className="eyebrow">CENTRAL VET LIFE</p><h1>Conversas</h1></div><button type="button" aria-label="Nova conversa">+</button></header>
          <label className="chat-search"><span>⌕</span><input placeholder="Buscar conversa" /></label>
          <div className="chat-filter"><button className="filter-selected" type="button">Todas</button><button type="button">Não lidas</button><button type="button">Bot</button></div>
          <div className="chat-list">
            {conversations.map((conversation, index) => <button className={`chat-item ${index === selected ? 'chat-selected' : ''}`} type="button" key={conversation.name} onClick={() => setSelected(index)}><span className={`patient-avatar patient-${conversation.tone}`}>{conversation.initials}</span><span className="chat-copy"><strong>{conversation.name}</strong><small>{conversation.pet}</small><em>{conversation.preview}</em></span><span className="chat-meta"><time>{conversation.time}</time>{conversation.unread > 0 && <b>{conversation.unread}</b>}</span></button>)}
          </div>
        </aside>

        <section className="chat-window" aria-label={`Conversa com ${active.name}`}>
          <header className="chat-window-header"><div className="chat-person"><span className={`patient-avatar patient-${active.tone}`}>{active.initials}</span><div><h2>{active.name}</h2><p>{active.pet} · WhatsApp</p></div></div><span className="bot-status"><i /> Assistente ativo</span></header>
          <div className="chat-messages">
            <p className="chat-date">Hoje</p>
            <div className="message incoming">Olá, Dra. Trycia! Gostaria de confirmar a consulta do Thor hoje.</div>
            <p className="message-time incoming-time">09:08</p>
            <div className="bot-message"><span>✦</span><p>O assistente identificou um pedido de confirmação para a consulta de hoje às <strong>09:30</strong>.</p></div>
            <div className="message outgoing">Olá, Carlos! A consulta do Thor está confirmada para hoje às 09:30. Estamos aguardando vocês. 💚</div>
            <p className="message-time outgoing-time">09:10 · Enviado</p>
            <div className="message incoming">Pode confirmar o horário?</div>
            <p className="message-time incoming-time">09:12</p>
          </div>
        </section>

        <aside className="chat-context"><div className="context-pet"><span className={`patient-avatar patient-${active.tone}`}>{active.initials}</span><h2>{active.pet.split(' · ')[0]}</h2><p>{active.pet.split(' · ')[1]}</p></div><dl><div><dt>Tutor</dt><dd>{active.name}</dd></div><div><dt>Próximo atendimento</dt><dd>Hoje, 09:30</dd></div><div><dt>Status</dt><dd className="confirmed-text">Confirmado</dd></div></dl><button type="button" onClick={onOpenAppointments}>Ver na agenda</button></aside>
      </section>

      <nav className="mobile-nav" aria-label="Navegação móvel"><button type="button" onClick={onOpenOverview}>Início</button><button type="button" onClick={onOpenAppointments}>Agenda</button><button type="button" onClick={onOpenPatients}>Pacientes</button><button className="nav-active" type="button">Conversas</button><button className="mobile-signout" type="button" onClick={onSignOut}>Sair</button></nav>
    </main>
  );
}

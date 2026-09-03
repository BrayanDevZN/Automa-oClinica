'use client';

import { useState } from 'react';

type AppointmentScreenProps = {
  onOpenOverview: () => void;
  onOpenPatients: () => void;
  onOpenConversations: () => void;
  onSignOut: () => void;
};

const appointments = [
  { time: '08:00', patient: 'Luna Martins', pet: 'Luna · Golden Retriever', type: 'Consulta de rotina', status: 'Confirmado', tone: 'confirmed', initials: 'LM' },
  { time: '09:30', patient: 'Carlos Henrique', pet: 'Thor · Shih-tzu', type: 'Retorno clínico', status: 'Aguardando', tone: 'waiting', initials: 'CH' },
  { time: '11:00', patient: 'Fernanda Alves', pet: 'Mel · SRD', type: 'Vacinação', status: 'Confirmado', tone: 'confirmed', initials: 'FA' },
  { time: '14:00', patient: 'João Ribeiro', pet: 'Simba · Gato', type: 'Avaliação dermatológica', status: 'Confirmado', tone: 'confirmed', initials: 'JR' },
  { time: '16:30', patient: 'Marina Costa', pet: 'Nina · Poodle', type: 'Consulta de rotina', status: 'Pendente', tone: 'pending', initials: 'MC' },
];

export function AppointmentScreen({ onOpenOverview, onOpenPatients, onOpenConversations, onSignOut }: AppointmentScreenProps) {
  const [selectedDate, setSelectedDate] = useState('2026-09-03');
  const formattedDate = new Intl.DateTimeFormat('pt-BR', { day: '2-digit', month: 'long' }).format(new Date(`${selectedDate}T12:00:00`));
  return (
    <main className="agenda-page">
      <aside className="agenda-sidebar">
        <div className="brand brand-sidebar">
          <span className="brand-symbol" role="img" aria-label="Símbolo Vet Life" />
          <strong>VET LIFE</strong>
        </div>

        <nav className="sidebar-nav" aria-label="Navegação principal">
          <button type="button" onClick={onOpenOverview}>Visão geral</button>
          <button className="nav-active" type="button">Agendamentos</button>
          <button type="button" onClick={onOpenPatients}>Pacientes</button>
          <button type="button" onClick={onOpenConversations}>Conversas</button>
        </nav>

        <div className="sidebar-footer">
          <span className="profile-dot">TS</span>
          <div><strong>Dra. Trycia</strong><span>Perfil profissional</span></div>
          <button type="button" onClick={onSignOut}>Sair</button>
        </div>
      </aside>

      <section className="agenda-content">
        <header className="agenda-header">
          <div>
            <p className="eyebrow">AGENDA VET LIFE</p>
            <h1>Olá, Dra. Trycia <span>✦</span></h1>
            <p>Acompanhe os atendimentos de {formattedDate}.</p>
          </div>
          <button className="new-appointment" type="button">+ Novo agendamento</button>
        </header>

        <section className="agenda-stats" aria-label="Resumo do dia">
          <article><span>Consultas hoje</span><strong>12</strong><small>+2 em relação à terça</small></article>
          <article><span>Confirmadas</span><strong>9</strong><small className="positive">75% da agenda</small></article>
          <article><span>Aguardando resposta</span><strong>3</strong><small>Enviar lembrete</small></article>
        </section>

        <section className="schedule-card" aria-labelledby="agenda-title">
          <header className="schedule-header">
            <div>
              <p className="eyebrow">QUARTA-FEIRA</p>
              <h2 id="agenda-title">{formattedDate}</h2>
            </div>
            <label className="date-picker" aria-label="Escolher data"><span>⌄</span><input type="date" value={selectedDate} onChange={(event) => setSelectedDate(event.target.value)} /></label>
          </header>

          <div className="appointments-list">
            {appointments.map((appointment) => (
              <article className="appointment-row" key={`${appointment.time}-${appointment.patient}`}>
                <time>{appointment.time}</time>
                <span className="appointment-line" />
                <span className="patient-avatar">{appointment.initials}</span>
                <div className="appointment-person"><strong>{appointment.patient}</strong><span>{appointment.pet}</span></div>
                <div className="appointment-type"><span>{appointment.type}</span></div>
                <span className={`status-pill ${appointment.tone}`}>{appointment.status}</span>
                <button className="more-button" type="button" aria-label={`Mais opções para ${appointment.patient}`}>•••</button>
              </article>
            ))}
          </div>
        </section>
      </section>

      <nav className="mobile-nav" aria-label="Navegação móvel">
        <button type="button" onClick={onOpenOverview}>Início</button><button className="nav-active" type="button">Agenda</button><button type="button" onClick={onOpenPatients}>Pacientes</button><button type="button" onClick={onOpenConversations}>Conversas</button><button className="mobile-signout" type="button" onClick={onSignOut}>Sair</button>
      </nav>
    </main>
  );
}

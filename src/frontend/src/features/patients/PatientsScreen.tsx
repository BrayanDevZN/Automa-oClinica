'use client';

import { useMemo, useState } from 'react';

type PatientsScreenProps = {
  onOpenOverview: () => void;
  onOpenAppointments: () => void;
  onOpenConversations: () => void;
  onSignOut: () => void;
};

const patients = [
  { name: 'Luna Martins', pet: 'Luna · Golden Retriever', tutor: 'Mariana Martins', next: 'Hoje, 08:00', initials: 'LM', color: 'mint' },
  { name: 'Carlos Henrique', pet: 'Thor · Shih-tzu', tutor: 'Carlos Henrique', next: 'Hoje, 09:30', initials: 'CH', color: 'peach' },
  { name: 'Fernanda Alves', pet: 'Mel · SRD', tutor: 'Fernanda Alves', next: 'Hoje, 11:00', initials: 'FA', color: 'lilac' },
  { name: 'João Ribeiro', pet: 'Simba · Gato', tutor: 'João Ribeiro', next: 'Hoje, 14:00', initials: 'JR', color: 'sky' },
  { name: 'Marina Costa', pet: 'Nina · Poodle', tutor: 'Marina Costa', next: 'Hoje, 16:30', initials: 'MC', color: 'sand' },
  { name: 'Beatriz Leal', pet: 'Bento · Bulldog', tutor: 'Beatriz Leal', next: '12 set, 10:00', initials: 'BL', color: 'rose' },
];

export function PatientsScreen({ onOpenOverview, onOpenAppointments, onOpenConversations, onSignOut }: PatientsScreenProps) {
  const [query, setQuery] = useState('');
  const filteredPatients = useMemo(() => patients.filter((patient) => `${patient.name} ${patient.pet} ${patient.tutor}`.toLocaleLowerCase().includes(query.toLocaleLowerCase())), [query]);

  return (
    <main className="agenda-page patients-page">
      <aside className="agenda-sidebar">
        <div className="brand brand-sidebar"><span className="brand-symbol" role="img" aria-label="Símbolo Vet Life" /><strong>VET LIFE</strong></div>
        <nav className="sidebar-nav" aria-label="Navegação principal">
          <button type="button" onClick={onOpenOverview}>Visão geral</button>
          <button type="button" onClick={onOpenAppointments}>Agendamentos</button>
          <button className="nav-active" type="button">Pacientes</button>
          <button type="button" onClick={onOpenConversations}>Conversas</button>
        </nav>
        <div className="sidebar-footer"><span className="profile-dot">TS</span><div><strong>Dra. Trycia</strong><span>Perfil profissional</span></div><button type="button" onClick={onSignOut}>Sair</button></div>
      </aside>

      <section className="agenda-content">
        <header className="agenda-header patients-header">
          <div><p className="eyebrow">CADASTRO VET LIFE</p><h1>Pacientes <span>✦</span></h1><p>Tenha os dados de cada paciente sempre por perto.</p></div>
          <button className="new-appointment" type="button">+ Novo paciente</button>
        </header>

        <section className="patients-toolbar" aria-label="Buscar pacientes">
          <label className="search-field"><span aria-hidden="true">⌕</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Buscar por tutor, paciente ou espécie" /></label>
          <button type="button" className="filter-button">Todos os pacientes <span>⌄</span></button>
        </section>

        <section className="patients-summary"><span><strong>{patients.length}</strong> pacientes cadastrados</span><span>Ordenado por atendimento mais próximo</span></section>

        <section className="patient-grid" aria-live="polite">
          {filteredPatients.map((patient) => (
            <article className="patient-card" key={patient.name}>
              <div className="patient-top"><span className={`patient-avatar patient-${patient.color}`}>{patient.initials}</span><button type="button" aria-label={`Opções de ${patient.name}`}>•••</button></div>
              <h2>{patient.name}</h2>
              <p>{patient.pet}</p>
              <div className="patient-details"><span>Tutor</span><strong>{patient.tutor}</strong><span>Próximo atendimento</span><strong className="next-date">{patient.next}</strong></div>
              <button type="button" className="patient-action">Ver prontuário</button>
            </article>
          ))}
          {filteredPatients.length === 0 && <p className="empty-state">Nenhum paciente encontrado.</p>}
        </section>
      </section>

      <nav className="mobile-nav" aria-label="Navegação móvel"><button type="button" onClick={onOpenOverview}>Início</button><button type="button" onClick={onOpenAppointments}>Agenda</button><button className="nav-active" type="button">Pacientes</button><button type="button" onClick={onOpenConversations}>Conversas</button><button className="mobile-signout" type="button" onClick={onSignOut}>Sair</button></nav>
    </main>
  );
}

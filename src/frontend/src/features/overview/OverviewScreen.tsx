type OverviewScreenProps = {
  onOpenAppointments: () => void;
  onOpenPatients: () => void;
  onOpenConversations: () => void;
  onSignOut: () => void;
};

const nextAppointments = [
  ['09:30', 'Carlos Henrique', 'Thor · Retorno clínico', 'Aguardando'],
  ['11:00', 'Fernanda Alves', 'Mel · Vacinação', 'Confirmado'],
  ['14:00', 'João Ribeiro', 'Simba · Avaliação dermatológica', 'Confirmado'],
];

export function OverviewScreen({ onOpenAppointments, onOpenPatients, onOpenConversations, onSignOut }: OverviewScreenProps) {
  return (
    <main className="agenda-page overview-page">
      <aside className="agenda-sidebar">
        <div className="brand brand-sidebar"><span className="brand-symbol" role="img" aria-label="Símbolo Vet Life" /><strong>VET LIFE</strong></div>
        <nav className="sidebar-nav" aria-label="Navegação principal">
          <button className="nav-active" type="button">Visão geral</button>
          <button type="button" onClick={onOpenAppointments}>Agendamentos</button>
          <button type="button" onClick={onOpenPatients}>Pacientes</button>
          <button type="button" onClick={onOpenConversations}>Conversas</button>
        </nav>
        <div className="sidebar-footer"><span className="profile-dot">TS</span><div><strong>Dra. Trycia</strong><span>Perfil profissional</span></div><button type="button" onClick={onSignOut}>Sair</button></div>
      </aside>

      <section className="agenda-content">
        <header className="agenda-header">
          <div><p className="eyebrow">VISÃO GERAL</p><h1>Seu dia está fluindo bem <span>✦</span></h1><p>Uma visão leve da rotina da Vet Life nesta quarta-feira.</p></div>
          <button className="new-appointment" type="button" onClick={onOpenAppointments}>Ver agenda completa</button>
        </header>

        <section className="agenda-stats" aria-label="Resumo da clínica">
          <article><span>Atendimentos hoje</span><strong>12</strong><small>5 já concluídos</small></article>
          <article><span>Confirmações</span><strong>9</strong><small className="positive">75% da agenda</small></article>
          <article><span>Mensagens novas</span><strong>4</strong><small>2 precisam de resposta</small></article>
        </section>

        <section className="overview-grid">
          <article className="schedule-card next-card">
            <header className="schedule-header"><div><p className="eyebrow">PRÓXIMOS ATENDIMENTOS</p><h2>Agenda de hoje</h2></div><button type="button" className="text-action" onClick={onOpenAppointments}>Abrir agenda</button></header>
            <div className="next-list">
              {nextAppointments.map(([time, tutor, pet, status]) => <div className="next-row" key={time}><time>{time}</time><div><strong>{tutor}</strong><span>{pet}</span></div><span className={`status-pill ${status === 'Confirmado' ? 'confirmed' : 'waiting'}`}>{status}</span></div>)}
            </div>
          </article>

          <article className="assistant-card">
            <div className="assistant-orb">✦</div>
            <p className="eyebrow">ASSISTENTE VET LIFE</p>
            <h2>Seu atendimento automático está ativo.</h2>
            <p>Hoje, o assistente enviou 8 lembretes de consulta e organizou 3 pedidos de agendamento.</p>
            <button type="button" onClick={onOpenConversations}>Ver conversas</button>
          </article>
        </section>
      </section>

      <nav className="mobile-nav" aria-label="Navegação móvel"><button className="nav-active" type="button">Início</button><button type="button" onClick={onOpenAppointments}>Agenda</button><button type="button" onClick={onOpenPatients}>Pacientes</button><button type="button" onClick={onOpenConversations}>Conversas</button><button className="mobile-signout" type="button" onClick={onSignOut}>Sair</button></nav>
    </main>
  );
}

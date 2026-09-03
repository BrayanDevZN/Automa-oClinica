'use client';

import { FormEvent, useState } from 'react';
import { AppointmentScreen } from '@/src/features/appointments/AppointmentScreen';
import { OverviewScreen } from '@/src/features/overview/OverviewScreen';
import { PatientsScreen } from '@/src/features/patients/PatientsScreen';
import { ConversationsScreen } from '@/src/features/conversations/ConversationsScreen';

export default function Home() {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [currentScreen, setCurrentScreen] = useState<'overview' | 'appointments' | 'patients' | 'conversations'>('overview');

  function handleLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setCurrentScreen('overview');
    setIsSignedIn(true);
  }

  if (isSignedIn) {
    if (currentScreen === 'appointments') {
      return <AppointmentScreen onOpenOverview={() => setCurrentScreen('overview')} onOpenPatients={() => setCurrentScreen('patients')} onOpenConversations={() => setCurrentScreen('conversations')} onSignOut={() => setIsSignedIn(false)} />;
    }

    if (currentScreen === 'patients') {
      return <PatientsScreen onOpenOverview={() => setCurrentScreen('overview')} onOpenAppointments={() => setCurrentScreen('appointments')} onOpenConversations={() => setCurrentScreen('conversations')} onSignOut={() => setIsSignedIn(false)} />;
    }

    if (currentScreen === 'conversations') {
      return <ConversationsScreen onOpenOverview={() => setCurrentScreen('overview')} onOpenAppointments={() => setCurrentScreen('appointments')} onOpenPatients={() => setCurrentScreen('patients')} onSignOut={() => setIsSignedIn(false)} />;
    }

    return <OverviewScreen onOpenAppointments={() => setCurrentScreen('appointments')} onOpenPatients={() => setCurrentScreen('patients')} onOpenConversations={() => setCurrentScreen('conversations')} onSignOut={() => setIsSignedIn(false)} />;
  }

  return (
    <main className="login-page">
      <div className="orb orb-one" />
      <div className="orb orb-two" />
      <div className="orbit orbit-one" />
      <div className="orbit orbit-two" />

      <section className="login-shell" aria-labelledby="page-title">
        <aside className="welcome-panel">
          <div className="brand brand-light">
            <span className="brand-symbol" role="img" aria-label="Símbolo Vet Life" />
            <div>
              <strong>VET LIFE</strong>
              <span>Dra. Trycia Soares</span>
            </div>
          </div>

          <div className="welcome-copy">
            <p className="eyebrow">GESTÃO QUE CUIDA</p>
            <h1 id="page-title">Mais tempo para o que importa.</h1>
            <p>Organize a rotina da clínica, os atendimentos e as conversas com carinho em cada detalhe.</p>
          </div>

          <div className="benefit-list" aria-label="Benefícios da plataforma">
            <span>Agenda inteligente</span>
            <span>Conversas em um só lugar</span>
            <span>Confirmações automáticas</span>
          </div>
        </aside>

        <section className="access-panel" aria-labelledby="access-title">
          <div className="mobile-brand brand">
            <span className="brand-symbol" role="img" aria-label="Símbolo Vet Life" />
            <strong>VET LIFE</strong>
          </div>
          <p className="eyebrow">ACESSO SEGURO</p>
          <h2 id="access-title">Que bom ter você aqui.</h2>
          <p className="access-subtitle">Entre para cuidar da sua rotina com mais leveza.</p>

          <form className="login-form" onSubmit={handleLogin}>
            <label>
              E-mail profissional
              <input type="email" placeholder="seuemail@vetlife.com.br" autoComplete="email" required />
            </label>
            <label>
              Senha
              <input type="password" placeholder="Digite sua senha" autoComplete="current-password" required />
            </label>
            <div className="form-options">
              <label className="remember"><input type="checkbox" /> Lembrar de mim</label>
              <button type="button" className="link-button">Esqueci minha senha</button>
            </div>
            <button className="primary-button" type="submit">Entrar na Vet Life</button>
          </form>
        </section>
      </section>
    </main>
  );
}

'use client'

import { useState } from 'react'
import {
  ArrowUpRight,
  Bell,
  CheckCircle2,
  ChevronRight,
  CircleHelp,
  Clock3,
  FileText,
  Headphones,
  LockKeyhole,
  Menu,
  Plus,
  Search,
  ShieldCheck,
  Sparkles,
  UserRound,
  Wifi,
  X,
} from 'lucide-react'
import { Button } from '@/components/ui/button'

const reports = [
  {
    id: 'EC-2048',
    title: 'Connexion Internet instable',
    category: 'Informatique',
    date: '12 juin 2024',
    status: 'En cours de traitement',
    tone: 'progress',
    icon: Wifi,
  },
  {
    id: 'EC-2041',
    title: 'Climatisation du bureau 3B',
    category: 'Conditions de travail',
    date: '05 juin 2024',
    status: 'Résolu',
    tone: 'resolved',
    icon: CheckCircle2,
  },
  {
    id: 'EC-1987',
    title: 'Suggestion — espace de pause',
    category: 'Suggestions et améliorations',
    date: '28 mai 2024',
    status: 'Clôturé',
    tone: 'closed',
    icon: Sparkles,
  },
]

export function EmployeeCareDashboard() {
  const [activeNav, setActiveNav] = useState('Accueil')
  const [showNotifications, setShowNotifications] = useState(false)
  const [mobileMenu, setMobileMenu] = useState(false)

  return (
    <div className="min-h-screen bg-[#f7f5f0] text-[#202824]">
      <header className="border-b border-[#dfe3dd] bg-[#f7f5f0]/95">
        <div className="mx-auto flex h-[76px] max-w-[1440px] items-center justify-between px-5 md:px-10">
          <div className="flex items-center gap-10">
            <a href="#top" className="flex items-center gap-3" aria-label="EmployeeCare, accueil">
              <span className="flex size-9 items-center justify-center rounded-[10px] bg-[#173b3f] text-[#f7f5f0]">
                <ShieldCheck aria-hidden="true" className="size-5" strokeWidth={1.8} />
              </span>
              <span className="font-sans text-[17px] font-semibold tracking-[-0.03em]">EmployeeCare</span>
            </a>
            <nav className="hidden items-center gap-1 md:flex" aria-label="Navigation principale">
              {['Accueil', 'Mes signalements', 'Ressources'].map((item) => (
                <button
                  key={item}
                  onClick={() => setActiveNav(item)}
                  className={`rounded-md px-4 py-2 text-[13px] font-medium transition-colors ${activeNav === item ? 'bg-[#e5e9e3] text-[#173b3f]' : 'text-[#66736f] hover:text-[#173b3f]'}`}
                >
                  {item}
                </button>
              ))}
            </nav>
          </div>
          <div className="flex items-center gap-2">
            <div className="relative">
              <button
                aria-label="Voir les notifications"
                aria-expanded={showNotifications}
                onClick={() => setShowNotifications(!showNotifications)}
                className="flex size-10 items-center justify-center rounded-full text-[#66736f] transition-colors hover:bg-[#e8ebe6] hover:text-[#173b3f]"
              >
                <Bell className="size-[18px]" strokeWidth={1.8} />
                <span className="absolute right-2 top-2 size-1.5 rounded-full bg-[#a86412]" />
              </button>
              {showNotifications && (
                <div className="absolute right-0 top-12 z-20 w-72 border border-[#dfe3dd] bg-white p-4 shadow-[0_16px_40px_rgba(32,40,36,0.12)]">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#66736f]">Notifications</p>
                  <p className="mt-3 text-sm leading-5 text-[#202824]">Votre signalement EC-2048 a été pris en charge par Sophie Dubois.</p>
                  <p className="mt-2 text-xs text-[#66736f]">Il y a 2 heures</p>
                </div>
              )}
            </div>
            <div className="hidden h-7 w-px bg-[#dfe3dd] md:block" />
            <button className="hidden items-center gap-2 rounded-full px-2 py-1.5 text-left md:flex" aria-label="Ouvrir le profil de Paul Martin">
              <span className="flex size-8 items-center justify-center rounded-full bg-[#dce8e1] text-xs font-semibold text-[#173b3f]">PM</span>
              <span className="pr-1 text-[13px] font-medium">Paul Martin</span>
            </button>
            <button className="flex size-10 items-center justify-center rounded-md md:hidden" onClick={() => setMobileMenu(!mobileMenu)} aria-label="Ouvrir le menu">
              {mobileMenu ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>
        {mobileMenu && <nav className="flex flex-col gap-1 border-t border-[#dfe3dd] px-5 py-3 md:hidden" aria-label="Navigation mobile">{['Accueil', 'Mes signalements', 'Ressources'].map((item) => <button key={item} onClick={() => { setActiveNav(item); setMobileMenu(false) }} className="px-3 py-3 text-left text-sm font-medium text-[#173b3f]">{item}</button>)}</nav>}
      </header>

      <main id="top" className="mx-auto max-w-[1200px] px-5 pb-16 pt-10 md:px-10 md:pt-16">
        {activeNav === 'Accueil' && <section className="grid items-end gap-10 border-b border-[#dfe3dd] pb-12 lg:grid-cols-[1fr_360px]">
          <div>
            <p className="mb-5 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#66736f]"><span className="size-1.5 rounded-full bg-[#287a55]" />Espace personnel</p>
            <h1 className="max-w-[680px] font-serif text-[clamp(2.7rem,6vw,5.25rem)] leading-[0.96] tracking-[-0.065em] text-[#173b3f]">Bonjour Paul,<br /><em className="font-normal text-[#287a55]">que pouvons-nous</em><br />faire pour vous ?</h1>
            <p className="mt-7 max-w-[500px] text-[15px] leading-7 text-[#66736f]">Signalez une situation, suivez vos demandes et retrouvez les réponses de votre entreprise au même endroit.</p>
          </div>
          <div className="relative overflow-hidden border border-[#cbd8ce] bg-[#e4eee7] p-6 lg:mb-1">
            <div className="absolute -right-8 -top-8 size-28 rounded-full border border-[#b6cdbd]" />
            <div className="absolute -right-3 -top-3 size-14 rounded-full border border-[#b6cdbd]" />
            <div className="relative flex items-start justify-between"><div className="flex size-10 items-center justify-center rounded-full bg-[#287a55] text-white"><Plus className="size-5" /></div><span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#287a55]">Nouveau</span></div>
            <h2 className="relative mt-12 text-[21px] font-semibold tracking-[-0.03em] text-[#173b3f]">Un problème à signaler ?</h2>
            <p className="relative mt-2 max-w-[260px] text-[13px] leading-5 text-[#587064]">Quelques minutes suffisent pour nous aider à comprendre et agir.</p>
            <Button className="relative mt-5 rounded-md bg-[#173b3f] px-4 text-sm text-white hover:bg-[#24575a]">Créer un signalement <ArrowUpRight data-icon="inline-end" /></Button>
          </div>
        </section>}

        {activeNav === 'Accueil' && <section className="grid gap-12 py-12 lg:grid-cols-[1fr_330px]">
          <div>
            <div className="mb-6 flex items-end justify-between"><div><p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#66736f]">Votre activité</p><h2 className="mt-2 font-serif text-[32px] tracking-[-0.04em] text-[#173b3f]">Vos signalements</h2></div><button className="hidden items-center gap-2 text-[13px] font-semibold text-[#287a55] hover:text-[#173b3f] sm:flex">Voir tout <ChevronRight className="size-4" /></button></div>
            <div className="divide-y divide-[#dfe3dd] border-y border-[#dfe3dd]">{reports.map((report) => { const Icon = report.icon; return <button key={report.id} className="group flex w-full items-center gap-4 py-5 text-left transition-colors hover:bg-[#eef1ec] sm:gap-5"><span className={`flex size-10 shrink-0 items-center justify-center rounded-full ${report.tone === 'progress' ? 'bg-[#f5e8cf] text-[#a86412]' : report.tone === 'resolved' ? 'bg-[#dcebe1] text-[#287a55]' : 'bg-[#e8ebe6] text-[#66736f]'}`}><Icon className="size-[17px]" strokeWidth={1.8} /></span><span className="min-w-0 flex-1"><span className="flex flex-wrap items-center gap-x-3 gap-y-1"><span className="truncate text-[14px] font-semibold text-[#202824]">{report.title}</span><span className="text-[11px] font-medium text-[#8a9590]">{report.id}</span></span><span className="mt-1 block text-[12px] text-[#66736f]">{report.category} <span className="mx-1 text-[#b7c0ba]">·</span> {report.date}</span></span><span className={`hidden text-right text-[12px] font-medium sm:block ${report.tone === 'progress' ? 'text-[#a86412]' : report.tone === 'resolved' ? 'text-[#287a55]' : 'text-[#66736f]'}`}>{report.status}</span><ChevronRight className="size-4 shrink-0 text-[#a0aaa4] transition-transform group-hover:translate-x-1" /></button> })}</div>
            <button className="mt-5 flex items-center gap-2 text-[13px] font-semibold text-[#287a55] sm:hidden">Voir tous les signalements <ChevronRight className="size-4" /></button>
          </div>

          <aside className="border-l border-[#dfe3dd] pl-0 lg:pl-9"><p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#66736f]">À savoir</p><div className="mt-5 flex gap-3"><LockKeyhole className="mt-0.5 size-5 shrink-0 text-[#287a55]" strokeWidth={1.8} /><div><h3 className="text-[15px] font-semibold text-[#173b3f]">Vos informations sont protégées</h3><p className="mt-2 text-[13px] leading-6 text-[#66736f]">Votre signalement est visible uniquement par les personnes habilitées à le traiter. Vous choisissez le niveau de confidentialité adapté à votre situation.</p><button className="mt-4 flex items-center gap-2 text-[12px] font-semibold text-[#287a55]">Comprendre la confidentialité <ArrowUpRight className="size-3.5" /></button></div></div><div className="mt-10 border-t border-[#dfe3dd] pt-6"><div className="flex items-center gap-3"><Headphones className="size-5 text-[#173b3f]" strokeWidth={1.8} /><span className="text-[14px] font-semibold text-[#173b3f]">Besoin d'aide ?</span></div><p className="mt-2 text-[13px] leading-6 text-[#66736f]">Consultez les ressources internes ou contactez votre référent.</p><button className="mt-3 flex items-center gap-2 text-[12px] font-semibold text-[#287a55]">Accéder aux ressources <ChevronRight className="size-3.5" /></button></div></aside>
        </section>}

        {activeNav === 'Accueil' && null}
        {activeNav === 'Mes signalements' && <section className="border-y border-[#dfe3dd] py-12">
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#66736f]">Votre activité</p>
          <h1 className="mt-3 font-serif text-[42px] tracking-[-0.05em] text-[#173b3f]">Mes signalements</h1>
          <p className="mt-4 max-w-xl text-[15px] leading-7 text-[#66736f]">Retrouvez ici l&apos;historique de vos demandes et leur état d&apos;avancement.</p>
          <div className="mt-8 divide-y divide-[#dfe3dd] border-y border-[#dfe3dd]">{reports.map((report) => { const Icon = report.icon; return <div key={report.id} className="flex items-center gap-4 py-5"><span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[#e8ebe6] text-[#287a55]"><Icon className="size-[17px]" /></span><div className="min-w-0 flex-1"><p className="font-semibold text-[#202824]">{report.title}</p><p className="mt-1 text-xs text-[#66736f]">{report.id} · {report.category} · {report.date}</p></div><span className="hidden text-xs font-medium text-[#287a55] sm:block">{report.status}</span></div> })}</div>
        </section>}
        {activeNav === 'Ressources' && <section className="border-y border-[#dfe3dd] py-12">
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#66736f]">Centre d&apos;aide</p>
          <h1 className="mt-3 font-serif text-[42px] tracking-[-0.05em] text-[#173b3f]">Ressources</h1>
          <p className="mt-4 max-w-xl text-[15px] leading-7 text-[#66736f]">Les informations utiles pour comprendre vos droits, signaler une situation et être accompagné.</p>
          <div className="mt-8 grid gap-4 md:grid-cols-3"><div className="border border-[#dfe3dd] bg-white p-6"><FileText className="size-5 text-[#287a55]" /><h2 className="mt-5 font-semibold text-[#173b3f]">Guide du signalement</h2><p className="mt-2 text-sm leading-6 text-[#66736f]">Les étapes et les bonnes pratiques pour faire un signalement.</p></div><div className="border border-[#dfe3dd] bg-white p-6"><LockKeyhole className="size-5 text-[#287a55]" /><h2 className="mt-5 font-semibold text-[#173b3f]">Confidentialité</h2><p className="mt-2 text-sm leading-6 text-[#66736f]">Comprendre qui peut accéder à vos informations.</p></div><div className="border border-[#dfe3dd] bg-white p-6"><Headphones className="size-5 text-[#287a55]" /><h2 className="mt-5 font-semibold text-[#173b3f]">Besoin d&apos;aide ?</h2><p className="mt-2 text-sm leading-6 text-[#66736f]">Contactez votre référent ou consultez le centre d&apos;aide.</p></div></div>
        </section>}
        <footer className="flex flex-col gap-3 border-t border-[#dfe3dd] pt-6 text-[11px] text-[#8a9590] sm:flex-row sm:items-center sm:justify-between"><span>EmployeeCare · Espace employé</span><div className="flex gap-5"><a href="#confidentialite" className="hover:text-[#173b3f]">Confidentialité</a><a href="#aide" className="hover:text-[#173b3f]">Centre d'aide</a><span className="flex items-center gap-1"><CircleHelp className="size-3.5" /> Besoin d'assistance</span></div></footer>
      </main>
    </div>
  )
}

"use client";

import React, { useMemo, useState } from "react";
import { ArrowRight, Mail, Globe2, Wind, Target, Microscope, Activity } from "lucide-react";
import { motion } from "framer-motion";

type Lang = "en" | "jp";

type CardItem = {
  title: string;
  text: string;
  icon: typeof Target;
};

type CopySet = {
  nav: { about: string; pipeline: string; contact: string; lang: string };
  heroKicker: string;
  heroTitle: string;
  heroBody: string;
  heroCta: string;
  aboutTitle: string;
  aboutBody1: string;
  aboutBody2: string;
  aboutBody3: string;
  representativeLabel: string;
  representativeName: string;
  representativeRole: string;
  cards: CardItem[];
  pipelineTitle: string;
  pipelineLead: string;
  table: {
    program: string;
    modality: string;
    disease: string;
    stage: string;
    rowProgram: string;
    rowModality: string;
    rowDisease: string;
    rowStage: string;
  };
  pipelineNote: string;
  contactTitle: string;
  contactLead: string;
  footer: string;
};

const copy: Record<Lang, CopySet> = {
  en: {
    nav: { about: "About", pipeline: "Pipeline", contact: "Contact", lang: "JP" },
    heroKicker: "Respiratory Disease-Focused Biotechnology Company",
    heroTitle: "Developing inhaled therapeutics for serious respiratory diseases.",
    heroBody:
      "Kyu Therapeutics is developing innovative inhaled medicines for serious respiratory diseases, including idiopathic pulmonary fibrosis (IPF) and interstitial lung diseases (ILDs), with the aim of delivering therapeutic effects directly to the lung.",
    heroCta: "Contact us",
    aboutTitle: "About Kyu Therapeutics",
    aboutBody1:
      "Kyu Therapeutics is a biotechnology company focused on the development of inhaled therapeutics for serious respiratory diseases.",
    aboutBody2:
      "Our approach is based on targeted local delivery to the lung, aiming to enhance therapeutic exposure at the site of disease while reducing unnecessary systemic burden.",
    aboutBody3:
      "By combining respiratory disease biology, formulation strategy, and translational development expertise, we aim to create differentiated treatment options for patients with high unmet medical needs.",
    representativeLabel: "Representative",
    representativeName: "Kazuhiro Ito",
    representativeRole: "Representative Director of Kyu Therapeutics Inc.",
    cards: [
      {
        title: "Targeted Local Delivery",
        text: "Designed to deliver therapeutic exposure directly to the lung.",
        icon: Target,
      },
      {
        title: "Respiratory Disease Focus",
        text: "Focused on serious respiratory diseases including IPF and ILD.",
        icon: Wind,
      },
      {
        title: "Translational Development",
        text: "Built on disease biology, formulation, and development expertise.",
        icon: Microscope,
      },
    ],
    pipelineTitle: "Pipeline",
    pipelineLead:
      "Our lead program is designed to explore the potential of inhaled local delivery for fibrotic lung diseases.",
    table: {
      program: "Program",
      modality: "Modality / Approach",
      disease: "Target Disease",
      stage: "Stage",
      rowProgram: "HL001-DPI",
      rowModality: "Inhaled small molecule therapeutic",
      rowDisease: "IPF / ILD",
      rowStage: "Preclinical",
    },
    pipelineNote:
      "HL001-DPI is our lead preclinical program designed for serious fibrotic respiratory diseases, including IPF and ILD. The program is based on an inhaled delivery approach intended to provide direct exposure to the lung.",
    contactTitle: "Contact",
    contactLead: "For partnership, investment, and collaboration inquiries, please contact us.",
    footer: "© 2026 Kyu Therapeutics Inc. All rights reserved.",
  },
  jp: {
    nav: { about: "会社概要", pipeline: "パイプライン", contact: "お問い合わせ", lang: "EN" },
    heroKicker: "呼吸器疾患創薬のバイオテクノロジー企業",
    heroTitle: "重篤な呼吸器疾患に対する吸入治療薬を開発する。",
    heroBody:
      "Kyu Therapeuticsは、特発性肺線維症（IPF）および間質性肺疾患（ILD）をはじめとした重篤な呼吸器疾患に対し、肺への局所送達を活かした革新的な吸入治療薬の開発を目指すバイオテクノロジー企業です。",
    heroCta: "お問い合わせ",
    aboutTitle: "Kyu Therapeuticsについて",
    aboutBody1:
      "Kyu Therapeuticsは、重篤な呼吸器疾患に対する吸入治療薬の開発に取り組むバイオテクノロジー企業です。",
    aboutBody2:
      "私たちは、肺への局所送達というアプローチにより、疾患部位における治療効果の最大化と、不要な全身曝露の低減を目指しています。",
    aboutBody3:
      "呼吸器疾患の病態理解、製剤戦略、トランスレーショナル開発の知見を統合し、アンメットメディカルニーズの高い患者さんに新たな治療選択肢を届けることを目指します。",
    representativeLabel: "CEO",
    representativeName: "伊藤 一洋",
    representativeRole: "Kyu Therapeutics株式会社 CEO。",
    cards: [
      {
        title: "肺への局所送達",
        text: "疾患部位である肺に直接的な治療曝露を届けることを目指します。",
        icon: Target,
      },
      {
        title: "呼吸器疾患への集中",
        text: "IPFおよびILDをはじめとした重篤な呼吸器疾患に注力します。",
        icon: Wind,
      },
      {
        title: "トランスレーショナル開発",
        text: "病態理解、製剤、開発戦略を統合した創薬開発を推進します。",
        icon: Microscope,
      },
    ],
    pipelineTitle: "Pipeline",
    pipelineLead:
      "当社のリードプログラムは、線維化性呼吸器疾患に対する吸入局所送達の可能性を探索するものです。",
    table: {
      program: "Program",
      modality: "Modality / Approach",
      disease: "Target Disease",
      stage: "Stage",
      rowProgram: "HL001-DPI",
      rowModality: "Inhaled small molecule therapeutic",
      rowDisease: "IPF / ILD",
      rowStage: "Preclinical",
    },
    pipelineNote:
      "HL001-DPIは、IPFおよびILDをはじめとする重篤な線維化性呼吸器疾患を対象とした前臨床段階のリードプログラムです。吸入投与により、肺への直接的な薬剤送達を目指します。",
    contactTitle: "Contact",
    contactLead: "提携、投資、共同研究に関するお問い合わせは、以下までご連絡ください。",
    footer: "© 2026 Kyu Therapeutics Inc. All rights reserved.",
  },
};

const email = "contact@kyutx.com";

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

function SafeImage({
  src,
  alt,
  fallback,
  className,
}: {
  src: string;
  alt: string;
  fallback: React.ReactNode;
  className?: string;
}) {
  const [failed, setFailed] = useState(false);

  if (failed) return <>{fallback}</>;

  return <img src={src} alt={alt} className={className} onError={() => setFailed(true)} />;
}

function RespiratoryVisual() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[460px]">
      <div className="absolute inset-6 rounded-full bg-gradient-to-br from-sky-100 via-blue-50 to-white shadow-[0_28px_90px_rgba(47,128,237,0.18)]" />
      <div className="absolute inset-16 rounded-full border border-sky-200/80" />
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <svg viewBox="0 0 420 420" className="h-full w-full" aria-hidden="true">
          <defs>
            <linearGradient id="qGradient" x1="70" y1="70" x2="350" y2="350" gradientUnits="userSpaceOnUse">
              <stop stopColor="#56CCF2" />
              <stop offset="0.55" stopColor="#2F80ED" />
              <stop offset="1" stopColor="#0B2545" />
            </linearGradient>
            <linearGradient id="lungGradient" x1="120" y1="120" x2="300" y2="310" gradientUnits="userSpaceOnUse">
              <stop stopColor="#EAF6FF" />
              <stop offset="1" stopColor="#56CCF2" stopOpacity="0.55" />
            </linearGradient>
          </defs>
          <path
            d="M220 74c-78 0-142 60-142 136s64 136 142 136c31 0 60-9 83-25l42 43c11 11 28-6 17-17l-39-40c24-25 39-59 39-97 0-76-64-136-142-136Zm0 34c60 0 108 45 108 102s-48 102-108 102-108-45-108-102 48-102 108-102Z"
            fill="url(#qGradient)"
          />
          <path
            d="M209 142c-36 3-63 34-67 83-3 37 10 63 31 67 23 4 37-18 37-54v-96Z"
            fill="url(#lungGradient)"
          />
          <path
            d="M231 142c36 3 63 34 67 83 3 37-10 63-31 67-23 4-37-18-37-54v-96Z"
            fill="url(#lungGradient)"
          />
          <path
            d="M220 128v55m0 0c-20 9-34 24-43 45m43-45c20 9 34 24 43 45M177 228c-12 9-19 20-23 34m23-34c11 9 18 21 21 37m65-37c12 9 19 20 23 34m-23-34c-11 9-18 21-21 37"
            fill="none"
            stroke="#0B2545"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.58"
          />
          <path
            d="M82 286c49-16 96-16 142 0 42 15 82 13 119-5"
            fill="none"
            stroke="#56CCF2"
            strokeWidth="10"
            strokeLinecap="round"
            opacity="0.9"
          />
          <path
            d="M95 316c44-12 84-10 124 5 35 13 72 12 109-2"
            fill="none"
            stroke="#2F80ED"
            strokeWidth="5"
            strokeLinecap="round"
            opacity="0.6"
          />
        </svg>
      </motion.div>
      <div className="absolute right-10 top-12 rounded-full bg-white/80 px-4 py-2 text-xs font-semibold text-blue-700 shadow-sm ring-1 ring-blue-100 backdrop-blur">
        IPF / ILD
      </div>
      <div className="absolute bottom-16 left-8 rounded-full bg-white/80 px-4 py-2 text-xs font-semibold text-sky-700 shadow-sm ring-1 ring-sky-100 backdrop-blur">
        Inhaled local delivery
      </div>
    </div>
  );
}

function CeoCard({ lang, t }: { lang: Lang; t: CopySet }) {
  return (
    <div className="mt-8 rounded-3xl border border-blue-100 bg-[#F7FCFF] p-6 shadow-sm">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
        <div className="relative flex h-32 w-32 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-blue-100 bg-white shadow-sm">
          <SafeImage
            src="/ceo.jpg"
            alt={lang === "en" ? "Kazuhiro Ito" : "伊藤 一洋"}
            className="h-full w-full object-cover"
            fallback={
              <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#56CCF2] to-[#2F80ED] text-3xl font-semibold text-white">
                KI
              </div>
            }
          />
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-500">{t.representativeLabel}</p>
          <p className="mt-2 text-xl font-semibold text-[#0B2545]">{t.representativeName}</p>
          <p className="mt-2 text-sm leading-7 text-slate-600">{t.representativeRole}</p>
        </div>
      </div>
    </div>
  );
}

export default function Page() {
  const [lang, setLang] = useState<Lang>("en");
  const t = useMemo(() => copy[lang], [lang]);

  return (
    <main className="min-h-screen bg-white font-sans text-[#0B2545]">
      <header className="sticky top-0 z-50 border-b border-blue-100/70 bg-white/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <button onClick={() => scrollToId("top")} className="group flex items-center gap-3" aria-label="Kyu Therapeutics home">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-[#56CCF2] to-[#2F80ED] text-lg font-bold text-white shadow-sm transition group-hover:scale-105">
              K
            </div>
            <div className="text-left">
              <div className="text-lg font-semibold tracking-tight">Kyu Therapeutics</div>
              <div className="text-xs font-medium uppercase tracking-[0.24em] text-blue-500">KyuTx</div>
            </div>
          </button>

          <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
            <button onClick={() => scrollToId("about")} className="hover:text-blue-600">
              {t.nav.about}
            </button>
            <button onClick={() => scrollToId("pipeline")} className="hover:text-blue-600">
              {t.nav.pipeline}
            </button>
            <button onClick={() => scrollToId("contact")} className="hover:text-blue-600">
              {t.nav.contact}
            </button>
          </nav>

          <button
            onClick={() => setLang(lang === "en" ? "jp" : "en")}
            className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700 transition hover:bg-blue-100"
            aria-label="Toggle language"
          >
            <Globe2 className="h-4 w-4" />
            {t.nav.lang}
          </button>
        </div>
      </header>

      <section id="top" className="relative overflow-hidden bg-gradient-to-b from-white via-[#F7FCFF] to-white">        <div className="absolute left-[-120px] top-[-120px] h-80 w-80 rounded-full bg-sky-200/40 blur-3xl" />
        <div className="absolute right-[-100px] top-24 h-96 w-96 rounded-full bg-blue-200/40 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-6 py-20 lg:grid-cols-2 lg:px-8 lg:py-28">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-sm font-semibold text-blue-700 shadow-sm">
              <Activity className="h-4 w-4" />
              {t.heroKicker}
            </div>
            <h1 className="max-w-3xl text-5xl font-semibold leading-[1.05] tracking-tight text-[#0B2545] md:text-6xl">
              {t.heroTitle}
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600 md:text-xl">{t.heroBody}</p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href={`mailto:${email}`}
                className="inline-flex items-center gap-2 rounded-full bg-[#2F80ED] px-6 py-3 text-base font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:-translate-y-0.5 hover:bg-blue-700"
              >
                {t.heroCta}
                <ArrowRight className="h-4 w-4" />
              </a>
              <button onClick={() => scrollToId("pipeline")} className="rounded-full px-6 py-3 text-base font-semibold text-blue-700 hover:bg-blue-50">
                {t.nav.pipeline}
              </button>
            </div>
          </motion.div>
          <RespiratoryVisual />
        </div>
      </section>

      <section id="about" className="scroll-mt-24 px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-500">About</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[#0B2545] md:text-5xl">{t.aboutTitle}</h2>
              <CeoCard lang={lang} t={t} />
            </div>
            <div className="space-y-5 text-lg leading-8 text-slate-600">
              <p>{t.aboutBody1}</p>
              <p>{t.aboutBody2}</p>
              <p>{t.aboutBody3}</p>
            </div>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {t.cards.map((card) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.title}
                  className="rounded-3xl border border-blue-100 bg-white p-7 shadow-sm shadow-blue-900/5 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-900/10"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#0B2545]">{card.title}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{card.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="pipeline" className="scroll-mt-24 bg-[#F7FCFF] px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-500">Pipeline</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[#0B2545] md:text-5xl">{t.pipelineTitle}</h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">{t.pipelineLead}</p>
          </div>

          <div className="mt-10 overflow-hidden rounded-3xl border border-blue-100 bg-white shadow-sm shadow-blue-900/5">
            <div className="hidden grid-cols-4 bg-[#0B2545] px-6 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-white md:grid">
              <div>{t.table.program}</div>
              <div>{t.table.modality}</div>
              <div>{t.table.disease}</div>
              <div>{t.table.stage}</div>
            </div>
            <div className="grid gap-6 px-6 py-7 md:grid-cols-4 md:items-center">
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400 md:hidden">{t.table.program}</div>
                <div className="mt-1 text-lg font-semibold text-[#0B2545]">{t.table.rowProgram}</div>
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400 md:hidden">{t.table.modality}</div>
                <div className="mt-1 text-slate-700">{t.table.rowModality}</div>
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400 md:hidden">{t.table.disease}</div>
                <div className="mt-1 text-slate-700">{t.table.rowDisease}</div>
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400 md:hidden">{t.table.stage}</div>
                <span className="mt-1 inline-flex rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700 ring-1 ring-blue-100">
                  {t.table.rowStage}
                </span>
              </div>
            </div>
          </div>

          <p className="mt-6 max-w-4xl text-base leading-8 text-slate-600">{t.pipelineNote}</p>
        </div>
      </section>

      <section id="contact" className="scroll-mt-24 px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-5xl rounded-[2rem] bg-gradient-to-br from-[#0B2545] via-[#123B6D] to-[#2F80ED] p-8 text-white shadow-2xl shadow-blue-900/20 md:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-200">Contact</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">{t.contactTitle}</h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-blue-50">{t.contactLead}</p>
          <a
            href={`mailto:${email}`}
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 text-base font-semibold text-blue-700 transition hover:-translate-y-0.5 hover:bg-blue-50"
          >
            <Mail className="h-5 w-5" />
            {email}
          </a>
        </div>
      </section>

      <footer className="border-t border-blue-100 px-6 py-8 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <div className="font-semibold text-[#0B2545]">Kyu Therapeutics</div>
          <div>{t.footer}</div>
        </div>
      </footer>
    </main>
  );
}

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TargetAudience from './components/TargetAudience';
import Services from './components/Services';
import LeadFunnelVisualizer from './components/LeadFunnelVisualizer';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col antialiased">
      {/* Top sticky header & disclaimer bar */}
      <Header />

      <main className="flex-grow">
        {/* Hero Section with key cognitive hook */}
        <Hero />

        {/* Section detailing exactly who we work with (Builders, Developers, etc) */}
        <TargetAudience />

        {/* Our Services (What we do, Reach, Multi-device optimization) */}
        <Services />

        {/* Step-by-step Lead Verification & Delivery Funnel */}
        <LeadFunnelVisualizer />

        {/* B2B Strategic Request form */}
        <ContactForm />
      </main>

      {/* Global footer & explicit disclaimers */}
      <Footer />
    </div>
  );
}


/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TargetAudience from './components/TargetAudience';
import PropertyCampaigns from './components/PropertyCampaigns';
import Capabilities from './components/Capabilities';
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

        {/* Successful Property Campaigns Showcase */}
        <PropertyCampaigns />

        {/* The Digital Marketing Capabilities (Meta, Google, Landers, etc) */}
        <Capabilities />

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


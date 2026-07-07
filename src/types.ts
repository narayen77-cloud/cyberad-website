export interface ServiceCapability {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  icon: string; // Lucide icon name
  metrics: string;
}

export interface TargetAudience {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  badge: string;
  icon: string;
  painPoints: string[];
  solutions: string[];
}

export interface ROICalculatorInput {
  projectType: string;
  averageTicketSize: number;
  monthlyBudget: number;
  conversionRate: number; // landing page conversion (usually 1.5% - 5%)
  leadToSaleRate: number; // leads that convert to sales (usually 1% - 3%)
}

export interface LeadFunnelStep {
  id: number;
  phase: string;
  title: string;
  description: string;
  badge: string;
}

export interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  phone: string;
  companyName: string;
  role: string;
  ticketSize: string;
  monthlyBudget: string;
  message: string;
  timestamp: string;
}

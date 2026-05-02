import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowRight, CheckCircle, Shield, Zap, FileText, Lock, BarChart3 } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
      {/* Navigation */}
      <nav className="border-b border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-sm">
              CA
            </div>
            <span className="font-bold text-lg text-foreground">CourtAction AI</span>
          </div>
          <Link href="/dashboard">
            <Button className="gap-2">
              Get Started
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h1 className="text-5xl sm:text-6xl font-bold text-foreground mb-6 text-balance">
          Intelligent Judicial Decision Support
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto text-balance">
          Extract, verify, and govern legal directives with AI precision. Meet deadlines, track risk, and ensure compliance—all in one governance-grade platform.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link href="/dashboard">
            <Button size="lg" className="gap-2">
              Start Now
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
          <Button size="lg" variant="outline">
            Learn More
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Why CourtAction AI</h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          {/* Feature 1 */}
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <Zap className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Operational Deadline Engine</h3>
            <p className="text-slate-600 dark:text-slate-400">
              Real-time countdown for compliance deadlines, appeal limitations, and escalation risk. Never miss critical action dates.
            </p>
          </Card>

          {/* Feature 2 */}
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <FileText className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Governance-Grade Explainability</h3>
            <p className="text-slate-600 dark:text-slate-400">
              Every extraction traced to source with page and paragraph references. Full auditability for regulatory compliance.
            </p>
          </Card>

          {/* Feature 3 */}
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <Shield className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Extended Directive Types</h3>
            <p className="text-slate-600 dark:text-slate-400">
              9 directive classifications including Reinstatement, Compensation, and Policy Amendment for operational precision.
            </p>
          </Card>

          {/* Feature 4 */}
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <BarChart3 className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Department Risk Exposure</h3>
            <p className="text-slate-600 dark:text-slate-400">
              Executive dashboards showing overdue directives by department. Drive accountability across your organization.
            </p>
          </Card>

          {/* Feature 5 */}
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <CheckCircle className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">AI-Powered Extraction</h3>
            <p className="text-slate-600 dark:text-slate-400">
              Intelligent document analysis with confidence scoring and legal risk assessment. Reduce manual review time.
            </p>
          </Card>

          {/* Feature 6 */}
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <Lock className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Human Verification Layer</h3>
            <p className="text-slate-600 dark:text-slate-400">
              Full audit trail with reviewer notes. AI assists, humans decide. Complete governance transparency.
            </p>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <Card className="p-12 bg-primary/5 border-primary/20">
          <h2 className="text-3xl font-bold text-foreground mb-4">Ready to Transform Your Judicial Process?</h2>
          <p className="text-slate-600 dark:text-slate-400 mb-8">
            Start with CourtAction AI today and get institutional-grade decision support.
          </p>
          <Link href="/dashboard">
            <Button size="lg" className="gap-2">
              Access Platform
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </Card>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm text-slate-600 dark:text-slate-400">
          <p>CourtAction AI - Enterprise Judicial Decision Support Platform</p>
        </div>
      </footer>
    </div>
  );
}

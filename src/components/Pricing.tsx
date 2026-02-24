import { motion } from 'framer-motion'
import { Check, Sparkles, Shield, Clock } from 'lucide-react'

const features = [
    'Unlimited transactions',
    'AI Financial Assistant',
    'Unlimited saving goals',
    'Advanced analytics & reports',
    'Custom categories & budgets',
    'Export to PDF/CSV',
    'Priority support',
]

const fadeUp = {
    hidden: { opacity: 0, transform: 'translateY(30px)' },
    visible: { opacity: 1, transform: 'translateY(0px)' },
}

export function Pricing() {
    return (
        <section id="pricing" className="py-24 md:py-32">
            <div className="max-w-4xl mx-auto px-6">
                {/* Section header */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={fadeUp}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12 md:mb-16"
                >
                    <span className="text-sm font-bold text-primary-400 uppercase tracking-[0.2em] mb-4 block">Pricing</span>
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight text-white mb-6">
                        Try everything, <span className="gradient-text">free for 7 days</span>
                    </h2>
                    <p className="text-base md:text-lg text-slate-400 max-w-xl mx-auto font-medium">
                        No credit card required. Full access to every feature. Cancel anytime.
                    </p>
                </motion.div>

                {/* Single pricing card */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={fadeUp}
                    transition={{ delay: 0.15, duration: 0.5 }}
                    className="relative rounded-2xl md:rounded-3xl p-8 md:p-10 bg-linear-to-br from-primary-600/20 via-accent-500/10 to-primary-600/10 border-2 border-primary-500/30 glow-indigo max-w-xl mx-auto"
                >
                    {/* Badge */}
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-linear-to-r from-primary-500 to-accent-500 text-[10px] font-bold text-white uppercase tracking-wider shadow-lg shadow-primary-500/30">
                        7-Day Free Trial
                    </div>

                    {/* Plan header */}
                    <div className="flex items-center gap-3 mb-6">
                        <div className="h-12 w-12 rounded-2xl bg-primary-500/20 flex items-center justify-center">
                            <Sparkles className="h-6 w-6 text-primary-400" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-white">Pro</h3>
                            <p className="text-xs text-slate-500 font-medium">Full access to everything</p>
                        </div>
                    </div>

                    {/* Price */}
                    <div className="mb-2">
                        <span className="text-5xl md:text-6xl font-black text-white">$7</span>
                        <span className="text-slate-500 font-semibold ml-1">/month</span>
                    </div>
                    <p className="text-sm text-primary-400 font-semibold mb-8">
                        after 7-day free trial
                    </p>

                    {/* Features */}
                    <ul className="space-y-3 mb-10">
                        {features.map((feature) => (
                            <li key={feature} className="flex items-center gap-3 text-sm">
                                <Check className="h-4 w-4 shrink-0 text-primary-400" />
                                <span className="text-slate-300 font-medium">{feature}</span>
                            </li>
                        ))}
                    </ul>

                    {/* CTA */}
                    <a
                        href="https://finance-flow-phi-ruby.vercel.app/register"
                        className="block text-center w-full py-4 rounded-2xl font-bold text-lg bg-linear-to-r from-primary-600 to-accent-600 text-white shadow-2xl shadow-primary-600/30 hover:shadow-primary-500/50 hover:scale-105 active:scale-95 transition-all duration-200"
                    >
                        Start Free Trial →
                    </a>
                </motion.div>

                {/* Trust signals */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={fadeUp}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="mt-10 md:mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-10 text-xs md:text-sm text-slate-500 font-medium"
                >
                    <span className="flex items-center gap-2">
                        <Shield className="h-4 w-4 text-slate-600" />
                        No credit card required
                    </span>
                    <span className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-slate-600" />
                        Cancel anytime before trial ends
                    </span>
                    <span>💳 Secure payment with PayPal</span>
                </motion.div>
            </div>
        </section>
    )
}

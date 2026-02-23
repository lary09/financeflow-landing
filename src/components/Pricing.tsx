import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Check, Sparkles, Zap } from 'lucide-react'

const plans = [
    {
        name: 'Free',
        price: '$0',
        period: 'forever',
        description: 'Perfect for getting started',
        features: [
            'Up to 50 transactions/month',
            'Basic spending charts',
            '3 saving goals',
            'Monthly budget tracking',
        ],
        cta: 'Start Free',
        href: 'https://finance-flow-six.vercel.app/register',
        highlighted: false,
        icon: Zap,
    },
    {
        name: 'Pro',
        price: '$9',
        period: '/month',
        description: 'For those serious about their finances',
        features: [
            'Unlimited transactions',
            'AI Financial Assistant',
            'Unlimited goals',
            'Advanced analytics & reports',
            'Export to PDF/CSV',
            'Priority support',
        ],
        cta: 'Get Pro',
        href: '#',
        highlighted: true,
        icon: Sparkles,
    },
]

export function Pricing() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })

    return (
        <section id="pricing" ref={ref} className="py-32 relative">
            <div className="max-w-5xl mx-auto px-6">
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <span className="text-sm font-bold text-primary-400 uppercase tracking-[0.2em] mb-4 block">Pricing</span>
                    <h2 className="text-4xl md:text-6xl font-black tracking-tight text-white mb-6">
                        Simple, <span className="gradient-text">transparent</span> pricing
                    </h2>
                    <p className="text-lg text-slate-400 max-w-xl mx-auto font-medium">
                        Start free, upgrade when you're ready. No hidden fees. Cancel anytime.
                    </p>
                </motion.div>

                {/* Pricing cards */}
                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {plans.map((plan, i) => (
                        <motion.div
                            key={plan.name}
                            initial={{ opacity: 0, y: 40 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.2 + i * 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
                            className={`group relative rounded-3xl p-8 md:p-10 transition-all duration-500 hover:scale-[1.02] ${plan.highlighted
                                    ? 'bg-linear-to-br from-primary-600/20 via-accent-500/10 to-primary-600/10 border-2 border-primary-500/30 glow-indigo'
                                    : 'glass hover:bg-white/[0.06]'
                                }`}
                        >
                            {plan.highlighted && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-linear-to-r from-primary-500 to-accent-500 text-xs font-bold text-white uppercase tracking-wider shadow-lg shadow-primary-500/30">
                                    Most Popular
                                </div>
                            )}

                            <div className="flex items-center gap-3 mb-6">
                                <div className={`h-12 w-12 rounded-2xl flex items-center justify-center ${plan.highlighted
                                        ? 'bg-primary-500/20'
                                        : 'bg-white/5'
                                    }`}>
                                    <plan.icon className={`h-6 w-6 ${plan.highlighted ? 'text-primary-400' : 'text-slate-400'}`} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                                    <p className="text-xs text-slate-500 font-medium">{plan.description}</p>
                                </div>
                            </div>

                            <div className="mb-8">
                                <span className="text-5xl font-black text-white">{plan.price}</span>
                                <span className="text-slate-500 font-semibold ml-1">{plan.period}</span>
                            </div>

                            <ul className="space-y-3 mb-10">
                                {plan.features.map((feature) => (
                                    <li key={feature} className="flex items-center gap-3 text-sm">
                                        <Check className={`h-4 w-4 shrink-0 ${plan.highlighted ? 'text-primary-400' : 'text-slate-600'}`} />
                                        <span className="text-slate-300 font-medium">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <a
                                href={plan.href}
                                className={`block text-center w-full py-4 rounded-2xl font-bold text-lg transition-all active:scale-95 ${plan.highlighted
                                        ? 'bg-linear-to-r from-primary-600 to-accent-600 text-white shadow-2xl shadow-primary-600/30 hover:shadow-primary-500/50 hover:scale-105'
                                        : 'border border-white/10 text-white hover:bg-white/5 hover:border-white/20'
                                    }`}
                            >
                                {plan.cta}
                            </a>
                        </motion.div>
                    ))}
                </div>

                {/* Guarantee */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.8, duration: 0.6 }}
                    className="text-center text-sm text-slate-500 font-medium mt-10"
                >
                    💳 Secure payment with PayPal · 14-day money-back guarantee · Cancel anytime
                </motion.p>
            </div>
        </section>
    )
}

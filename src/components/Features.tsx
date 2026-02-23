import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { BarChart3, Target, Wallet, Brain, PieChart, Shield } from 'lucide-react'

const features = [
    { icon: Wallet, title: 'Smart Tracking', description: 'Automatically categorize and track every transaction with intelligent insights.' },
    { icon: Target, title: 'Goal Setting', description: 'Set saving goals with deadlines and watch your progress with beautiful charts.' },
    { icon: BarChart3, title: 'Budget Control', description: 'Create monthly budgets by category and get alerts before you overspend.' },
    { icon: Brain, title: 'AI Assistant', description: 'Ask questions about your finances and get personalized advice powered by AI.' },
    { icon: PieChart, title: 'Visual Reports', description: 'Understand your money flow with interactive charts and detailed breakdowns.' },
    { icon: Shield, title: 'Bank Security', description: 'Your data is encrypted end-to-end. We never store your banking credentials.' },
]

export function Features() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })

    return (
        <section id="features" ref={ref} className="py-32 relative">
            <div className="max-w-7xl mx-auto px-6">
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <span className="text-sm font-bold text-primary-400 uppercase tracking-[0.2em] mb-4 block">Features</span>
                    <h2 className="text-4xl md:text-6xl font-black tracking-tight text-white mb-6">
                        Everything you need to<br />
                        <span className="gradient-text">master your finances</span>
                    </h2>
                    <p className="text-lg text-slate-400 max-w-xl mx-auto font-medium">
                        Built for people who want clarity, not complexity. Every feature is designed to save you time.
                    </p>
                </motion.div>

                {/* Feature cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, i) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 40 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.1 * i, duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
                            className="group relative p-8 rounded-3xl glass hover:bg-white/[0.06] transition-all duration-500 cursor-default"
                        >
                            {/* Glow on hover */}
                            <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-linear-to-br from-primary-500/5 to-accent-500/5" />

                            <div className="relative z-10">
                                <div className="h-14 w-14 rounded-2xl bg-linear-to-br from-primary-500/20 to-accent-500/20 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary-500/10 transition-all duration-500">
                                    <feature.icon className="h-7 w-7 text-primary-400" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                                <p className="text-sm text-slate-400 leading-relaxed font-medium">{feature.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

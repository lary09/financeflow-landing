import { motion } from 'framer-motion'
import { BarChart3, Target, Wallet, Brain, PieChart, Shield } from 'lucide-react'

const features = [
    { icon: Wallet, title: 'Smart Tracking', description: 'Automatically categorize and track every transaction with intelligent insights.' },
    { icon: Target, title: 'Goal Setting', description: 'Set saving goals with deadlines and watch your progress with beautiful charts.' },
    { icon: BarChart3, title: 'Budget Control', description: 'Create monthly budgets by category and get alerts before you overspend.' },
    { icon: Brain, title: 'AI Assistant', description: 'Ask questions about your finances and get personalized advice powered by AI.' },
    { icon: PieChart, title: 'Visual Reports', description: 'Understand your money flow with interactive charts and detailed breakdowns.' },
    { icon: Shield, title: 'Bank Security', description: 'Your data is encrypted end-to-end. We never store your banking credentials.' },
]

const fadeUp = {
    hidden: { opacity: 0, transform: 'translateY(30px)' },
    visible: { opacity: 1, transform: 'translateY(0px)' },
}

export function Features() {
    return (
        <section id="features" className="py-24 md:py-32">
            <div className="max-w-7xl mx-auto px-6">
                {/* Section header */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={fadeUp}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16 md:mb-20"
                >
                    <span className="text-sm font-bold text-primary-400 uppercase tracking-[0.2em] mb-4 block">Features</span>
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight text-white mb-6">
                        Everything you need to<br />
                        <span className="gradient-text">master your finances</span>
                    </h2>
                    <p className="text-base md:text-lg text-slate-400 max-w-xl mx-auto font-medium">
                        Built for people who want clarity, not complexity.
                    </p>
                </motion.div>

                {/* Feature cards grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
                    {features.map((feature, i) => (
                        <motion.div
                            key={feature.title}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={fadeUp}
                            transition={{ delay: 0.06 * i, duration: 0.5 }}
                            className="group relative p-6 md:p-8 rounded-2xl md:rounded-3xl glass hover:bg-white/[0.06] transition-all duration-300"
                        >
                            <div className="h-12 w-12 md:h-14 md:w-14 rounded-xl md:rounded-2xl bg-linear-to-br from-primary-500/20 to-accent-500/20 flex items-center justify-center mb-5 md:mb-6 group-hover:scale-110 transition-transform duration-300">
                                <feature.icon className="h-6 w-6 md:h-7 md:w-7 text-primary-400" />
                            </div>
                            <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3">{feature.title}</h3>
                            <p className="text-sm text-slate-400 leading-relaxed font-medium">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

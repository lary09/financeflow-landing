import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'

const fadeUp = {
    hidden: { opacity: 0, transform: 'translateY(30px)' },
    visible: { opacity: 1, transform: 'translateY(0px)' },
}

export function Hero() {
    return (
        <section className="min-h-screen flex items-center justify-center pt-20 pb-20">
            <div className="max-w-7xl mx-auto px-6 text-center">
                {/* Badge */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
                >
                    <Sparkles className="h-4 w-4 text-primary-400" />
                    <span className="text-sm font-semibold text-primary-300">AI-Powered Finance Tracker</span>
                </motion.div>

                {/* Main heading */}
                <motion.h1
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    transition={{ delay: 0.15, duration: 0.6 }}
                    className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.95] mb-8"
                >
                    <span className="text-white">Master Your </span>
                    <span className="gradient-text">Money.</span>
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed font-medium"
                >
                    Track expenses, set saving goals, analyze your spending with AI,
                    and take full control of your financial future.{' '}
                    <span className="text-white font-semibold">All in one beautiful app.</span>
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
                >
                    <a
                        href="https://finance-flow-phi-ruby.vercel.app/register"
                        className="group flex items-center gap-2 px-8 py-4 rounded-2xl bg-linear-to-r from-primary-600 to-accent-600 text-white font-bold text-lg shadow-2xl shadow-primary-600/30 hover:shadow-primary-500/50 hover:scale-105 active:scale-95 transition-all duration-200"
                    >
                        Start Free
                        <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                    <a
                        href="#preview"
                        className="flex items-center gap-2 px-8 py-4 rounded-2xl text-slate-300 font-semibold text-lg border border-white/10 hover:bg-white/5 hover:border-white/20 transition-all duration-200"
                    >
                        See it in action
                    </a>
                </motion.div>

                {/* Stats bar */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="grid grid-cols-3 gap-8 max-w-md mx-auto"
                >
                    {[
                        { value: '10K+', label: 'Active Users' },
                        { value: '99.9%', label: 'Uptime' },
                        { value: '4.9★', label: 'App Rating' },
                    ].map(({ value, label }) => (
                        <div key={label} className="text-center">
                            <div className="text-2xl md:text-3xl font-black text-white">{value}</div>
                            <div className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider mt-1">{label}</div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

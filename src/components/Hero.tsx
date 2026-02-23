import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'

export function Hero() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    const wordVariants = {
        hidden: { opacity: 0, y: 40, filter: 'blur(10px)' },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            transition: { delay: 0.3 + i * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
        }),
    }

    const words = ['Master', 'Your', 'Money.']

    return (
        <section ref={ref} className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
            {/* Hero content */}
            <div className="max-w-7xl mx-auto px-6 py-20 text-center relative z-10">
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
                >
                    <Sparkles className="h-4 w-4 text-primary-400" />
                    <span className="text-sm font-semibold text-primary-300">AI-Powered Finance Tracker</span>
                </motion.div>

                {/* Main heading with word-by-word animation */}
                <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.9] mb-8">
                    {words.map((word, i) => (
                        <motion.span
                            key={i}
                            custom={i}
                            variants={wordVariants}
                            initial="hidden"
                            animate={isInView ? 'visible' : 'hidden'}
                            className={`inline-block mr-4 md:mr-6 ${i === 2 ? 'gradient-text' : 'text-white'
                                }`}
                        >
                            {word}
                        </motion.span>
                    ))}
                </h1>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed font-medium"
                >
                    Track expenses, set saving goals, analyze your spending with AI,
                    and take full control of your financial future. <span className="text-white font-semibold">All in one beautiful app.</span>
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 1, duration: 0.8 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <a
                        href="https://finance-flow-six.vercel.app/register"
                        className="group flex items-center gap-2 px-8 py-4 rounded-2xl bg-linear-to-r from-primary-600 to-accent-600 text-white font-bold text-lg shadow-2xl shadow-primary-600/30 hover:shadow-primary-500/50 hover:scale-105 active:scale-95 transition-all"
                    >
                        Start Free
                        <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                    <a
                        href="#preview"
                        className="flex items-center gap-2 px-8 py-4 rounded-2xl text-slate-300 font-semibold text-lg border border-white/10 hover:bg-white/5 hover:border-white/20 transition-all"
                    >
                        See it in action
                    </a>
                </motion.div>

                {/* Stats bar */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 1.3, duration: 0.8 }}
                    className="mt-20 grid grid-cols-3 gap-8 max-w-lg mx-auto"
                >
                    {[
                        { value: '10K+', label: 'Active Users' },
                        { value: '99.9%', label: 'Uptime' },
                        { value: '4.9★', label: 'App Rating' },
                    ].map(({ value, label }) => (
                        <div key={label} className="text-center">
                            <div className="text-2xl md:text-3xl font-black text-white">{value}</div>
                            <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider mt-1">{label}</div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

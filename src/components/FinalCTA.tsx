import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export function FinalCTA() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })

    return (
        <section ref={ref} className="py-32 relative">
            <div className="max-w-5xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="relative rounded-[2.5rem] p-12 md:p-20 text-center overflow-hidden"
                >
                    {/* Background gradient */}
                    <div className="absolute inset-0 bg-linear-to-br from-primary-600/20 via-accent-500/10 to-primary-700/20 animated-gradient" />
                    <div className="absolute inset-0 border border-white/10 rounded-[2.5rem]" />

                    {/* Floating orbs inside */}
                    <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-primary-500/10 blur-2xl float" />
                    <div className="absolute bottom-10 right-10 w-24 h-24 rounded-full bg-accent-500/10 blur-2xl float-delay" />

                    <div className="relative z-10">
                        <h2 className="text-4xl md:text-6xl font-black tracking-tight text-white mb-6 leading-tight">
                            Ready to take control<br />
                            of your <span className="gradient-text">finances</span>?
                        </h2>
                        <p className="text-lg text-slate-400 max-w-lg mx-auto mb-10 font-medium">
                            Join thousands of people who already track, save, and grow their money with FinanceFlow.
                        </p>
                        <a
                            href="https://finance-flow-six.vercel.app/register"
                            className="group inline-flex items-center gap-3 px-10 py-5 rounded-2xl bg-white text-surface font-bold text-lg shadow-2xl hover:shadow-white/20 hover:scale-105 active:scale-95 transition-all"
                        >
                            Get Started — It's Free
                            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

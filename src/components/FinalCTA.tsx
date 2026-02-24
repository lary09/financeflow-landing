import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const fadeUp = {
    hidden: { opacity: 0, transform: 'translateY(30px)' },
    visible: { opacity: 1, transform: 'translateY(0px)' },
}

export function FinalCTA() {
    return (
        <section className="py-16 md:py-24">
            <div className="max-w-5xl mx-auto px-6">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={fadeUp}
                    transition={{ duration: 0.6 }}
                    className="relative rounded-2xl md:rounded-[2.5rem] p-10 md:p-16 lg:p-20 text-center overflow-hidden"
                >
                    {/* Background */}
                    <div className="absolute inset-0 bg-linear-to-br from-primary-600/20 via-accent-500/10 to-primary-700/20 animated-gradient" />
                    <div className="absolute inset-0 border border-white/10 rounded-2xl md:rounded-[2.5rem]" />

                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight text-white mb-4 md:mb-6 leading-tight">
                            Ready to take control<br />
                            of your <span className="gradient-text">finances</span>?
                        </h2>
                        <p className="text-base md:text-lg text-slate-400 max-w-lg mx-auto mb-8 md:mb-10 font-medium">
                            Join thousands of people who already track, save, and grow their money with FinanceFlow.
                        </p>
                        <a
                            href="https://finance-flow-phi-ruby.vercel.app/register"
                            className="group inline-flex items-center gap-3 px-8 md:px-10 py-4 md:py-5 rounded-xl md:rounded-2xl bg-white text-surface font-bold text-base md:text-lg shadow-2xl hover:shadow-white/20 hover:scale-105 active:scale-95 transition-all duration-200"
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

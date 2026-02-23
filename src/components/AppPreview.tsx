import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { TrendingUp, TrendingDown, ArrowUpRight } from 'lucide-react'

const mockTransactions = [
    { name: 'Netflix', amount: -15.99, category: 'Entertainment', icon: '🎬' },
    { name: 'Salary Deposit', amount: 4500.00, category: 'Income', icon: '💰' },
    { name: 'Grocery Store', amount: -89.43, category: 'Food', icon: '🛒' },
    { name: 'Freelance Project', amount: 850.00, category: 'Income', icon: '💻' },
    { name: 'Electric Bill', amount: -124.00, category: 'Utilities', icon: '⚡' },
]

function AnimatedCounter({ target, prefix = '', suffix = '' }: { target: number; prefix?: string; suffix?: string }) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    return (
        <motion.span
            ref={ref}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
        >
            {isInView ? (
                <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    {prefix}{target.toLocaleString()}{suffix}
                </motion.span>
            ) : `${prefix}0${suffix}`}
        </motion.span>
    )
}

export function AppPreview() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })

    return (
        <section id="preview" ref={ref} className="py-32 relative">
            <div className="max-w-7xl mx-auto px-6">
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <span className="text-sm font-bold text-primary-400 uppercase tracking-[0.2em] mb-4 block">Live Preview</span>
                    <h2 className="text-4xl md:text-6xl font-black tracking-tight text-white mb-6">
                        See it in <span className="gradient-text">action</span>
                    </h2>
                    <p className="text-lg text-slate-400 max-w-xl mx-auto font-medium">
                        A beautiful dashboard that makes managing money feel effortless.
                    </p>
                </motion.div>

                {/* Mock Dashboard */}
                <motion.div
                    initial={{ opacity: 0, y: 50, scale: 0.95 }}
                    animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                    transition={{ delay: 0.3, duration: 1, ease: [0.22, 1, 0.36, 1] as const }}
                    className="relative"
                >
                    <div className="rounded-3xl border border-white/10 bg-surface-light/80 backdrop-blur-xl p-6 md:p-10 shadow-2xl shadow-black/40 glow-indigo">
                        {/* Top stats row */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                            {[
                                { label: 'Total Balance', value: 12847, prefix: '$', color: 'text-white', icon: null, change: '+12.5%' },
                                { label: 'Income', value: 5350, prefix: '$', color: 'text-emerald-400', icon: TrendingUp, change: '+8.2%' },
                                { label: 'Expenses', value: 2229, prefix: '$', color: 'text-rose-400', icon: TrendingDown, change: '-3.1%' },
                                { label: 'Savings Rate', value: 58, prefix: '', suffix: '%', color: 'text-primary-400', icon: ArrowUpRight, change: '+5.4%' },
                            ].map((stat) => (
                                <motion.div
                                    key={stat.label}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ delay: 0.6, duration: 0.6 }}
                                    className="p-5 rounded-2xl bg-white/[0.03] border border-white/5"
                                >
                                    <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider mb-2">{stat.label}</p>
                                    <div className="flex items-end justify-between">
                                        <p className={`text-2xl md:text-3xl font-black ${stat.color}`}>
                                            <AnimatedCounter target={stat.value} prefix={stat.prefix} suffix={stat.suffix || ''} />
                                        </p>
                                        {stat.icon && (
                                            <span className={`text-xs font-bold ${stat.color} flex items-center gap-0.5`}>
                                                <stat.icon className="h-3 w-3" />
                                                {stat.change}
                                            </span>
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Chart placeholder + Transactions */}
                        <div className="grid md:grid-cols-5 gap-6">
                            {/* Chart area */}
                            <div className="md:col-span-3 p-6 rounded-2xl bg-white/[0.02] border border-white/5">
                                <div className="flex items-center justify-between mb-6">
                                    <h3 className="text-sm font-bold text-white uppercase tracking-wider">Spending Trend</h3>
                                    <span className="text-xs text-slate-500 font-semibold">Last 7 days</span>
                                </div>
                                {/* Animated bars */}
                                <div className="flex items-end justify-between h-40 gap-2">
                                    {[65, 45, 80, 55, 90, 40, 70].map((h, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ height: 0 }}
                                            animate={isInView ? { height: `${h}%` } : {}}
                                            transition={{ delay: 0.8 + i * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }}
                                            className="flex-1 rounded-xl bg-linear-to-t from-primary-600/40 to-primary-400/60 relative group cursor-pointer hover:from-primary-500/50 hover:to-primary-300/70 transition-colors"
                                        >
                                            <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-bold text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity">
                                                ${Math.round(h * 30)}
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                                <div className="flex justify-between mt-3">
                                    {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(d => (
                                        <span key={d} className="text-[10px] font-semibold text-slate-600 flex-1 text-center">{d}</span>
                                    ))}
                                </div>
                            </div>

                            {/* Recent transactions */}
                            <div className="md:col-span-2 p-6 rounded-2xl bg-white/[0.02] border border-white/5">
                                <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Recent</h3>
                                <div className="space-y-3">
                                    {mockTransactions.map((tx, i) => (
                                        <motion.div
                                            key={tx.name}
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                                            transition={{ delay: 1.2 + i * 0.1, duration: 0.5 }}
                                            className="flex items-center justify-between py-2"
                                        >
                                            <div className="flex items-center gap-3">
                                                <span className="text-lg">{tx.icon}</span>
                                                <div>
                                                    <p className="text-sm font-semibold text-white">{tx.name}</p>
                                                    <p className="text-[10px] text-slate-500 font-medium">{tx.category}</p>
                                                </div>
                                            </div>
                                            <span className={`text-sm font-bold ${tx.amount > 0 ? 'text-emerald-400' : 'text-slate-300'}`}>
                                                {tx.amount > 0 ? '+' : ''}{tx.amount.toFixed(2)}
                                            </span>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Decorative glow behind */}
                    <div className="absolute inset-0 -z-10 blur-3xl">
                        <div className="absolute inset-0 bg-linear-to-r from-primary-600/10 via-accent-500/10 to-primary-600/10 rounded-3xl scale-105" />
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

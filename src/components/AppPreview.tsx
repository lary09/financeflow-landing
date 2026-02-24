import { motion } from 'framer-motion'
import { TrendingUp, TrendingDown, ArrowUpRight } from 'lucide-react'

const mockTransactions = [
    { name: 'Netflix', amount: -15.99, category: 'Entertainment', icon: '🎬' },
    { name: 'Salary Deposit', amount: 4500.00, category: 'Income', icon: '💰' },
    { name: 'Grocery Store', amount: -89.43, category: 'Food', icon: '🛒' },
    { name: 'Freelance Project', amount: 850.00, category: 'Income', icon: '💻' },
    { name: 'Electric Bill', amount: -124.00, category: 'Utilities', icon: '⚡' },
]

const fadeUp = {
    hidden: { opacity: 0, transform: 'translateY(30px)' },
    visible: { opacity: 1, transform: 'translateY(0px)' },
}

const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
}

export function AppPreview() {
    return (
        <section id="preview" className="py-24 md:py-32">
            <div className="max-w-6xl mx-auto px-6">
                {/* Section header */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={fadeUp}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12 md:mb-16"
                >
                    <span className="text-sm font-bold text-primary-400 uppercase tracking-[0.2em] mb-4 block">Live Preview</span>
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight text-white mb-6">
                        See it in <span className="gradient-text">action</span>
                    </h2>
                    <p className="text-base md:text-lg text-slate-400 max-w-xl mx-auto font-medium">
                        A beautiful dashboard that makes managing money feel effortless.
                    </p>
                </motion.div>

                {/* Dashboard card */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={fadeUp}
                    transition={{ delay: 0.1, duration: 0.6 }}
                    className="rounded-2xl md:rounded-3xl border border-white/10 bg-surface-light/80 backdrop-blur-xl p-4 md:p-8 shadow-2xl shadow-black/40 glow-indigo"
                >
                    {/* Top stats row */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-6 md:mb-8">
                        {[
                            { label: 'Total Balance', value: '$12,847', color: 'text-white', Icon: null, change: '+12.5%' },
                            { label: 'Income', value: '$5,350', color: 'text-emerald-400', Icon: TrendingUp, change: '+8.2%' },
                            { label: 'Expenses', value: '$2,229', color: 'text-rose-400', Icon: TrendingDown, change: '-3.1%' },
                            { label: 'Savings Rate', value: '58%', color: 'text-primary-400', Icon: ArrowUpRight, change: '+5.4%' },
                        ].map((stat) => (
                            <div
                                key={stat.label}
                                className="p-3 md:p-5 rounded-xl md:rounded-2xl bg-white/[0.03] border border-white/5"
                            >
                                <p className="text-[10px] md:text-xs text-slate-500 font-semibold uppercase tracking-wider mb-1 md:mb-2">{stat.label}</p>
                                <div className="flex items-end justify-between">
                                    <p className={`text-lg md:text-2xl font-black ${stat.color}`}>{stat.value}</p>
                                    {stat.Icon && (
                                        <span className={`text-[10px] font-bold ${stat.color} flex items-center gap-0.5`}>
                                            <stat.Icon className="h-3 w-3" />
                                            {stat.change}
                                        </span>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Chart + Transactions */}
                    <div className="grid md:grid-cols-5 gap-4 md:gap-6">
                        {/* Chart area */}
                        <div className="md:col-span-3 p-4 md:p-6 rounded-xl md:rounded-2xl bg-white/[0.02] border border-white/5">
                            <div className="flex items-center justify-between mb-4 md:mb-6">
                                <h3 className="text-xs md:text-sm font-bold text-white uppercase tracking-wider">Spending Trend</h3>
                                <span className="text-[10px] text-slate-500 font-semibold">Last 7 days</span>
                            </div>
                            <div className="flex items-end justify-between h-28 md:h-40 gap-1.5 md:gap-2">
                                {[65, 45, 80, 55, 90, 40, 70].map((h, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ scaleY: 0 }}
                                        whileInView={{ scaleY: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.3 + i * 0.05, duration: 0.5 }}
                                        style={{ height: `${h}%`, transformOrigin: 'bottom' }}
                                        className="flex-1 rounded-lg md:rounded-xl bg-linear-to-t from-primary-600/40 to-primary-400/60 cursor-pointer hover:from-primary-500/50 hover:to-primary-300/70 transition-colors"
                                    />
                                ))}
                            </div>
                            <div className="flex justify-between mt-2 md:mt-3">
                                {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(d => (
                                    <span key={d} className="text-[9px] md:text-[10px] font-semibold text-slate-600 flex-1 text-center">{d}</span>
                                ))}
                            </div>
                        </div>

                        {/* Recent transactions */}
                        <div className="md:col-span-2 p-4 md:p-6 rounded-xl md:rounded-2xl bg-white/[0.02] border border-white/5">
                            <h3 className="text-xs md:text-sm font-bold text-white uppercase tracking-wider mb-3 md:mb-4">Recent</h3>
                            <div className="space-y-2 md:space-y-3">
                                {mockTransactions.map((tx, i) => (
                                    <motion.div
                                        key={tx.name}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true }}
                                        variants={fadeIn}
                                        transition={{ delay: 0.4 + i * 0.05, duration: 0.3 }}
                                        className="flex items-center justify-between py-1.5 md:py-2"
                                    >
                                        <div className="flex items-center gap-2 md:gap-3 min-w-0">
                                            <span className="text-base md:text-lg shrink-0">{tx.icon}</span>
                                            <div className="min-w-0">
                                                <p className="text-xs md:text-sm font-semibold text-white truncate">{tx.name}</p>
                                                <p className="text-[9px] md:text-[10px] text-slate-500 font-medium">{tx.category}</p>
                                            </div>
                                        </div>
                                        <span className={`text-xs md:text-sm font-bold shrink-0 ml-2 ${tx.amount > 0 ? 'text-emerald-400' : 'text-slate-300'}`}>
                                            {tx.amount > 0 ? '+' : ''}{tx.amount.toFixed(2)}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

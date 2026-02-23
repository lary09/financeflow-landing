import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { TrendingUp, Menu, X } from 'lucide-react'

export function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [mobileOpen, setMobileOpen] = useState(false)

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 50)
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-surface/80 backdrop-blur-xl border-b border-white/5 shadow-2xl shadow-black/20' : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                {/* Logo */}
                <a href="#" className="flex items-center gap-3 group">
                    <div className="h-10 w-10 rounded-xl bg-linear-to-br from-primary-500 to-accent-500 flex items-center justify-center shadow-lg shadow-primary-500/20 group-hover:shadow-primary-500/40 transition-shadow">
                        <TrendingUp className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-xl font-bold tracking-tight">
                        <span className="gradient-text">Finance</span>
                        <span className="text-white">Flow</span>
                    </span>
                </a>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    <a href="#features" className="text-sm text-slate-400 hover:text-white transition-colors font-medium">Features</a>
                    <a href="#preview" className="text-sm text-slate-400 hover:text-white transition-colors font-medium">Preview</a>
                    <a href="#pricing" className="text-sm text-slate-400 hover:text-white transition-colors font-medium">Pricing</a>
                </div>

                {/* CTA Buttons */}
                <div className="hidden md:flex items-center gap-3">
                    <a href="https://finance-flow-six.vercel.app/login" className="text-sm font-semibold text-slate-300 hover:text-white px-4 py-2 rounded-xl transition-colors">
                        Log In
                    </a>
                    <a href="#pricing" className="text-sm font-bold text-white px-5 py-2.5 rounded-xl bg-linear-to-r from-primary-600 to-accent-600 hover:from-primary-500 hover:to-accent-500 shadow-lg shadow-primary-600/25 hover:shadow-primary-500/40 transition-all hover:scale-105 active:scale-95">
                        Get Started Free
                    </a>
                </div>

                {/* Mobile menu button */}
                <button className="md:hidden text-white" onClick={() => setMobileOpen(!mobileOpen)}>
                    {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
            </div>

            {/* Mobile menu */}
            {mobileOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="md:hidden bg-surface-light/95 backdrop-blur-xl border-t border-white/5 p-6 space-y-4"
                >
                    <a href="#features" className="block text-slate-300 hover:text-white font-medium py-2" onClick={() => setMobileOpen(false)}>Features</a>
                    <a href="#preview" className="block text-slate-300 hover:text-white font-medium py-2" onClick={() => setMobileOpen(false)}>Preview</a>
                    <a href="#pricing" className="block text-slate-300 hover:text-white font-medium py-2" onClick={() => setMobileOpen(false)}>Pricing</a>
                    <div className="pt-4 border-t border-white/5 space-y-3">
                        <a href="https://finance-flow-six.vercel.app/login" className="block text-center text-slate-300 font-semibold py-2.5 rounded-xl border border-white/10">Log In</a>
                        <a href="#pricing" className="block text-center text-white font-bold py-2.5 rounded-xl bg-linear-to-r from-primary-600 to-accent-600">Get Started Free</a>
                    </div>
                </motion.div>
            )}
        </motion.nav>
    )
}

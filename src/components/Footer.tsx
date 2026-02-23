import { TrendingUp } from 'lucide-react'

export function Footer() {
    return (
        <footer className="border-t border-white/5 py-16">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="md:col-span-2">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="h-10 w-10 rounded-xl bg-linear-to-br from-primary-500 to-accent-500 flex items-center justify-center">
                                <TrendingUp className="h-5 w-5 text-white" />
                            </div>
                            <span className="text-xl font-bold">
                                <span className="gradient-text">Finance</span>
                                <span className="text-white">Flow</span>
                            </span>
                        </div>
                        <p className="text-sm text-slate-500 font-medium max-w-sm leading-relaxed">
                            AI-powered personal finance tracker. Track expenses, set goals, and take control of your financial future.
                        </p>
                    </div>

                    {/* Product links */}
                    <div>
                        <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Product</h4>
                        <ul className="space-y-3">
                            <li><a href="#features" className="text-sm text-slate-500 hover:text-white transition-colors font-medium">Features</a></li>
                            <li><a href="#pricing" className="text-sm text-slate-500 hover:text-white transition-colors font-medium">Pricing</a></li>
                            <li><a href="#preview" className="text-sm text-slate-500 hover:text-white transition-colors font-medium">Preview</a></li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Legal</h4>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-sm text-slate-500 hover:text-white transition-colors font-medium">Privacy Policy</a></li>
                            <li><a href="#" className="text-sm text-slate-500 hover:text-white transition-colors font-medium">Terms of Service</a></li>
                            <li><a href="#" className="text-sm text-slate-500 hover:text-white transition-colors font-medium">Contact</a></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-xs text-slate-600 font-medium">
                        © {new Date().getFullYear()} FinanceFlow. All rights reserved.
                    </p>
                    <p className="text-xs text-slate-600 font-medium">
                        Made with 💜 for your financial freedom
                    </p>
                </div>
            </div>
        </footer>
    )
}

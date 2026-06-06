import { ArrowLeft } from "lucide-react";
import { useNavigate } from 'react-router-dom';

function NotFound() {
    const navigate = useNavigate();

    return (
        <div className="bg-zinc-50 dark:bg-zinc-950 min-h-screen flex items-center justify-center p-6 transition-colors duration-300">
            <div className="max-w-md w-full p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200/50 dark:border-zinc-800/50 shadow-xl text-center">
                <span className="text-6xl font-black gradient-text">404</span>
                <h1 className="text-2xl font-extrabold text-zinc-900 dark:text-zinc-50 mt-4 tracking-tight">
                    Page Not Found
                </h1>
                <p className="mt-4 text-sm text-zinc-500 dark:text-zinc-400 font-light leading-relaxed">
                    We can't seem to find the page you're looking for. The requested URL <code className="text-xs text-indigo-600 dark:text-indigo-400 font-semibold truncate block mt-1">{window.location.pathname}</code> was not found.
                </p>
                <button
                    onClick={() => navigate("/")}
                    className="mt-8 w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 shadow-md shadow-indigo-600/10 transition-colors active:scale-[0.99]"
                >
                    <ArrowLeft size={16} />
                    Back to Homepage
                </button>
            </div>
        </div>
    );
}

export default NotFound;
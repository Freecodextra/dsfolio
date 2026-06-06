import user_info from "../../data/user_info.js";
import GitHubButton from "react-github-btn";
import { ArrowUp } from "lucide-react";

function Footer({ theme }) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="p-8 text-center md:flex justify-between items-center bg-zinc-50/50 dark:bg-zinc-950/20 text-zinc-600 dark:text-zinc-400">
      {/* GitHub Button */}
      <div className="self-center flex justify-center md:justify-start">
        <GitHubButton
          href="https://github.com/Freecodextra"
          data-color-scheme={theme === "dark" ? "dark" : "light"}
          data-icon="octicon-star"
          data-size="large"
          data-show-count="true"
          aria-label="Star Freecodextra on GitHub"
        >
          Star on GitHub
        </GitHubButton>
      </div>

      {/* Copyright */}
      <p className="text-zinc-500 dark:text-zinc-400 text-sm font-light mt-4 md:mt-0">
        {user_info.footer}
      </p>

      {/* Back to top */}
      <button
        onClick={scrollToTop}
        className="mt-4 md:mt-0 text-zinc-500 dark:text-zinc-400 hover:text-indigo-600 dark:hover:text-indigo-400 text-sm font-semibold flex items-center gap-2 mx-auto md:mx-0 transition-colors"
      >
        <ArrowUp size={16} />
        Back to top
      </button>
    </footer>
  );
}

export default Footer;

/**
 * useEmbedMode
 *
 * Drop this hook into any standalone React app.
 * When the portfolio embeds the app via:
 *   /instructional-design-portfolio/app/{id}
 * the iframe URL has ?embed=true appended.
 *
 * Usage:
 *   const { isEmbedded } = useEmbedMode();
 *   if (isEmbedded) return <AppWithoutNav />;
 *   return <AppWithNav />;
 *
 * Install in your standalone app:
 *   src/hooks/useEmbedMode.ts
 */

import { useMemo } from 'react';

interface EmbedModeResult {
    /** True when the app is running inside the portfolio iframe */
    isEmbedded: boolean;
    /** The raw value of the ?embed param (null if not present) */
    embedParam: string | null;
}

export function useEmbedMode(): EmbedModeResult {
    return useMemo(() => {
        const params = new URLSearchParams(window.location.search);
        const embedParam = params.get('embed');
        const isEmbedded = embedParam === 'true' || embedParam === '1';
        return { isEmbedded, embedParam };
    }, []);
}

export default useEmbedMode;

/* ─────────────────────────────────────────────────────────────────
   HOW TO USE IN YOUR STANDALONE APP
─────────────────────────────────────────────────────────────────

1.  Copy this file to your standalone app:
    src/hooks/useEmbedMode.ts

2.  In your App.tsx (or root layout component):

    import { useEmbedMode } from './hooks/useEmbedMode';
    import NavBar from './components/NavBar';

    const App = () => {
      const { isEmbedded } = useEmbedMode();

      return (
        <div className="app">
          {!isEmbedded && <NavBar />}   ← hides nav when in portfolio iframe
          <main>
            <Routes> ... </Routes>
          </main>
          {!isEmbedded && <Footer />}   ← hides footer too
        </div>
      );
    };

3.  In APP_REGISTRY (EmbeddedApp.tsx in the portfolio), set:
      supportsEmbed: true

    The portfolio will then load:
      https://your-app.vercel.app?embed=true

4.  That's it. Direct URL → full experience.
    Portfolio iframe → no nav, fills the iframe cleanly.

─────────────────────────────────────────────────────────────────
   VITE CONFIG — allow iframe embedding
   In your standalone app's vite.config.ts:
─────────────────────────────────────────────────────────────────

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    headers: {
      // Allow your portfolio to embed this app.
      // Replace with your actual portfolio domain in production.
      'X-Frame-Options': 'ALLOWALL',
      'Content-Security-Policy': "frame-ancestors 'self' https://sharonbello.com https://*.vercel.app",
    },
  },
});

─────────────────────────────────────────────────────────────────
   VERCEL — allow iframe embedding in production
   Create vercel.json in your standalone app root:
─────────────────────────────────────────────────────────────────

{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Frame-Options",
          "value": "ALLOWALL"
        },
        {
          "key": "Content-Security-Policy",
          "value": "frame-ancestors 'self' https://sharonbello.com https://*.vercel.app"
        }
      ]
    }
  ]
}

─────────────────────────────────────────────────────────────────
   NETLIFY — allow iframe embedding in production
   Create netlify.toml in your standalone app root:
─────────────────────────────────────────────────────────────────

[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "ALLOWALL"
    Content-Security-Policy = "frame-ancestors 'self' https://sharonbello.com https://*.netlify.app"

─────────────────────────────────────────────────────────────────
*/
import React, { useState, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

/* ─────────────────────────────────────────────
   APP REGISTRY
   Add every external/standalone app here.
   The portfolio card links to:
     /instructional-design-portfolio/app/{id}
   The app loads embedded with ?embed=true appended.
───────────────────────────────────────────── */
export interface AppEntry {
    id: string;
    title: string;
    subtitle: string;
    url: string;               // Full URL of the deployed standalone app
    supportsEmbed?: boolean;   // If true, appends ?embed=true so the app hides its own nav
    color?: string;            // Accent color for the exit bar
}

export const APP_REGISTRY: AppEntry[] = [

    // ── FREELANCE & CLIENT PROJECTS ──────────────────────────────────
    // supportsEmbed becomes true once you add a _headers file to each
    // Cloudflare Pages project (see useEmbedMode.ts for the file content)

    {
        id: 'loombox',
        title: 'Loombox',
        subtitle: 'AI-powered family story generator',
        url: 'https://loombox.pages.dev',
        supportsEmbed: false,
        color: '#FFCB74',
    },
    {
        id: 'florigins',
        title: 'Florigins',
        subtitle: 'Your identity becomes a unique flower',
        url: 'https://florigins-app.pages.dev',
        supportsEmbed: false,
        color: '#E8634A',
    },
    {
        id: 'pans-israel',
        title: 'PANS PANDAS Israel',
        subtitle: 'Advocacy & support for families',
        url: 'https://panspandasil.org',
        supportsEmbed: false,
        color: '#389C9A',
    },
    {
        id: 'girls-plus',
        title: 'Girls Plus Training',
        subtitle: 'Tech & innovation curriculum for teenage girls',
        url: 'https://girlsplustraining.pages.dev',
        supportsEmbed: false,
        color: '#C0567A',
    },

    // ── ED-TECH & ID TOOLS ───────────────────────────────────────────

    {
        id: 'literature-portal',
        title: 'English Literature Portal',
        subtitle: '5-Point Bagrut — 7 texts — HOTS & Bridging',
        url: 'https://lit-portal.pages.dev',
        supportsEmbed: true,
        color: '#C9A84C',
    },
    {
        id: 'ai-bagrut-scorer',
        title: 'AI Bagrut Scorer',
        subtitle: 'MOE rubric-based scoring — instant feedback',
        url: 'https://your-bagrut-scorer.vercel.app', // update when deployed
        supportsEmbed: true,
        color: '#2E7D72',
    },
];

/* ─────────────────────────────────────────────
   EMBEDDED APP VIEW
   Used as the route component for:
     /instructional-design-portfolio/app/:appId
───────────────────────────────────────────── */
const EmbeddedApp: React.FC = () => {
    const { appId } = useParams<{ appId: string }>();
    const navigate = useNavigate();
    const iframeRef = useRef<HTMLIFrameElement>(null);
    const [iframeLoaded, setIframeLoaded] = useState(false);

    const app = APP_REGISTRY.find(a => a.id === appId);

    if (!app) {
        return (
            <div style={{
                display: 'flex', flexDirection: 'column', alignItems: 'center',
                justifyContent: 'center', height: '60vh', gap: 16,
            }}>
                <p style={{ color: '#546270', fontSize: 16 }}>App not found.</p>
                <button
                    onClick={() => navigate(-1)}
                    style={btnStyle('#415161')}
                >
                    ← Back to Portfolio
                </button>
            </div>
        );
    }

    const embedUrl = app.supportsEmbed
        ? `${app.url}${app.url.includes('?') ? '&' : '?'}embed=true`
        : app.url;

    const accent = app.color ?? '#FFCB74';

    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', overflow: 'hidden' }}>

            {/* ── EXIT BAR ── */}
            <div style={{
                height: 48,
                background: '#415161',
                display: 'flex',
                alignItems: 'center',
                padding: '0 20px',
                gap: 16,
                flexShrink: 0,
                zIndex: 200,
                borderBottom: `2px solid ${accent}`,
            }}>
                {/* Back button */}
                <button
                    onClick={() => navigate(-1)}
                    style={{
                        background: 'transparent',
                        border: `1px solid rgba(255,255,255,0.25)`,
                        color: '#F6F6F6',
                        padding: '5px 14px',
                        borderRadius: 4,
                        cursor: 'pointer',
                        fontSize: 13,
                        fontWeight: 500,
                        display: 'flex',
                        alignItems: 'center',
                        gap: 6,
                        flexShrink: 0,
                        transition: 'border-color 0.2s, background 0.2s',
                    }}
                    onMouseEnter={e => {
                        (e.currentTarget as HTMLButtonElement).style.background = 'rgba(255,255,255,0.08)';
                        (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(255,255,255,0.5)';
                    }}
                    onMouseLeave={e => {
                        (e.currentTarget as HTMLButtonElement).style.background = 'transparent';
                        (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(255,255,255,0.25)';
                    }}
                >
                    ← Portfolio
                </button>

                {/* App identity */}
                <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ color: '#F6F6F6', fontWeight: 600, fontSize: 14, lineHeight: 1.2, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                        {app.title}
                    </div>
                    <div style={{ color: 'rgba(255,255,255,0.45)', fontSize: 11, marginTop: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                        {app.subtitle}
                    </div>
                </div>

                {/* Accent dot — brand colour indicator */}
                <div style={{ width: 8, height: 8, borderRadius: '50%', background: accent, flexShrink: 0 }} />

                {/* Open in full tab */}
                <a
                    href={app.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                        color: 'rgba(255,255,255,0.55)',
                        fontSize: 12,
                        textDecoration: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 4,
                        flexShrink: 0,
                        transition: 'color 0.2s',
                    }}
                    onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = '#F6F6F6'; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.55)'; }}
                >
                    Full screen ↗
                </a>
            </div>

            {/* ── LOADING INDICATOR ── */}
            {!iframeLoaded && (
                <div style={{
                    position: 'absolute', top: 48, left: 0, right: 0, bottom: 0,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    background: '#F6F6F6', zIndex: 100, flexDirection: 'column', gap: 16,
                }}>
                    <div style={{
                        width: 36, height: 36, border: '3px solid #E5E7EB',
                        borderTopColor: accent, borderRadius: '50%',
                        animation: 'spin 0.8s linear infinite',
                    }} />
                    <p style={{ color: '#8496b3', fontSize: 14 }}>Loading {app.title}...</p>
                    <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
                </div>
            )}

            {/* ── IFRAME ── */}
            <iframe
                ref={iframeRef}
                src={embedUrl}
                title={app.title}
                onLoad={() => setIframeLoaded(true)}
                style={{
                    flex: 1,
                    border: 'none',
                    width: '100%',
                    display: 'block',
                    opacity: iframeLoaded ? 1 : 0,
                    transition: 'opacity 0.3s ease',
                }}
                allow="fullscreen"
            />
        </div>
    );
};

/* helper */
function btnStyle(bg: string): React.CSSProperties {
    return {
        background: bg, color: '#F6F6F6', border: 'none',
        padding: '10px 20px', borderRadius: 4, cursor: 'pointer',
        fontSize: 14, fontWeight: 500,
    };
}

export default EmbeddedApp;
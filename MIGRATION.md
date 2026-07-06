# HelloJulio Migration Package

Complete reverse-engineered migration of [hellojulio.com](https://www.hellojulio.com) from Framer to a self-hosted Next.js 15 codebase.

## Sitemap

| Route | Type | Sections |
|-------|------|----------|
| `/` | Single-page portfolio | `#hero`, `#work`, `#play`, `#friends-mentors`, `#about` |

No additional routes exist on the live Framer site (confirmed via Framer search index and HTML crawl).

## Design System

### Breakpoints
- Mobile: `max-width: 809.98px`
- Tablet: `810px – 1199.98px`
- Desktop: `min-width: 1200px`

### Colors
| Token | Value | Usage |
|-------|-------|-------|
| Blue | `#9cc1e7` | Hero gradient start |
| Cream | `#faf5f0` | Hero gradient end |
| Dark | `#1a1615` | Headlines |
| Body | `#614a44` | Paragraph text |
| Muted | `#757170` | Secondary text |
| Work label | `#ec75ad` | Work section label |
| Play label | `#409fff` | Playground label |
| Mentors label | `#018370` | Mentors label |
| About label | `#fd4c22` | About label |

### Typography
| Element | Font | Size (desktop) | Letter-spacing |
|---------|------|----------------|----------------|
| H1 | Goudy Bookletter 1911 | 76px | -2.28px |
| H2 | Goudy Bookletter 1911 | 52px | -1.56px |
| H5/H3 cards | Goudy Bookletter 1911 | 28px | -0.84px |
| Body | Gabarito | 16–18px | 0 |
| Labels/buttons | Open Runde | 12–14px | 0.08em uppercase |

### Layout
- Max content width: `1072px`
- Hero height: `1078px` (desktop)
- White card top radius: `202px`
- Pill button radius: `100px`

## Animations (Framer Motion)

| Interaction | Duration | Easing | Values |
|-------------|----------|--------|--------|
| Hero spring entrance | 1s | spring (bounce 0.2) | opacity 0→1 |
| Hero fade (portrait) | 0.7s | cubic-bezier(0.44,0,0.56,1) | delay 1.25s |
| Scroll reveal sections | 0.8s | cubic-bezier(0.44,0,0.56,1) | opacity 0→1, y 64→0 |
| Work/play card hover | spring | stiffness 400 | scale 1.02, y -4 |
| Slideshow transition | 0.5s | cubic-bezier(0.44,0,0.56,1) | opacity + x slide |

Reduced motion: all animations collapse to instant opacity transitions.

## Assets

All assets are stored locally under `/public/assets/`:
- `/images/` — photos, GIFs, SVGs, OG image, favicon
- `/fonts/` — Open Runde (self-hosted)
- Google Fonts loaded for Gabarito and Goudy Bookletter 1911

See `public/assets/asset-map.json` for the full Framer URL → local path mapping.

## External Links Preserved

| Label | URL |
|-------|-----|
| LinkedIn | https://www.linkedin.com/in/juliosouffront/ |
| Let's Meet | https://cal.com/juliosouffront/30min |
| Unreasonable Hospitality (book) | Amazon link |
| simple ideas | YouTube link |
| UnCurrify POC | Instagram |
| On Me trailer | Instagram |
| Mates Buy Now | take.app |
| Books I'm Reading | Goodreads |
| Gmail | mailto:juliosouffront@gmail.com |
| X (Twitter) | https://x.com/juliosouffront |
| Instagram | https://www.instagram.com/juliosouffront/ |

## SEO

Replicated from live site:
- Title: Julio Souffront - Portfolio
- Meta description (exact match)
- Canonical: https://www.hellojulio.com/
- Open Graph + Twitter cards
- JSON-LD Person + WebSite schema
- robots.txt + sitemap.xml
- Google Analytics: G-2TM0PYZENG

## Development

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Production Build

```bash
npm run build
npm start
```

## Deployment

### Vercel (recommended)

1. Push this repo to GitHub
2. Import project at [vercel.com/new](https://vercel.com/new)
3. Framework preset: Next.js (auto-detected)
4. Build command: `npm run build`
5. Add domain `hellojulio.com` and `www.hellojulio.com`
6. Update DNS:
   - `A` record → `76.76.21.21`
   - `CNAME` for `www` → `cname.vercel-dns.com`
7. SSL is automatic

### Cloudflare Pages

1. Connect Git repository
2. Build command: `npm run build`
3. Use `@cloudflare/next-on-pages` adapter for Next.js
4. Add custom domain in Cloudflare dashboard

### DigitalOcean App Platform

1. Create App from GitHub repo
2. Build: `npm run build`, Run: `npm start`
3. Add domain in App Settings

### VPS

```bash
git clone <your-repo>
cd hellojulio
npm ci && npm run build
pm2 start npm --name hellojulio -- start

# Nginx + Certbot for SSL
sudo certbot --nginx -d hellojulio.com -d www.hellojulio.com
```

## DNS Migration from Framer

1. Deploy and verify on staging URL
2. Lower DNS TTL to 300s
3. Remove Framer DNS records
4. Add new hosting records
5. Verify SSL and analytics
6. Cancel Framer after 48h stable traffic

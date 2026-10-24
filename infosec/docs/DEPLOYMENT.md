# Deploying to Vercel

The app is a static Vite build in the `infosec/` folder of `muntherh/py`. The Python Mastery Lab at the repository root is not part of this deployment.

## One-time setup (Vercel dashboard)

1. **Add New → Project → Import** `muntherh/py`.
2. Set **Root Directory** to `infosec`.
3. Leave the build settings on their defaults. `infosec/vercel.json` supplies them:

   | Setting | Value |
   |---|---|
   | Framework preset | Vite |
   | Install command | `npm ci` |
   | Build command | `npm run build` (type-check → `vite build` → `check-dist`) |
   | Output directory | `dist` |
   | Node.js | 22.x (from `package.json` `engines`) |

4. No environment variables are needed.
5. Deploy. Pushes to the branch create Preview deployments. The **Production** deployment follows the production branch (`main` by default). To get a production URL before merging, you can either:
   - change *Settings → Git → Production Branch*, or
   - promote a preview deployment.

With the Vercel CLI and a token, the equivalent is `cd infosec && vercel --prod`.

## Routing and refresh

- The app uses hash routes (`/#/learn/ch1-cia`). The server only ever sees `/`, so refreshing any page always works.
- `vercel.json` also rewrites every non-asset path to `index.html`. A small script in `index.html` then turns a plain path such as `/learn/ch1-cia` into `/#/learn/ch1-cia`, so plain links and refreshes work too.
- Static files are served first. Missing `/assets/*` files return a real 404 instead of HTML.

## Headers

| Path | Headers |
|---|---|
| `/assets/*` | `Cache-Control: public, max-age=31536000, immutable` (file names are content-hashed) |
| `/`, `/index.html` | `Cache-Control: no-cache`, so new deployments are picked up immediately |
| All paths | `Content-Security-Policy` (self-hosted scripts, styles and fonts only), `X-Content-Type-Options: nosniff`, `X-Frame-Options: DENY`, `Referrer-Policy`, `Permissions-Policy` |

## Course material

- The lecture slides and the Lab Manual are **not deployed**. Lessons, questions and flashcards keep their written explanations and exact references (for example “Chapter 1 (Lecture 1), slide 5” or “Lab Manual, Lab 6, pg. 14”). Students look these up in their own copy.
- `scripts/check-dist.mjs` runs after every build, including on Vercel. It fails the build if `dist/` contains a `sources/` folder or any `.webp/.png/.jpg/.gif/.pdf/.ppt(x)/.doc(x)` file.

## Verify locally exactly as Vercel will serve it

```bash
cd infosec
npm ci
npm run build             # includes the check-dist guard
npm run serve:vercel      # http://localhost:4175, applies vercel.json rewrites + headers
npx playwright test       # the e2e suite runs against this server
```

`tests/e2e/deploy.spec.ts` checks the following against the Vercel-style server:
- refresh on every route
- plain-path deep links
- an exam surviving a refresh
- the security and cache headers
- that no slide or page image can be fetched

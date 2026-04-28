# DIVA Website — Project Briefing for Claude Code

## What This Is
A 3-page pitch/awareness website for **Team D.I.V.A** (Driven by Inclusion, Validation, and Advocacy) — a student-led health innovation team focused on postpartum hemorrhage (PPH) detection. This is NOT a product website. We are NOT announcing a medical device or solution. This is a mission-driven awareness and contact page used at the end of presentations to generate interest and connections.

---

## ⚠️ CRITICAL CONSTRAINTS — DO NOT VIOLATE

- **DO NOT** create any "Product," "Solution," "Technology," or "Our Device" section, page, or component anywhere on the site. The team's medical device is unpublished and unpatented. Do not hint at, describe, or imply any specific technical solution.
- **DO NOT** add placeholder sections. If content isn't specified below, do not invent it.
- **DO NOT** use Inter, Roboto, Arial, or system-ui as the primary font.
- **DO NOT** use stock photos of hospitals, doctors, or surgeries.

---

## Design System

### Colors (match exactly)
```css
--color-bg: #EDE8E3;           /* warm off-white/cream background */
--color-primary: #8B1A6B;      /* deep magenta/purple — headlines, borders, accents */
--color-secondary: #B03A8A;    /* medium magenta — subheads, hover states */
--color-text: #2C1A2E;         /* near-black text */
--color-white: #FFFFFF;
--color-card-bg: #F5F0EC;      /* slightly lighter cream for cards */
--color-border: #8B1A6B;
```

### Typography
- **Display/Headlines**: Use a serif or editorial font (e.g., Playfair Display, DM Serif Display, or Cormorant Garamond). Headlines should feel editorial and serious — this is maternal health, not a startup app.
- **Body**: A humanist sans-serif (e.g., DM Sans, Nunito, or Lato). Legible, warm, not corporate.
- **Accent/Stats**: Bold weight of body font or a condensed display font for large numbers.

### Aesthetic Direction
- **Tone**: Refined editorial meets advocacy journalism. Think: *The New Yorker* meets a modern health nonprofit.
- **Layout**: Clean, spacious. Use generous whitespace. Stats get big typographic treatment.
- **Motion**: Subtle scroll-triggered fade-ins on stats and sections. Nothing flashy.
- **No gradients** except very subtle ones if used as background texture.
- Rounded corners on cards/callout boxes (matching the `border-radius` style in the provided slide images).
- Decorative borders: thin magenta lines used as section dividers and card outlines — exactly like the slide imagery.

---

## Site Structure

### Framework
Use **Next.js 14+ with App Router**. Tailwind CSS for utility classes. No external UI component libraries (Shadcn/Radix is fine if needed for form).

### File Structure
```
/app
  /page.tsx          ← Homepage
  /about/page.tsx    ← About Us
  /contact/page.tsx  ← Contact
  /layout.tsx        ← Shared layout with nav + footer
/components
  /Navbar.tsx
  /Footer.tsx
  /StatCard.tsx
  /TeamCard.tsx
/public
  /hero.png
  /our-team.png
  /logo.png
  (team member photos if available separately)
```

---

## Page Specifications

### Page 1: Homepage (`/`)

**Nav**: Logo (D.I.V.A wordmark or text logo), links to About and Contact. Sticky. Clean.

**Hero Section**
- Large headline: *"Saving Mothers Starts With Seeing the Problem"* (or similar mission-driven statement)
- Subhead: *"Every 2 minutes, a mother dies from hemorrhage globally."*
- CTA button → links to `/contact` (label: "Get in Touch")
- Visual: Use `/public/hero.png` as background or side image

**Stats Bar / Impact Section**
Display these 3 stats in large typographic treatment:
- **3.6M** — Hospital births per year in the U.S.
- **100K+** — PPH cases annually in the U.S.
- **Every 2 min** — A mother dies from hemorrhage globally

**Problem Section** ("Why This Matters")
Use these stats in a content block:
- PPH is the **leading cause of maternal mortality** globally
- Current visual estimation has only **15.9% sensitivity**
- Clinicians underestimate blood loss by **30–50%** consistently
- This creates a **15–35 minute detection-to-intervention gap**
- **60–80% of hemorrhage deaths are classified as preventable** with timely detection
- Quote callout: *"The issue isn't that we can't treat PPH. It's that we can't see it in time."*

**Mission Statement Block**
Short paragraph: Team D.I.V.A is driven by inclusion, validation, and advocacy. We are committed to closing the gap in maternal health outcomes — especially for underserved communities.

**CTA Footer Banner**
"Want to learn more or collaborate?" → Button to `/contact`

---

### Page 2: About Us (`/about`)

**Hero/Header**: "Our Team" headline. Subtitle: *"United by a commitment to underserved populations"*

**Mission paragraph**: 
We are a multidisciplinary team of women united by one belief — that no mother should die from a preventable complication. Postpartum hemorrhage claims a life every 2 minutes globally. We are here to change that. D.I.V.A stands for **Driven by Inclusion, Validation, and Advocacy.**

**Team Cards** — display as a 4-column grid (2-col on mobile):
Use circular photo frames with magenta border (matching the slide design exactly).

| Name | Focus Area | School |
|------|-----------|--------|
| Anoosha Adtani | Clinical Care & Operations | UT San Antonio |
| Hadia Mohammadzadah | Maternal and Public Health | St. Olaf College |
| Avneet Singh | Health Policy | University of Illinois Urbana-Champaign |
| Judith Adomako | Neuroscience & Global Health | Northwestern University |

Use `/public/our-team.png` as a reference for how the team grid looks. If individual photos are available, they will be in `/public/` as `team-anoosha.png`, `team-hadia.png`, `team-avneet.png`, `team-judith.png`.

**Values Section** (3 columns):
- **Inclusion** — Centering underserved and underrepresented communities in maternal health
- **Validation** — Grounding every decision in clinical evidence
- **Advocacy** — Speaking up where systems have been silent

---

### Page 3: Contact (`/contact`)

This is the most important page. It appears at the end of presentations. It needs to look professional and inviting.

**Headline**: "Let's Build Something That Saves Lives"
**Subhead**: "Whether you're a clinician, researcher, investor, or advocate — we want to hear from you."

**Contact Form fields**:
- Full Name (required)
- Email (required)
- Organization / Affiliation (optional)
- Role / How you'd describe yourself (dropdown: Clinician, Researcher, Investor, Advocate, Student, Other)
- Message (required, textarea)
- Submit button: "Send Message"

**Form handling**: Use a **Next.js Server Action** (`app/contact/actions.ts`) with **Resend** for email delivery. 

Install: `npm install resend`

The Server Action should:
1. Validate fields server-side with zod
2. Call Resend's API to send an email notification to the team
3. Return a success or error state to the client

```ts
// app/contact/actions.ts
'use server'
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// Send to: process.env.CONTACT_EMAIL (add to .env.local)
// From: onboarding@resend.dev (until custom domain verified)
```

Add to `.env.local` (with TODO comments):
```
RESEND_API_KEY=your_resend_api_key_here
CONTACT_EMAIL=teamdiva@yourdomain.com
```

On the client, use `react-hook-form` + `zod` for inline validation. On submit, call the Server Action via `useFormState` or `useTransition`. Show a success message ("Thanks! We'll be in touch soon.") inline after submission — do NOT redirect away from the page.

**Below the form**, add a simple contact info block:
- Email: `teamdiva@[placeholder].com`
- "Follow our journey" (social links placeholder)

---

## What NOT to Include
- No "Our Product" or "Our Solution" or "Technology" pages or sections
- No pricing, investment terms, or business model details
- No medical advice language
- No competitor comparisons
- No blog or news section
- No cookie banners (not needed for a static contact form site)

---

## SEO / Meta
- Title: "D.I.V.A | Driven by Inclusion, Validation, and Advocacy"
- Description: "Team D.I.V.A is a women's health innovation team focused on improving maternal outcomes through better postpartum hemorrhage detection."
- OG image: use hero image

---

## Accessibility
- All images need descriptive alt text
- Color contrast must pass WCAG AA (magenta on cream has good contrast)
- Form fields need proper labels and aria attributes
- Keyboard navigable

---

## Tone of Voice
- Serious but hopeful. This is life-or-death work, but the team is young, passionate, and optimistic.
- Data-forward. Lead with statistics, they're powerful.
- Inclusive and human. No cold clinical language. No jargon.
- Never say "our device," "our product," "our system," or "our technology."
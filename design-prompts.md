# Brilliance — Design Prompts & Brief

## 1. Research

| Reference | What makes it premium |
|---|---|
| Aesop | Warm earthy palette, muted full-bleed photography, restrained type, almost no promo noise |
| Augustinus Bader | Science-led: big clean hero, short confident claims, precise sans |
| La Mer | Cinematic full-width hero, water textures, serif headlines, slow reveals |
| Byredo | Gallery layout, oversized product on flat colour, tiny uppercase sans |
| Aman Spa | Immersive natural-light photography, thin serif, sparse slow pacing |

**Gap analysis**
- Table stakes: full-bleed hero, serif + sans pairing, restrained palette, one CTA per moment.
- Local salon/distributor sites (incl. the previous Brilliance site) use product packshots as hero → reads as a shop, not a house.
- Opportunity: lead with *atmosphere* (light, skin, texture), let real products appear second as insets; connect three national beauty cultures + salon rituals in one story.

## 2. Concepts → chosen

| Concept | Idea | Palette | Fonts |
|---|---|---|---|
| A. Calm minimal | Aesop-like warm paper | #F7F4EE #D8C9B4 #A89B8B #37332F #FFFFFF | Cormorant Garamond / Inter |
| **B. Cinematic editorial (chosen)** | Dark warm light-and-shadow hero, ivory editorial body, espresso "night" chapters | #29241F #F7F4EE #D8C9B4 #A89B8B #37332F | Cormorant Garamond / Inter |
| C. Clinical science | Cool white, lab glass | #FFFFFF #E9ECEC #56666B #22282A #D8C9B4 | Cormorant / Inter |

```
PROJECT:     Brilliance — A World of Beauty, Curated for You
PURPOSE:     Make visitors want to book a salon ritual and shop the official brands
AUDIENCE:    Women 25–55, Ulaanbaatar, mostly mobile; also salon/clinic partners and estheticians
CONCEPT:     Cinematic editorial
MOOD:        warm, quiet, sensual, expert, timeless
PALETTE:     primary #29241F | secondary #F7F4EE | accent #D8C9B4 | neutral #A89B8B | background #F7F4EE
TYPOGRAPHY:  headings Cormorant Garamond 300 / body Inter 400  (Cyrillic ✔ incl. Ө ө Ү ү)
PAGES:       Home (single page, anchored chapters)
SECTIONS:    Hero · Story · Three cultures (DE/JP/KR tabs) · Signature rituals (dark) · Beauty Edit ·
             Four journeys · Locations · Contact · Closing footer
IMAGE STYLE: warm low-key light, skin & texture, natural materials; real brand packshots only as insets
ASSUMPTIONS: no confirmed prices/durations/opening hours → never shown; location photos are mood
             placeholders until real interiors are supplied [TODO]
```

## 3. Canva prompts

```
Hero (1920×1080, Dream Lab): Close portrait of a woman's profile in a dark warm room, late-afternoon
light falling through window blinds in soft stripes across skin and hair, cinematic beauty campaign,
palette espresso #29241F, champagne #D8C9B4, warm amber highlights, large dark negative space on the
left for headline text, serene intimate mood, no text, no watermark, no logos.
```
```
Texture accent (1080×1350, Magic Media): Macro of a translucent golden serum drop and a cream swirl
on warm travertine stone, soft side light, palette ivory #F7F4EE, champagne #D8C9B4, amber, calm
luxurious mood, no text, no packaging, no logos.
```
```
OG image (1200×630, Magic Design): Dark espresso #29241F background, the hero photograph on the right,
wordmark "BRILLIANCE" in thin Cormorant Garamond letter-spaced, line "A world of beauty. Curated for you."
in ivory #F7F4EE, generous margins.
```
**Brand kit:** colors above · Cormorant Garamond + Inter · logo variants: wordmark ivory, wordmark espresso, emblem (diamond 輝) on ivory tile, favicon.

## 4. Figma prompts

```
Design system for Brilliance. Colors: espresso #29241F, charcoal #37332F, ivory #F7F4EE, ivory-2 #EFE9E0,
champagne #D8C9B4, taupe #A89B8B, white. Text styles: Display XL Cormorant Garamond Light 128/0.92,
Display L 92/1.0, Display S 36/1.15, Eyebrow Inter Medium 10.5 uppercase +30% tracking, Body Inter 15.5/1.7.
8px spacing scale, radius 0 everywhere, no shadows except product-inset 0 30 60 -25 rgba(0,0,0,.45).
Components: Button (dark/light/ghost; hover = fill wipes in from left), Link-line, Tab (numeral + country),
Product card (4:5 white stage, soft floor shadow), Field (underline input). States: default/hover/focus/disabled.
```
```
Design the Home page for Brilliance — make visitors book a salon ritual and shop. Desktop 1440px, 12-col grid,
max width 1520, side padding 72. Mood: warm, quiet, cinematic. Fonts Cormorant Garamond / Inter.
1. Hero — full-bleed [Unsplash: hero], dark gradient left; eyebrow "BRILLIANCE"; H1 "A world / of beauty. /
   Curated for you."; line "Where science meets the art of beauty."; CTAs "EXPLORE THE EXPERIENCE", "DISCOVER OUR WORLD".
2. Story — "Beauty is more than a routine. It is an experience."; large [story-facial] + small [texture-serum];
   Hidesan Co., Ltd. official Schrammek distributor note.
3. Three beauty cultures — tabs I Germany / II Japan / III Korea; mood photo + real brand inset; 3 highlights; "DISCOVER THE BRAND".
4. Signature rituals (espresso bg) — Hot Shell Healing, Asian Resort Healing, Cream Bath, Face Healing; alternating image/text;
   "RESERVE YOUR EXPERIENCE" → salon.brilliance.mn.
5. The Beauty Edit — horizontal product gallery, brand filter, quick view.
6. Four journeys — Online / Salon / Partners / Training, sticky image.
7. Locations — 3 cards with address, phone, directions, contextual CTA.
8. Contact — details + inquiry form. 9. Closing footer.
Then create the 390px mobile version: stacked, full-screen hero, swipe galleries, full-width primary buttons.
```

## 5. Unsplash picks (all verified HTTP 200 image/jpeg)

| Slot | Photo | Photographer |
|---|---|---|
| Hero | photo-1512206451403-542d321772f3 (sun through blinds) | Andras Vas |
| Story large | photo-1706795033728-9232ef548a16 (facial massage) | Anna Keibalo |
| Story small | photo-1748543668687-624e058c367c (serum textures) | ibnu ihza |
| Germany | photo-1748543668751-902d6461890d (gels + leaves) | ibnu ihza |
| Japan | photo-1786343453481-3e53d1aa7108 (wooden bath) | Fidel Fernando |
| Korea | photo-1675249754562-6386c7d43d86 (glass ampoules) | Zhang liven |
| Salon | photo-1773924093206-9a433a14bb44 (spa lounge) | Virginia Marinova |
| Store | photo-1775504982885-b0c0f089a0bf (bottle shelves) | Samuel Regan-Asante |
| Minister Tower | photo-1704655295066-681e61ecca6b (desk + flowers) | Francesco Liotti |
| Closing band | photo-1578413142862-c10be6467b8b (black pebbles) | 360floralflaves |

Rejected: shots showing third-party brand labels (REVOX dropper, branded oil bottles), pink-cast vials.
Files live in `public/us/`; credits in the footer.

## 6. Coding handoff
```
Stack: Next.js 16 App Router, TypeScript, Tailwind v4 (@theme tokens in app/globals.css), Framer Motion.
Tokens: colors/fonts above → @theme; radius 0; ease cubic-bezier(.22,1,.36,1).
Images: public/us/* (Unsplash, credited) + public/img/* (brand assets) via next/image with Mongolian alt text.
Requirements: responsive 390/768/1440, semantic HTML, WCAG AA, Cyrillic-safe fonts, lazy below the fold,
prefers-reduced-motion respected, no invented prices/hours/reviews.
```

## 7. Next steps
- Replace location placeholders with real photos of Khan Hills salon, E-Mart store, Minister Tower [TODO].
- Supply higher-res product packshots (current 352px) and a sharper Hot Shell Healing photo.
- Connect the contact form: set `RESEND_API_KEY` + `CONTACT_TO` or `CONTACT_WEBHOOK_URL` in Vercel.

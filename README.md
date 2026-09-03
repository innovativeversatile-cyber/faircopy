# Fair Copy

A page in the browser. Photos of papers in, a PDF out. Nothing is uploaded.

This is a separate product. It is not part of the marketplace, and it should be served on its own domain when you have one.

## Use it

Open `index.html` over https (or a local server). Take a photo or choose images. Tidy the page if you need to. Make PDF.

Three pages are free. That is enough for a letter, a form, or a card.

## Put it on its own domain

Publish the `faircopy/` folder as a static site (Netlify, GitHub Pages, any host). Point a quiet domain at it. Change nothing else.

Until then, a copy is also shipped at `/faircopy/` on the existing static host so you can try the real flow.

## Language and currency

The page can be read in English, Kiswahili, French, Portuguese, Spanish, Polish, or German. Amounts can be shown in a local currency.

Language and currency stay in this browser (`faircopy.lang`, `faircopy.currency`). They are not added to the share link, so the person who receives it sees their own language and money.

Prices are round local amounts in `config.js`, not live bank rates. That keeps the page offline. A pass is still only a date saved here.

## Payments

A pass is paid through **VibeCart's Stripe** (the same account as the marketplace). The papers stay on this device. Only the card checkout leaves this page.

Tap a price on the landing list, in the workspace (while you work), or on the three-page limit dialog. You do not have to wait until you hit three pages.

`config.js` points at:

`https://vibe-cart.com/api/public/payments/faircopy/checkout`

After payment, Stripe returns here with `?pass=day` (or month / year). The pass is a date in this browser. Clearing site data clears it.

Optional overrides: `paymentLinks.EUR.day`, and so on.

## What it does not do

No accounts, analytics, or file locker. No app. Fonts are the ones already on the device.

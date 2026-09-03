# Fair Copy

A page in the browser. Photos of papers in, a PDF out. Nothing is uploaded.

This is a separate product. It is not part of the marketplace, and it should be served on its own domain when you have one.

## Use it

Open `index.html` over https (or a local server). Take a photo or choose images. Tidy the page if you need to. Make PDF.

Four pages are free. That is enough for a letter, a form, or both sides of a card.

## Put it on its own domain

Publish the `faircopy/` folder as a static site (Netlify, GitHub Pages, any host). Point a quiet domain at it. Change nothing else.

Until then, a copy is also shipped at `/faircopy/` on the existing static host so you can try the real flow.

## Language and currency

The page can be read in English, Kiswahili, French, Portuguese, Spanish, Polish, or German. Amounts can be shown in a local currency.

Language and currency stay in this browser (`faircopy.lang`, `faircopy.currency`). They are not added to the share link, so the person who receives it sees their own language and money.

Prices are round local amounts in `config.js`, not live bank rates. That keeps the page offline. A pass is still only a date saved here.

## Payments later

Edit `config.js` and paste Stripe Payment Links. Each link should return to this page with:

- `?pass=day`
- `?pass=month`
- `?pass=year`

Optional per-currency links: `paymentLinks.EUR.day`, and so on. If a currency has no link, the amounts still show; buying is offered only when a link exists.

The pass is stored in this browser only. Clearing site data clears it. The card processor never sees the documents.

## What it does not do

No accounts, analytics, or file locker. No app. Fonts are the ones already on the device.

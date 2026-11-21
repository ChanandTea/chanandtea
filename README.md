# Chan and Tea Culture International

Static bilingual (English / 中文) website for Chan and Tea Culture International,
a federal not-for-profit corporation in Canada (Corporation No. 1261468-5).
**Not a registered charity: do not show a charity number or promise tax receipts.**

Design copied from padmarefuge.org. Plain HTML + CSS, no build step. Suited to GitHub Pages.

## Structure

```
index.html          Home: about, Chan and tea are one flavour, mission, vision, values, activities
events.html         Upcoming, past events (each links to its article), history timeline
event-*.html        One article page per event, with photos and captions (13)
governance.html     Board and officers, purposes, activity guidelines, transparency
involved.html       Membership, volunteer, donate, contact form
privacy.html, accessibility.html, 404.html
assets/css/styles.css   All styles (bilingual rules at the bottom)
assets/js/main.js       Language toggle, mobile menu, contact form, footer year
assets/img/             logo.png / logo-light.png (full logo), mark.png / mark-light.png (brush mark only)
assets/img/events/      Event photos (taken from the event article .docx files)
```

## How the language toggle works

Every piece of text is written twice, side by side:

```html
<span class="en" lang="en">Events</span><span class="zh" lang="zh-Hans">活动记录</span>
```

The EN / 中文 buttons in the header set `data-lang` on `<html>`, and the CSS hides the other language.
The choice is remembered per visitor. Links can force a language with `?lang=zh` or `?lang=en`.
First-time visitors whose browser is set to Chinese see Chinese.

When editing, always change both the `.en` and the `.zh` version.

Main pages use Simplified Chinese from the Chinese content pack. The event articles are in
Traditional Chinese, exactly as supplied (marked `lang="zh-Hant"`).

## Edit locally

```
python3 -m http.server 8766
```
then visit http://localhost:8766.

## Logo

The website uses the black-and-white logo only, recoloured to the site's ink (`logo.png`) and cream (`logo-light.png`)
with transparent backgrounds. The gold embossed logos are for appointment letters only and are not used on the site.

## Still to do

- [ ] Upcoming events
- [ ] Contact form: currently opens the visitor's email app. Swap for a form service (e.g. Formspree) if wanted
- [ ] Domain + GitHub Pages

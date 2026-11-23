# Chan and Tea Culture International

Static bilingual (English / 中文) website for Chan and Tea Culture International.

Layout from padmarefuge.org; blue / mint glass palette (tokens at the top of styles.css). Jekyll site built automatically by GitHub Pages on every push to `main`. Events are edited through Pages CMS (https://app.pagescms.org); see EDITING-EVENTS.md.

## Structure

```
_config.yml             Jekyll settings (events collection, future events published)
.pages.yml              Pages CMS editor form for events
_layouts/default.html   Shared head, header, footer
_layouts/event.html     Event article page
_includes/              Event list item, home card, date formatting, image paths
_events/*.md            One file per event (front matter only: titles, dates, place, summaries, article, photos)
index.html, events.html, governance.html, involved.html, privacy.html, accessibility.html, 404.html
assets/css/styles.css   All styles (palette tokens at the top)
assets/js/main.js       Language toggle, mobile menu, contact form, footer year
assets/img/events/      Event photos (uploads from the editor land here)
EDITING-EVENTS.md       Guide for the team: adding and editing events
```

Event pages are served at `event-<file name>.html`. Upcoming events (date in the future) show under
"Coming up" on the Events page and move to "Past events" after the date.

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

## Build locally

```
gem install --user-install jekyll kramdown-parser-gfm webrick
jekyll serve
```
then visit http://localhost:4000.

## Logo

The website uses the black-and-white logo only, recoloured to the site's ink (`logo.png`) and cream (`logo-light.png`)
with transparent backgrounds. The gold embossed logos are for appointment letters only and are not used on the site.

## Still to do

- [ ] Contact form: currently opens the visitor's email app. Swap for a form service (e.g. Formspree) if wanted
- [ ] Domain + GitHub Pages

# Angebote und Rechnungen schreiben mit Vorlage

Kostenlos, ohne Anmeldung und ohne Konto: Angebote, Rechnungen, Abschlags- und Schlussrechnungen als PDF, mit allen Pflichtangaben und E-Rechnung (ZUGFeRD und XRechnung). Das Programm eignet sich besonders für Selbstständige, Handwerker und kleine Betriebe mit wenigen Mitarbeitern, die bis etwa 100 Rechnungen im Jahr schreiben. Einmal einrichten, danach ist jede Rechnung in 2 Minuten fertig.

**Zum Programm:** [peter-unruh.github.io/angebote-und-rechnungen](https://peter-unruh.github.io/angebote-und-rechnungen/)

![Angebote und Rechnungen schreiben mit Vorlage](vorschau.png)

## Was es kann

- Angebote, Rechnungen, Abschlags- und Schlussrechnungen als PDF
- E-Rechnung im Format ZUGFeRD automatisch inklusive, XRechnung für Behörden
- Zahlungserinnerung und Mahnung, Lieferschein, Export als Word-Datei
- Rechnungsliste für den Steuerberater als CSV und als DATEV-Buchungsstapel
- Beispiel zum sofort Ausprobieren: Beim ersten Start ist alles mit einer erfundenen Maurerei ausgefüllt
- Kleinunternehmer (§ 19 UStG) und Bauleistungen (§ 13b UStG)
- Kunden, Positionen und Nummern werden gemerkt, offene Rechnungen bleiben im Blick
- Läuft im Browser, auch ohne Internet und als App auf Handy und Computer
- Hell, dunkel oder wie am Gerät

## Freischaltcode

Die ersten 5 Dokumente gehen sofort, mit einem kleinen Hinweis und QR-Code unten im PDF. Beispiele zählen nicht mit. Für unbegrenzt viele Dokumente ohne Hinweis gibt es einen Freischaltcode auf Anfrage per E-Mail bei Peter Unruh. Im Programm unter „Einstellungen → Freischaltung → Code anfragen“ ist die E-Mail schon vorbereitet.

## Datenschutz

Alle Daten bleiben auf dem Gerät. Kunden, Angebote, Rechnungen und Firmendaten werden nur im Browser gespeichert. Das Programm schickt nichts ins Internet, lädt keine fremden Schriften oder Skripte und nutzt keine Cookies und keine Statistik-Dienste. Beim Aufruf der Seite verarbeitet nur GitHub als Anbieter, wie bei jeder Webseite, technische Daten wie die IP-Adresse. Details in `impressum.html`.

## Nutzen

- **Online:** Seite öffnen. Das Programm zeigt, wie es sich auf deinem Gerät als App installieren lässt. Danach läuft es auch ohne Internet.
- **Als Datei:** `index.html` herunterladen und im Browser öffnen. Für ein Symbol auf dem Desktop eine Verknüpfung zur Datei anlegen.

Die Daten liegen je Browser getrennt. Mit „Einstellungen → Datensicherung“ lassen sie sich sichern und auf ein anderes Gerät übertragen. In Chrome und Edge am Computer geht das auch automatisch in einen Ordner. Eine ausführliche Anleitung gibt es im Programm unter „Einstellungen → Anleitung (PDF)“.

## Ohne Gewähr

Das Programm ersetzt keine Steuer- oder Rechtsberatung. Prüf jedes Dokument vor dem Versand. Es gibt keinen Anspruch auf Freischaltcode, Hilfe oder neue Versionen. Feedback und Hinweise auf Fehler sind willkommen.

## Dateien

| Datei | Zweck |
|---|---|
| `index.html` | das ganze Programm in einer Datei |
| `impressum.html` | Impressum und Datenschutz |
| `manifest.webmanifest`, `sw.js` | Installation als App und Nutzung ohne Internet |
| `icon-*.png`, `apple-touch-icon.png` | App-Symbole |
| `vorschau.png` | Vorschaubild für Links (1200 × 630) |
| `sitemap.xml` | für die Google Search Console |
| `google….html` | Bestätigung für die Google Search Console (nicht löschen) |

## Neue Version veröffentlichen

1. In `index.html` oben im Skript `APP_VERSION` und `APP_VERSION_DATE` erhöhen und in `CHANGES` eintragen, was neu ist. Den Text der Anleitung findest du im Skript unter `HELP`.
2. In `sw.js` den Namen in `CACHE` anpassen (aktuell `angebote-rechnungen-3.2`).
3. In `sitemap.xml` das Datum bei `lastmod` anpassen.
4. Alle geänderten Dateien hochladen. Beim nächsten Öffnen sehen Nutzer einmal den Hinweis „Neu: Version …“.

Einstellbar oben im Skript: `FREE_DOCS` (Zahl der Dokumente ohne Code), `DEMO_FIRM` (Beispiel-Firma beim ersten Start), `CONTACT_MAIL` (Adresse für Code-Anfragen und Feedback) und `SITE_URL` (Ziel des QR-Codes im PDF).

## Bei Google gefunden werden

Einmalig in der [Google Search Console](https://search.google.com/search-console) die Adresse als „URL-Präfix“ hinzufügen und bestätigen, zum Beispiel mit der HTML-Datei von Google (`google….html`), die einfach im Repository liegen bleibt. Danach unter „Sitemaps“ die Adresse von `sitemap.xml` einreichen.

The Sales Hub - multi-page website

Bestanden:
- index.html
- wat-we-doen.html
- locaties.html
- franchise-starten.html
- salarischeck.html
- contact.html
- solliciteren.html
- style.css
- script.js
- images/

Belangrijk:
- Dit is een sterk op Good Wave geinspireerde, maar eigen variant.
- De knop 'Solliciteren' in de navigatie en de knop 'Direct solliciteren' op de homepage linken naar solliciteren.html.
- De homepage hero is bewust opvallender gemaakt, met meer nadruk op tekst en beelden.
- Vervang de placeholder afbeeldingen in /images door je eigen foto's.


Aanpassingen nieuwe versie:
- Voorpagina compacter gemaakt.
- Label 'Bijbaan voor jongeren met ambitie' verwijderd.
- Huiskleur ingesteld op #24A1DA.
- 'Wat we doen' vervangen door 'Wat jij kunt verwachten'. Deze pagina focust nu alleen op goede doelen werving, werkdagverloop en waarom The Sales Hub past bij de kandidaat.
- 'Onze locaties' vervangen door 'Over ons'. Deze pagina gaat over ambitie, kernwaarden en bedrijfsidentiteit.
- Over ons-pagina bevat onderaan een Google Maps kaartje waarvan je later het adres kunt aanpassen in de iframe-URL.



TEKSTEN AANPASSEN
=================
Open de map in Visual Studio Code.

Gebruik Ctrl+F en zoek op:
AANPASSEN

Dan spring je langs alle plekken waar je veilig tekst, knoppen, contactgegevens,
footertekst, kernwaarden en Google Maps kunt aanpassen.

Veilig aanpassen:
- tekst tussen <h1>...</h1>
- tekst tussen <h2>...</h2>
- tekst tussen <h3>...</h3>
- tekst tussen <p>...</p>
- tekst tussen <li>...</li>
- knoptekst tussen <a ...>...</a>

Voorzichtig mee zijn:
- class="..."
- href="..."
- src="..."
- <script>
- <link>

Google Maps aanpassen:
Ga naar Google Maps > zoek je adres > Delen > Kaart insluiten > HTML kopiëren.
Vervang daarna alleen de src="" van de iframe in over-ons.html.


NETLIFY FORMS + GOOGLE SHEETS
=============================
Het sollicitatieformulier in solliciteren.html is nu klaargezet voor Netlify Forms.

Na upload naar Netlify:
1. Ga naar je bestaande Netlify-site.
2. Upload/deploy deze map opnieuw.
3. Open je site en doe zelf één testsollicitatie.
4. Ga in Netlify naar jouw site > Forms.
5. Daar hoort nu het formulier 'sollicitatie' te staan.
6. Inzendingen kun je daar bekijken en exporteren als CSV.

Google Sheets koppelen:
- Gebruik Zapier of Make.
- Trigger: New Form Submission in Netlify.
- Action: Add Row in Google Sheets.
- Koppel de velden:
  voornaam, achternaam, email, telefoon, leeftijd.

Verwijderd uit het sollicitatieformulier:
- Voorkeurslocatie
- Vertel kort iets over jezelf

Belangrijk:
De JavaScript is aangepast zodat de sollicitatieform niet meer wordt tegengehouden door een test-alert.
Andere formulieren kunnen nog wel een testmelding geven.

# Kontaktformular einrichten

Das Kontaktformular verwendet **Web3Forms** - einen kostenlosen Service ohne Registrierung.

## So aktivieren Sie das Formular:

### Schritt 1: Access Key erhalten (30 Sekunden)

1. Gehen Sie zu: **https://web3forms.com/**
2. Scrollen Sie nach unten zu "Get Started"
3. Geben Sie Ihre E-Mail-Adresse ein (die E-Mail, an die Formulare gesendet werden sollen)
4. Klicken Sie auf "Get Access Key"
5. Sie erhalten sofort einen Access Key per E-Mail (z.B. `abc123-def456-ghi789`)

### Schritt 2: Access Key einfügen

1. Öffnen Sie die Datei: `src/pages/index.astro`
2. Suchen Sie nach der Zeile (ca. Zeile 165):
   ```html
   <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE">
   ```
3. Ersetzen Sie `YOUR_ACCESS_KEY_HERE` mit Ihrem echten Access Key
4. Speichern Sie die Datei

### Schritt 3: Deployen

```bash
git add src/pages/index.astro
git commit -m "Kontaktformular mit Web3Forms aktiviert"
git push
```

## Features

✅ **Keine Registrierung nötig** - nur E-Mail-Adresse angeben
✅ **Spam-Schutz** - Honeypot-Feld integriert
✅ **Success/Error-Meldungen** - Benutzerfreundliches Feedback
✅ **Loading-State** - Button zeigt "Wird gesendet..."
✅ **Kostenlos** - bis zu 250 Submissions/Monat im Free-Tier

## E-Mail-Format

Wenn jemand das Formular abschickt, erhalten Sie eine E-Mail mit:
- Name des Absenders
- E-Mail-Adresse
- Telefonnummer (optional)
- Event-Art
- Nachricht
- Datum/Uhrzeit der Anfrage

## Troubleshooting

**Problem:** Formular funktioniert nicht
- ✓ Überprüfen Sie, ob der Access Key korrekt eingesetzt wurde
- ✓ Prüfen Sie Ihre E-Mail (auch Spam-Ordner) auf die Bestätigungs-E-Mail
- ✓ Stellen Sie sicher, dass die Seite deployed wurde (nicht nur lokal)

**Problem:** E-Mails kommen nicht an
- ✓ Überprüfen Sie den Spam-Ordner
- ✓ Bestätigen Sie Ihre E-Mail-Adresse (Link in der ersten E-Mail von Web3Forms)
- ✓ Überprüfen Sie das Web3Forms Dashboard: https://web3forms.com/dashboard

## Alternative: Eigene E-Mail-Adresse

Wenn Sie später eine andere E-Mail-Adresse verwenden möchten:
1. Besorgen Sie einen neuen Access Key mit der neuen E-Mail
2. Ersetzen Sie den Access Key in `index.astro`
3. Deployen Sie erneut

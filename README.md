# Uppgiftsapp – mobil (React Native med Expo)

Mobilapp som visar uppgifterna från samma backend som webbappen. Den har en listvy och en detaljvy där bilden visas.

Repon:
- Webb: https://github.com/SemirZahirovic97/uppgiftsapp-webb
- Backend: https://github.com/SemirZahirovic97/uppgiftsapp-backend
- Mobil: https://github.com/SemirZahirovic97/uppgiftsapp-mobil

## Behövs
- Node.js 24, .NET SDK 10 och Git
- Appen **Expo Go** på en telefon, inloggad på ett gratis Expo-konto
- Datorn och telefonen på **samma Wi-Fi**

## Så startar du appen

**Terminal 1 – backend:**
```
git clone https://github.com/SemirZahirovic97/uppgiftsapp-backend
cd uppgiftsapp-backend
dotnet run --launch-profile http
```
Om Windows frågar om brandväggen: tillåt privata nätverk.

**Terminal 2 – mobilappen:**
```
git clone https://github.com/SemirZahirovic97/uppgiftsapp-mobil
cd uppgiftsapp-mobil
npm install
npx expo login
npx expo start
```
Skanna QR-koden med Expo Go (Android) eller kameran (iPhone).

Vill du i stället köra appen i webbläsaren på datorn, tryck **w** i terminalen efter `npx expo start`. Då öppnas appen på `http://localhost:8081`. Det kräver ingen telefon eller Expo Go, men uppladdning av bild stöds bara i webbappen, inte i mobilappens webbläge.

## Vad appen kan
- Visa uppgifter från API:et (GET)
- Navigera från listan till en detaljvy
- Visa bilden som laddats upp i webbappen
- Dra ner listan för att ladda om
- Visa ett felmeddelande om API:et inte svarar

## Tekniska val
- **Expo:** enklast sätt att starta ett React Native-projekt och testa det i Expo Go utan emulator.
- **React Navigation (stack):** ger navigation mellan lista och detalj.
- **API-adressen hittas automatiskt** i `api.js` från datorns IP som Expo redan känner till. Då behöver ingen skriva in en IP-adress.
- **Backend lyssnar på 0.0.0.0:** annars når inte telefonen API:et, eftersom `localhost` på telefonen är telefonen själv.
- **FlatList:** visar listan effektivt.
- **Samma felhantering som webben:** try/catch och ett felmeddelande i stället för en krasch.
- Startar du med `--tunnel` fungerar inte den automatiska adressen, så använd vanlig `npx expo start`.
- **Går att köra i webbläsaren:** tryck `w` efter `npx expo start` för att testa utan telefon. Backend tillåter då anrop även från port 8081 via CORS, utöver port 5173 för webbappen.
# login-assignment
HTML: 

html-koden är rätt så straight forward. Jag delade up min kod i olika sektioner för att göra det enklare att följa de olika delarna på webbsidan. Det som var spännande här var loginformuläret där jag var tvungen att lägga till klasser, ID osv för att kunna styla med css så att min inloggningsruta dyker upp i mitten.

CSS:

Cssen var riktigt klurig eftersom jag valde att krångla till det en aning. Istället för att göra en enkel login-form med två inputs och en knapp så ville jag styla till det så att vid klick på knappen logga in så kommer ett helt formulär upp där du kan regga medlemskap, glömt lösenord (dessa saknar funktioner i dagsläget dock) samt skriva in användarnamn och lösenord. 

Utöver det så skulle den då ligga i mitten så jag var tvungen att ta bort den delen av koden från flödet med position absolute och sedan placera den i mitten. Nästa problem var att min bakgrundsbild hamnade ovanför min loginruta så jag fick höja z-index. Overall så var det en nyttig läxa hur man kan manipulera sin hemsida med olika verktyg så som opacity, z-index , display none osv. 


JS:

När det kommer till javascripten så försökte jag strukturera min kod så bra som möjligt för att själv kunna fortsätta jobba med den vid behov. Jag valde därför att högst upp göra en "liten sektion" där jag skapar och deklarerar samtliga variablar jag kommer behöva använda. Detta för att enkelt hitta vad de olika variablarna heter samt vad det är för något.

Därefter arbetade jag mig neråt. Det första jag behövde göra var att få min hemsida till att lyssna efter ett "click" på login knappen så att min popup ruta med inloggningsformuläret dyker upp. I min CSS hade jag förberett extra klasser som då ändrar så att popupen visas och därför var det enkelt att göra en funktion som lade till dessa klasser samt tog bort klassen vid klick. 

Jag ändrade senare detta till toggle på login knappen så man inte BEHÖVDE trycka på den lilla X rutan jag modifierade i html och css samt js. Jag gjorde även en addeventlistener med click för X rutan i min popup så möjligheten att stänga rutan där finns också. Detta då med att ta bort klassen som vi lade till innan.

Att spara i local storage:

Detta var i särklass det svåraste med övningen. Jag lyckades rätt omgående att spara informationen i localstorage men mitt problem var att deklarera variablar/konstanter som jag sedan kunde hämta. 

Efter en HEL DEL googling så höll jag nästan på ge upp när jag kom på lösningen i duschen (komiskt nog).

Min lösning var då att om anv. namn och lösen stämde överens med uppgiftens förbestämda lösen och namn så skulle jag spara detta med localstorage.setitem. Det hade jag lyckats med innan också. Problemet jag hade innan var att kalla på dessa och sedan få hemsidan till att kolla om det fanns sparat innan startsidan visade logga in knappen istället för "du är inloggad, logga ut". 

Efter att vara helt insnöad på att jag måste göra en funktion så släppte jag den tanken lite och testade med en helt vanlig if och else villkor. 

Så jag gjorde en if-sats där om det fanns sparat så lägger jag till klasserna som visar logga ut knappen och tar bort logga in knappen och annars så tar jag bort dessa klasser.

Det sista jag behövde göra var att lägga till en logga ut-funktion med en addeventlistener på logga ut knappen. Detta gjorde jag då med att dels ta bort klasserna som visar sidan som inloggad med även då rensa localstorage (annars hade vi kunnat refresha sidan och ändå vara inloggade). Detta då med localStorage.clear();.

Lärorik uppgift - framförallt så stångades jag mycket med JS. CSS känner jag mig rätt trygg med nu samma med HTML - JS fortfarande nybörjare men lite klokare än för en vecka sedan!
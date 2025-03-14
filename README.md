# CSS-to-the-rescue-24-25
> "In the course *CSS to the Rescue*, it's all about experimentation. We want to see things we've never seen before. We want to see things we didn't know we could create with CSS. That means, of course, that you'll be experimenting on your own and not copying/generating code."

## Week 1
**Maandag:**
Voor het vak CSS begonnen we met een mini groepsopdracht, waarin ieder groepje een bepaald thema kreeg. Die van ons groepje was "scroll", hierin moesten we onderzoek doen naar wat dit eigenlijk inhield. Vanuit daar moesten we dit showcase aan de hand van een kleine website en deze de volgende dag presenteren.

**Dinsdag:**
Vandaag vonden de presentaties van onze kleine showcases plaats, maar helaas kon ik daar niet bij zijn. In de middag werd de daadwerkelijke opdracht bekendgemaakt. Thuis ben ik direct aan de slag gegaan met het uitwerken van een aantal ideeën. Dit jaar wilde ik graag werken met een control panel, maar dan in een isometrische stijl.

Om inspiratie op te doen, ben ik op Pinterest gaan zoeken en vond ik een aantal interessante afbeeldingen die hielpen om mijn concept verder vorm te geven. Daarnaast had ik al enkele CSS-technieken in gedachten die ik graag wilde toepassen, zoals nesting en container style queries.


<br>

### ![BANNER - IDEE](https://github.com/user-attachments/assets/b3556fd7-dfe3-4493-92ad-90d44961fe9f)
<br>
In de eerste week stond het verkennen en uitwerken van een idee centraal. Zoals ik al eerder aangaf, wilde ik dit jaar iets ontwerpen rondom een control panel. Mijn idee is deels geïnspireerd op een project van vorig jaar, waarin een isometrisch puzzelspel werd gemaakt. Toch wilde ik een eigen twist eraan geven en het op een andere manier benaderen. Na een verkenning van verschillende stijlen, heb ik drie unieke isometrische stijlen geselecteerd die als basis dienen voor mijn verdere ontwerp.


#### Inspiratie afbeeldingen
Hieronder zie je drie afbeeldingen die me inspireerden bij het vormgeven van mijn concept. Elke stijl heeft zijn eigen uitstraling en functionaliteiten, en ik wil elementen uit deze ontwerpen combineren om mijn eigen interactieve isometrische interface te creëren.


<p align="start">
  <img src="https://github.com/user-attachments/assets/53d3b238-4ca9-4a43-ad59-17aa6467eb8e" width="260">
  <img src="https://github.com/user-attachments/assets/2e9cc6a5-afbf-498a-81e2-9cc188b4abff" width="260">
  <img src="https://github.com/user-attachments/assets/e2750b3e-d168-4abf-9ade-5ce24e5223b1" width="260">
</p>


## Week 2
**Maandag:**
Deze week wilde ik mijn idee concreter maken, zodat ik wist wat ik kon gaan bouwen. Ik had al het plan om een data visualisatie dashboard te maken en dit een isometrische look te geven, waardoor sommige charts een 3D-uitstraling krijgen. Dit betekende dat ik moest nadenken over hoe ik bepaalde grafieken en elementen op een manier kon vormgeven die visueel interessant en functioneel zou zijn.

Om dit verder uit te werken, had ik een concreter plan nodig. Ik gebruikte een dashboardafbeelding als inspiratiebron voor de layout en template. Dit gaf me een goed startpunt om de structuur op te zetten en te bepalen welke elementen belangrijk waren. Vanuit deze basis kon ik verder werken aan de indeling en stijl van het dashboard.

<br>
<img src="https://github.com/user-attachments/assets/97255823-02da-4a9b-bbb4-8e7e3a140b1c" width="500">
<br>
<br>

**Dinsdag:**
Omdat ik alleen met CSS mocht werken, moest ik een manier vinden om toch interactie mogelijk te maken. Ik gebruikte inputs om bepaalde elementen aanklikbaar te maken en container style queries om de layout dynamisch aan te passen.

Zo had ik een startweergave van de website layout. Wanneer je hierop klikte, zoomde je in op het dashboard, waar verschillende widgets te zien waren. Binnen dit dashboard had ik inputs verwerkt, waarmee ik bepaalde delen kon activeren en aanpassen. Door container style queries toe te passen, kon ik dit eenvoudiger stylen.

Bijvoorbeeld deze regel code:
``` CSS
@container style(--web-state: zoomed-in) and style(--widget-section: widget1) {
  /* Styling voor widget 1 in de zoomed-in state */
}
```

Hiermee kon ik instellen dat wanneer de web-state op "zoomed-in" stond en widget1 actief was, specifieke stijlen toegepast werden. Dit gaf me de mogelijkheid om verschillende widget-layouts en overgangen volledig met CSS te regelen.

Daarnaast volgde ik vandaag een workshop over 3D, waardoor ik al met transform en perspective kon experimenteren. Hierdoor kon ik de uitstraling van het dashboard verbeteren en het gevoel van diepte versterken.


## Week 3
**Maandag:**
De derde week was begonnen, en het werd tijd om echt met isometrische stijlen te gaan werken. Ik wilde een 3D-cube maken en heb daarvoor verschillende YouTube-tutorials bekeken. Daarnaast volgde ik een extra workshop over container queries met cq-units, omdat ik deze mogelijk kon toepassen op de widget-grootte in mijn project.

Maar het werken met 3D verliep moeizaam en werd al snel frustrerend. Wat ik probeerde, werkte niet zoals verwacht, en ik kon niet direct vinden waar het misging. Uiteindelijk kreeg ik een tip om een blog te lezen over veelvoorkomende fouten in 3D CSS, zodat ik kon ontdekken wat er mis kon gaan. Ondanks die tip besloot ik maandag op te geven met 3D, omdat het simpelweg niet lukte.

**Dinsdag:**
Omdat ik dinsdag niet op school kon werken, besloot ik thuis door te gaan met de 3D-cube. Ik werkte een paar uur verder en maakte een apart HTML-bestand om in een kleinere schaal te testen wat er fout ging.

Tijdens dit experiment ontdekte ik uiteindelijk de oorzaak van het probleem:
Als een parent-element overflow: hidden; heeft, dan verliest het kind-element zijn 3D-uitstraling. Dit betekende dat de perspectief-effecten niet zichtbaar waren in mijn ontwerp.

Met deze kennis kon ik eindelijk de fout in mijn eigen project oplossen en had ik mijn eerste werkende 3D-cube! 🎉

Nu deze basis er stond, kon ik verder met het integreren van de cube in de widget. Het idee was dat wanneer je op een widget klikt, het lijkt alsof deze als een platform omhoogkomt. Dit gaf een interactief en dynamisch effect aan het dashboard.

## Bronnen
https://codepen.io/Jordan/pen/nQgYjv?editors=0110 [GRID gradient]
https://codepen.io/levente-frks/pen/GRvBjLM?editors=1100 [Isometric card animation]
https://css-tricks.com/almanac/properties/p/perspective/#:~:text=The%20perspective%20CSS%20property%20gives,more%20impressive%20the%20visual%20effect. [perspective]
https://webcode.tools/css-generator/rotate [Rotate tool]

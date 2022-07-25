# Test - Programmiergrundlagen

## Test Anweisungen 
* Arbeite von der `index.js` Datei aus, die du mit dem Starter-Code erhalten hast.
* Folge allen Anweisungen unten, um den Test zu absolvieren. 
* **Wichtig**: Stell sicher, dass die Namen der Variablen und Funktionen denen der Anweisungen (also die englischen) entsprechen. 
* Der Test wird automatisch ausgewertet. Das funktioniert nur, wenn die erwarteten Variablen und Funktionsnamen **und Ausgaben** gefunden werden.
* In der Übersetzung schreibe ich in Klammern (de: deutsche Bedeutung) dahinter.
* Seht euch diese Datei nicht als Text-Datei an, sondern auf einer Oberfläche die Markdown interpretiert (GitHub oder die Vorschau in Visual Studio Code). 
* Markdown-Code zur Formatierung **gehört nicht** zu den geforderten Namen von Funktionen und Ergebnissen.

* Alle Funktionen sollen Rückgabewerte haben, vergiss das `return` nicht.
* Gib aber zusätzlich die Lösungen auch auf der Konsole mit `console.log(Funktionsaufruf(Argumente));` aus, um deinen Code zu testen.

* Viel Glück!

### Bedingte Algorithmen 

#### 1. Los oder New?
* Schreibe eine Funktion "_nameOfCity_" (de: nameEinerStadt), die eine Stadt als Zeichenkette als Argument nimmt.
* Wenn die Kette mit "_Los_" oder "_New_" beginnt, gib den Namen der Stadt auf der Konsole aus und gib `true` zurück.
* Wenn nicht, dann gib "_The city name does not begin with Los or New_" (de: Die Stadt beginnt nicht mit Los oder New) auf der Konsole aus und gib `false` zurück.
* Die Schreibweise (groß/klein) von Buchstaben, soll unwichtig sein (los = Los, new = NEW, u.s.w.)

#### 2. ist teilbar durch?
* Schreibe eine Funktion "_isDivisible_" (de: istTeilbar), die eine ganze Zahl als Argument nimmt. 
* Wenn die Zahl durch 100 teilbar ist, gib `true` zurück; Wenn nicht, gib `false` zurück.
**Beispiele**: _1 ➞ false_, _1000 ➞ true_, _100 ➞ true_.

#### 3. Der fehlende Winkel
* Schreibe eine Funktion "_missingAngle_" (de: fehlenderWinkel), die zwei Zahlen als Argumente nimmt.
* Die zahlen sollen zwei bekannte Winkel in einem Dreieck sein.
* Den fehldenden Winkel musst du selbst ausrechnen.
* Für den fehlenden Winkel in dem Dreieck, soll die Funktion auswerten ob er spitz, recht, oder flach ist.
* Damit die automatische Testauswertung funktioniert, musst du die englischen Worte **genau so** zurück geben, wie hier angegeben. 
* (Es gehören keine Unterstriche in die Rückgabe, die gehören zum Markdown-code der README.md, um den Text schräg darzustellen)

**Hinweis**: Ein acute angle (de: spitzer Winkel) ist kleiner als 90°, ein right angle (de: rechter Winkel) ist exakt 90° und ein obtuse angle (de: flacher Winkel) ist größer als 90° (aber kleiner als 180°)

 **Beispiele**: 
- 11°, 20° soll "_obtuse_" (de: flach) liefern, denn der fehlende Winkel ist 149° 
- 27°, 59° ➞ der dritte Winkel ist 92° und damit "_obtuse_" (de: flach)
- 135°, 11° ➞ der dritte Winkel ist "_acute_" (de: spitz) 
- 45°, 45° ➞ der dritte Winkel ist ein "_right angle_" (de: rechter Winkel)

#### 4. Wie ist das Wetter?
* Benutze den ternären Operator für diese Aufgabe.
* Schreib eine Funktion "_isRaining_" (de: esRegnet), die einen Wahrheitswert nimmt.
* Bei true, gib zurück "_wet day - you need an umbrella!_" (de: nasser Tag - du brauchst einen Schirm)
* Bei false, gib zurück "_dry day - leave your umbrella at home!_" (de: trockener Tag - lass deinen Schirm zu Hause)

### Schleifen (engl. Loops) 

Die automatischen Tests kann man hier austricksen.
Wenn Ihr keine Schleifen verwendet um die Rückgaben zu erzeugen, ziehen wir die Punkte manuell wieder ab :)

Beachtet, dass nach dem letzten Wert der Sequenzen kein weiteres Leerzeichen kommt.

#### 1. Sequenzen
* Erstelle eine Funktion "_geometricalSequence_" (de: geometrischeSequenz).
* Verwende eine Schleife, um die folgende Sequenz zu erzeugen: _`1 2 4 8 16 32 64 128 256`_.
* "klebe" (concatenation) die einzelnen Werte als Zeichenkette zusammen.
* Gib die Zeichenkette als Rückgabewert von der Funktion zurück.

#### 2. Vielfache
* Schreibe eine Funktion namens "_multiplesOfThree_" (de: VielfacheVonDrei)
* Verwende eine Schleife, um die ersten fünf Vielfachen von Drei auszugeben: _`3 6 9 12 15`_
* "klebe" (concatenation) die einzelnen Werte als Zeichenkette zusammen.
* Gib die Zeichenkette als Rückgabewert von der Funktion zurück.

### Mathe 

#### 1. Du bist sehr Potent!
* Schreibe eine Funktion "_powerOf_" (de: PotenzVon), welche eine ganze Zahl als Argument nimmt.
* Sie soll die Potenz der Zahl mit sich selbst zurückgeben ( Zahl hoch Zahl ).
* Du solltest eine Methode des Math Objektes verwenden, um die Berechnung zu machen.

**Beispiele**:
- ```javascript 
    powerOf(3); //27
    ```

- ```javascript 
    powerOf(4); //256
    ```

### Probleme lösen 

#### 1. Wie viele Vokale?
* Schreibe eine Funktion "_vowelCount_" (de: vokalAnzahl), die eine Zeichenkette als Argument nimmt.
* Zähle wie viele Vokale die Zeichenkette enthält und gib die Anzahl als Rückgabewert zurück.
* [Vokale](https://de.wikipedia.org/wiki/Vokal) (auch "Selbstlaut") sind die folgenden Buchstaben: a, e, i, o, u

**Beispiele**: 
- ```javascript
  vowelCount("hello"); // 2
  ```
- ```javascript
  vowelCount("test"); // 1
  ```
- ```javascript
  vowelCount("fbw"); // 0
  ```

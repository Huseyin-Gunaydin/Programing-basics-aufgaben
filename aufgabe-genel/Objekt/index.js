/*
Schreibe ein Objekt, welches Aufgaben enthält und Methoden, mit denen die Aufgaben bearbeitet werden können.
Es soll möglich sein, eine neue Aufgabe hinzuzufügen, eine Aufgabe als erledigt zu markieren und Aufgaben zu löschen.
Außerdem soll man über eine weitere Methode nur unerledigte Aufgaben finden können.
Überlege dir, welche Eigenschaften eine einzelne Aufgabe haben muss, damit man die Methoden anwenden kann.

Beispiele für Aufgaben:

- Einkaufen gehen X
- Wohnung putzen  X
- Essen kochen    X
- Wäsche waschen
- Yaman wecken

*/



const todo = {
    aufgaben: {
  
    },
    unerledigteAufgaben() {
      for (key in this.aufgaben) {
        if (this.aufgaben[key] === false) {
          console.log(`-${key}`);
        }
      }
    },
    erledigteAufgaben() {
        for (key in this.aufgaben) {
          if (this.aufgaben[key] === true) {
            console.log(`- ${key} X`);
          }
        }
      },
    aufgabeHinzufügen(aufgabe) {
      this.aufgaben[aufgabe] = false;
      return `- ${aufgabe} ist hinzugefügt.`
    },

    aufgabeDelete(aufgabe){
       delete this.aufgaben[aufgabe]
       return `- ${aufgabe} ist gelöscht.`
    },
  
    aufgabeErledigen(aufgabe) {
        if (this.aufgaben[aufgabe])
        console.error(`- Aufgabe ${aufgabe} ist bereits erledigt.`);
        this.aufgaben[aufgabe] = true;
        return `- ${aufgabe} X`;
      },
  };



  console.log(todo.aufgabeHinzufügen("einkaufen"));
  console.log(todo.aufgabeHinzufügen("putzen"));
  console.log(todo.aufgabeHinzufügen("kochen"));
  console.log(todo.aufgabeHinzufügen("reactLernen"));
  console.log(todo.aufgabeHinzufügen("spazieren"));
  console.log("-----------------------------------");
  console.log(todo.aufgabeErledigen("einkaufen"));
  console.log(todo.aufgabeErledigen("kochen"));
  console.log("-----------------------------------");
  console.log(todo.aufgabeDelete("spazieren"));
  console.log("-----------------------------------");
  todo.unerledigteAufgaben();
  console.log("-----------------------------------");
  todo.erledigteAufgaben();


 


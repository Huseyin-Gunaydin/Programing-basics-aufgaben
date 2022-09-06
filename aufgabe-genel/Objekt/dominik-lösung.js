
const todo = {
    naechsteId: 1,
    aufgaben: [],

    hinzufuegen(bezeichnung) {
        const aufgabe = {
            id: this.naechsteId,
            bezeichnung: bezeichnung,
            erledigt: false,
        };
        this.aufgaben.push(aufgabe);
        this.naechsteId++;
    },

    erledigen(id) {
        const aufgabe = this.aufgaben.find(aufgabe => aufgabe.id === id);
        if (!aufgabe) return console.log("Aufgabe nicht gefunden");
        aufgabe.erledigt = true;
    },

    loeschen(id) {
        const aufgaben = this.aufgaben.filter(aufgabe => aufgabe.id !== id);
        this.aufgaben = aufgaben;
    },

    unerledigteAufgaben() {
        return this.aufgaben.filter(aufgabe => aufgabe.erledigt === false);
    },

    suchen(suchbegriff) {
        return this.aufgaben.filter(aufgabe => aufgabe.bezeichnung.toLowerCase().includes(suchbegriff.toLowerCase()));
    },
};

class Todo {
    constructor() {
        this.naechsteId = 1;
        this.aufgaben = [];
    }

    hinzufuegen(bezeichnung) {
        const aufgabe = {
            id: this.naechsteId,
            bezeichnung: bezeichnung,
            erledigt: false,
        };
        this.aufgaben.push(aufgabe);
        this.naechsteId++;
    }

    erledigen(id) {
        const aufgabe = this.aufgaben.find(aufgabe => aufgabe.id === id);
        if (!aufgabe) return console.log("Aufgabe nicht gefunden");
        aufgabe.erledigt = true;
    }

    loeschen(id) {
        const aufgaben = this.aufgaben.filter(aufgabe => aufgabe.id !== id);
        this.aufgaben = aufgaben;
    }

    unerledigteAufgaben() {
        return this.aufgaben.filter(aufgabe => aufgabe.erledigt === false);
    }

    suchen(suchbegriff) {
        return this.aufgaben.filter(aufgabe => aufgabe.bezeichnung.toLowerCase().includes(suchbegriff.toLowerCase()));
    }
};


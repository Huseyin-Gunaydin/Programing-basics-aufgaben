class Pokemon {
  constructor(name, health, magic) {
    this.name = name;
    this.health = health;
    this.magic = magic;
    this.skills = [];
  }
  learnAttackSkill(attackSkill) {
    const doesSkillAlreadyExist= this.skills.some((skill)=> skill.name===attackSkill.name
    );
    if(doesSkillAlreadyExist)
    return `${this.name} kann diesen Skill bereits.`;
    this.skills.push(attackSkill);
    return `${this.name} hat den Skill  ${attackSkill.name} gelernt`;
  }
  showStatus(){
    console.log(`Status- ${this.name}`); 
    console.log(`Gesundheit: ${this.health}`);
    console.log(`Magie: ${this.magic}`);
  }
  attack(attack, pokemon){
      let i = Math.floor(Math.random() * this.skills.length);
      this.skills[i].attackName = attack;
      this.pokemon = pokemon.name;
      this.health = this.health - pokemon.skills[i].healthConsumption;
      this.magic = this.magic - this.skills[i].magicConsumption;

      if (this.magic < this.skills[i].magicConsumption) {
        console.log(`nicht genug Magie, kann keinen Angriff starten!`);
        }


      console.log(`${this.pokemon} hat ${this.skills[i].healthConsumption} Schaden erhalten.`);
      } 
  }


class AttackSkill {
  constructor(name, healthConsumption, magicConsumption) {
    this.name = name;
    this.healthConsumption = healthConsumption;
    this.magicConsumption = magicConsumption;
  }
}

const pikachu = new Pokemon("pikachu", 100, 150);
const lightning = new AttackSkill("lightning", 40, 30);
console.log(pikachu);
console.log(pikachu.learnAttackSkill(lightning));
console.log(pikachu.learnAttackSkill(lightning));
console.log()

let poison = new AttackSkill ("poison", 20, 20);
pikachu.learnAttackSkill(lightning);
bulbasaur.learnAttackSkill(poison);

pikachu.attack("lightning", bulbasaur);
bulbasaur.attack("poison", pikachu);
pikachu.showStatus();
bulbasaur.showStatus();
pikachu.attack("lightning", bulbasaur);
pikachu.attack("lightning", bulbasaur);
// pikachu.getMagic();
// pikachu.attack("lightning", bulbasaur);
// bulbasaur.attack("poison", pikachu)




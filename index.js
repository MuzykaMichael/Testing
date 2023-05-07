const atTheOldToad = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Dragon breath", price: 780 },
    { name: "Stone skin", price: 520 },
  ],
  // Change code below this line
  getPotions() {
    return this.potions;
  },
  addPotion(newPotion) {
    for (let potion of this.potions) {
      if (potion.name === newPotion.name) {
        return `Error! Potion ${newPotion} is already in your inventory!`;
      }
    }

    this.potions.push(newPotion);
  },
  removePotion(potionName) {
    for (let potion of this.potions) {
      if (potion.name === potionName.name) {
        this.potions.splice(this.potions.indexOf(potion), 1)
      }
      else {
        return `Potion ${potionName.name} is not in inventory!`;
      }
    }
  },
  updatePotionName(oldName, newName) {
    for (let potion of this.potions) {
      if (potion.name === oldName.name) {
        potion.name = newName.name;
      } else {
        return `Potion ${oldName.name} is not in inventory!`;
      }
    }

  },
  // Change code above this line
};

atTheOldToad.getPotions()

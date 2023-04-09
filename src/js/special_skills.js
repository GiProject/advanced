export default function getSpecialSkills(character) {
  const arResult = [];

  for (const index in character.special) {
    if (character.special[index]
      && Object.keys(character.special[index]).length !== 0
      && Object.getPrototypeOf(character.special[index]) === Object.prototype) {
      const skill = character.special[index];
      if (!Object.prototype.hasOwnProperty.call(skill, 'description')) {
        skill.description = 'Описание недоступно';
      }
      arResult.push(skill);
    }
  }

  return arResult;
}
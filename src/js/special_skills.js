export default function getSpecialSkills(character) {
  const arResult = [];

  for (const index in character.special) {
    if (character.special[index]
      && Object.keys(character.special[index]).length !== 0
      && Object.getPrototypeOf(character.special[index]) === Object.prototype) {
        let skill = {};
        Object.defineProperty(skill, 'description', {
          value: 'Описание недоступно',
          enumerable: true,
        });
      arResult.push({...skill, ...character.special[index]});
    }
  }

  return arResult;
}

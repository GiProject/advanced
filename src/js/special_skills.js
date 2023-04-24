export default function getSpecialSkills({ special }) {
  const arResult = [];

  for (const skill of special) {
    const {
      id, name, icon, description = 'Описание недоступно',
    } = skill;
    arResult.push({
      id, name, icon, description,
    });
  }

  return arResult;
}

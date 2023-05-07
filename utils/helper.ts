type PlayKit = 'the-looker' | 'the-charmer' | 'the-senser' | 'the-inspector' | 'the-explorer' | 'the-thinker' | '';

export const getRecommendedPlayKitByBirthday = (birthday: string): PlayKit => {
  const today = new Date();
  const birthDate = new Date(birthday);

  let ageInMonths = (today.getFullYear() - birthDate.getFullYear()) * 12;
  ageInMonths -= birthDate.getMonth() + 1;
  ageInMonths += today.getMonth();

  if (ageInMonths <= 2) {
    return 'the-looker';
  } else if (ageInMonths >= 3 && ageInMonths <= 4) {
    return 'the-charmer';
  } else if (ageInMonths >= 5 && ageInMonths <= 6) {
    return 'the-senser';
  } else if (ageInMonths >= 7 && ageInMonths <= 8) {
    return 'the-inspector';
  } else if (ageInMonths >= 9 && ageInMonths <= 10) {
    return 'the-explorer';
    ``;
  } else if (ageInMonths >= 11 && ageInMonths <= 12) {
    return 'the-thinker';
  } else {
    return '';
  }
};

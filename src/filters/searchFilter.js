// @flow

function searchFilter(doodles: Array<Object>, keyword: string = ''): Array<Object> {
  if (keyword === '') {
    return [];
  }

  const filterRegexp = new RegExp(`\\b${keyword}\\b`, 'i');
  const matchingDoodles = doodles.filter(doodle => filterRegexp.test(doodle.title));

  return matchingDoodles;
}

export default searchFilter;

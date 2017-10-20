// @flow

import type { Doodle } from 'modules/types';

function searchFilter(doodles: Array<Doodle>, keyword: string = ''): Array<Doodle> {
  if (keyword === '') {
    return [];
  }

  const filterRegexp = new RegExp(`\\b${keyword}\\b`, 'i');
  const matchingDoodles = doodles.filter(doodle => filterRegexp.test(doodle.title));

  return matchingDoodles;
}

export default searchFilter;

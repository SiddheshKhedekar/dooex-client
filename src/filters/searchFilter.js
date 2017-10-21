// @flow

import type { Doodle } from 'modules/types';

import escape from 'modules/regexp-escape';

function searchFilter(doodles: Array<Doodle>, keyword: string = ''): Array<Doodle> {
  if (keyword === '') {
    return [];
  }

  const filterRegexp = new RegExp(escape(keyword), 'i');
  const matchingDoodles = doodles.filter(doodle => filterRegexp.test(doodle.title));

  return matchingDoodles;
}

export default searchFilter;

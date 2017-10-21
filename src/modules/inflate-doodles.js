function inflateDoodles(deflatedDoodles: Array<DeflatedDoodle>, meta: Meta): State {
  const {
    countries, linkTypes, schema, tags, urlPrefixes,
  } = meta;

  const doodles = deflatedDoodles.map((_, i) => {
    const doodle = {};

    schema.forEach((key, j) => {
      doodle[key] = deflatedDoodles[i][j];
    });

    linkTypes
      // $FlowFixMe
      .filter(linkType => schema.includes(linkType))
      .filter(linkType => doodle[linkType] !== null)
      .forEach((linkType) => {
        const urlPrefixIdx = doodle[linkType][0];

        const urlPrefix = urlPrefixes[urlPrefixIdx];
        doodle[linkType] = doodle[linkType].replace(urlPrefixIdx, urlPrefix);
      });

    doodle.countries = doodle.countries.map(cIdx => countries[cIdx]);
    doodle.tags = doodle.tags.map(tIdx => tags[tIdx]);

    doodle.isSaved = false;

    return doodle;
  });

  return doodles;
}

export default inflateDoodles;

'use strict';

const _           = require('lodash');
const es5         = require('../../data-es5');
const es2015      = require('../../data-es6');
const esnext      = require('../../data-esnext');
const esintl      = require('../../data-esintl');
const nonStandard = require('../../data-non-standard');

const table = {
  es5,
  es2015,
  esnext,
  esintl,
  nonStandard
};

const list = _.flattenDeep(Object.keys(table).map((i) =>
  table[i].tests.map((obj) =>
    obj.subtests ?
      obj.subtests.map((k) => k.name) :
      table[i].tests.name
  )
));

module.exports = table;
module.exports.nameList = list;

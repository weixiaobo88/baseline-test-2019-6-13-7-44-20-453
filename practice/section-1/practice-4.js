"use strict";

function collectSameElements(collectionA, objectB) {
  return collectionA
    .filter(item => objectB.value.indexOf(item.key) > -1)
    .map(item => item.key);
}

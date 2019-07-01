"use strict";

function collectSameElements(collectionA, collectionB) {
  return collectionA.filter(item =>
    collectionB.find(element => element.indexOf(item) > -1)
  );
}

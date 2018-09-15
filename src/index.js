/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let count = 0, a, b, c;
  preferences.unshift(null);
  for(let i=1;i<preferences.length;i++) {
    a = preferences[i];
    b = preferences[preferences[i]];
    c = preferences[preferences[preferences[i]]];
    if( (c == i) && (a != b) ) {
      count++;
      preferences[preferences[i]] = "used";
    }
  }
  return count;
};

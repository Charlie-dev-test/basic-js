const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if(typeof members != 'object') return false;
  if(!members) return false;
  let team = [];
  for(i=0; i<members.length; i++){
    if(typeof members[i] != 'string'){
      continue;
    }
    let str = members[i].trimStart();
    team.push(str[0].toUpperCase());
  }
  let dreamTeam = team.sort().join('');
  return dreamTeam;
};

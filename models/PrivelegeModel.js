// let roles = {
//   manager: {
//     can: ['read', 'write', 'publish']
//   },
//   writer: {
//     can: ['read', 'write']
//   },
//   guest: {
//     can: ['read']
//   }
// }
//
// function can(role, operation) {
//   return roles[role] && roles[role].can.indexOf(operation) !== -1;
// }
// class RBAC {
//   constructor(roles) {
//     if(typeof roles !== 'object') {
//       throw new TypeError('Expected an object as input');
//     }
//     this.roles = roles;
//   }
//
//   can(role, operation) {
//     return this.roles[role] && this.roles[role].can.indexOf(operation) !== -1;
//   }
// }
//
// module.exports = RBAC;

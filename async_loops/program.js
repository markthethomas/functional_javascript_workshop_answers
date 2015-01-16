// First: why is this broken?
// This function takes three arguments, loops through userIDs, and uses the load function to push those user ids into the users array. It returns this expanded array.

function loadUsers(userIds, load, done) {
  var users = []
  for (var i = 0; i < userIds.length; i++) {
    users.push(load(userIds[i]))
  }
  return users
}

module.exports = loadUsers

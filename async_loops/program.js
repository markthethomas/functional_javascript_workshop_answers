// First: why is this broken?
// This function takes three arguments, loops through userIDs, and uses the load function to push those user ids into the users array. It returns this expanded array.
  // set up completed var
  // set up users arrayf
  // for each item in userIds, call the load function and  with an id passed as the first arg and the second is a callback that takes the user and adds the user into the users array; the if statement checks if an incremented completed is equal to the length of the userIds array; if it is, it returns done with the users



  function loadUsers(userIds, load, done) {
    var completed = 0
    var users = []
    userIds.forEach(function(id, index) {
      load(id, function(user) {
        users[index] = user
        if (++completed === userIds.length) return done(users)
        })
      })
    }

    module.exports = loadUsers

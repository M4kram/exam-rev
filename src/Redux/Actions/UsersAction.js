export function addUserAction(user) {
  return { type: "ADD-USER", user: user };
}

export function updateUserAction(user) {
  return { type: "UPDATE-USER", user: user };
}

export function deleteUserAction(id) {
  return { type: "DELETE-USER", user: id };
}

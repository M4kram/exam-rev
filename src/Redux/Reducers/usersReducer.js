const initState = {
  users: [{ id: 1, username: "M4kram", email: "makram.abid2002@gmail.com" }],
};

export default function userReducer(state = initState, action) {
  switch (action.type) {
    case "ADD-USER":
      return {
        ...state,
        users: [...state.users, action.user],
      };
    case "DELETE-USER":
      return {
        ...state,
        users: state.users.filter((us) => {
          return us.id !== action.user;
        }),
      };
    case "UPDATE-USER":
      const user = state.users.find((us) => us.id === action.user.id);

      if (!user) break;

      user.username = action.user.username;
      user.email = action.user.email;

      return state;
    default:
      return state;
  }
}

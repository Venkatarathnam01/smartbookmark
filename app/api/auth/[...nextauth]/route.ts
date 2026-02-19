CredentialsProvider({
  name: "Credentials",
  credentials: {
    username: { label: "Username", type: "text" },
    password: { label: "Password", type: "password" }
  },
  async authorize(credentials) {
    if (
      credentials?.username === "admin" &&
      credentials?.password === "1234"
    ) {
      return { id: "1", name: "Admin" };
    }
    return null;
  }
})

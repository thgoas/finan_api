export const userResolvers = {
  Query: {
    user: () => {
      return {
        id: 1,
        name: 'thiago'
      }
    }
  }
}

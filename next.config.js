module.exports = {
  reactStrictMode: true,
  generateBuildId: async () => {
    // This generates a unique version number based on the current time
    return new Date().getTime().toString()
  }
}

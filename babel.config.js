module.exports = {
  presets: [
    [
      "@vue/cli-plugin-babel/preset",
      {
        // Ensure compatibility with Vue 2
        useBuiltIns: "entry"
      }
    ]
  ]
};

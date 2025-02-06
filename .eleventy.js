module.exports = function(eleventyConfig) {
  eleventyConfig.addShortcode("log", function(date, content) {
    return `<div class="log-entry">
              <h2>Log Entry: ${date}</h2>
              <p>${content}</p>
            </div>`;
  });

  return {
    dir: {
      input: "src",
      output: "dist"
    }
  };
};


// The export statement makes these settings available to other files in 11ty
module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("styles");

  eleventyConfig.addShortcode("logEntry", function (date, author) {
    return `<div class="log-entry">
      <p><em>Log Entry by ${author}, Stardate ${date}</em></p>
    </div>`;
  });
};

const getLanguages = (req, res) => {
  const languages = [
    "Javascript",
    "PHP",
    "Rust",
    "Lua",
    "C",
    "Zig",
    "Typescript",
  ];

  res.render("languages.ejs", { languages: languages });
};

module.exports = getLanguages;

export const theme = (args: string[]): string[] => {
  if (args.length === 0) {
    return [
      "Usage: theme [arg]",
      "Args:",
      "  - light: Switch to light mode.",
      "  - dark: Switch to dark mode."
    ];
  }

  const mode = args[0].toLowerCase();

  if (mode === "light") {
    document.body.classList.add("light-theme");
    return ["Switched to light theme. Protect your eyes."];
  } else if (mode === "dark") {
    document.body.classList.remove("light-theme");
    return ["Switched to dark theme. Much better."];
  } else {
    return [`Theme '${mode}' not recognized. Use 'light' or 'dark'.`];
  }
};
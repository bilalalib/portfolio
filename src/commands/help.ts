const helpObj = [
  ["'about'", "Who made this website?"],
  ["'projects'", "Maybe there's something interesting."],
  ["'theme'", "Toggle light/dark mode (e.g., 'theme light' or 'theme dark')."],
  ["'repo'", "View the Github Repository."],
  ["'banner'", "Display the banner."],
  ["'clear'", "Clear the terminal."],
  ["'whoami'", "A perplexing question."],
  ["'sudo'", "???"]
];

const createHelp = () : string[] => {
  const help : string[] = [];
  help.push("<br>");

  helpObj.forEach((ele) => {
    const SPACE = "&nbsp;";
    let string = "";
    string += SPACE.repeat(2);
    string += `<span class="command">${ele[0]}</span>`;
    let spaceCount = Math.max(0, 17 - ele[0].length);
    string += SPACE.repeat(spaceCount);
    string += ele[1];
    
    help.push(string);
  });

  help.push("<br>");
  help.push("Press <span class='keys'>[Tab]</span> for auto completion.");
  help.push("Press <span class='keys'>[Esc]</span> to clear the input line.");
  help.push("Press <span class='keys'>[↑][↓]</span> to scroll through your history of commands.");
  help.push("<br>");
  return help;
}

export const HELP = createHelp();
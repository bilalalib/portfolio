import command from '../../config.json' with {type: 'json'};

const createBanner = () : string[] => {
  const banner : string[] = [];
  banner.push("<br>")
  command.ascii.forEach((ele) => {
    let bannerString = "";
    for (let i = 0; i < ele.length; i++) {
      if (ele[i] === " ") {
        bannerString += "&nbsp;";
      } else {
        bannerString += ele[i];
      }
    }
    
    let eleToPush = `<pre>${bannerString}</pre>`;
    banner.push(eleToPush);
  });  
  banner.push("<br>");
  banner.push("Welcome to WebShell v1.0.0");
  banner.push("Type <span class='command'>'about'</span> to read my bio.");
  banner.push("Type <span class='command'>'projects'</span> to view my latest work.");
  banner.push("Type <span class='command'>'help'</span> for a list of all available commands.");
  banner.push(`<span class='responsive-text'>Type <span class='command'>'repo'</span> to view the GitHub repository or click <a href='${command.repoLink}' target='_blank'>here</a>.</span>`);
  banner.push("<span class='responsive-text'>Type <span class='command'>'theme light'</span> and <span class='command'>'theme dark'</span> to switch between light and dark themes.</span>");
  banner.push("<br>");
  return banner;
}

export const BANNER = createBanner();
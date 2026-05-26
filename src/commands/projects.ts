import command from '../../config.json' with {type: 'json'};

const createProject = () : string[] => {
  let string = "";
  const projects : string[] = [];
  const files = `${command.projects.length} File(s)`;
  const SPACE = "&nbsp;";

  projects.push("<br>")

  command.projects.forEach((ele) => {
    let link = `<a href="${ele[2]}" target="_blank">${ele[0]}</a>`;
    let row = `<div class="project-row"><span class="project-title">${link}</span><span class="project-desc">${ele[1]}</span></div>`;
    projects.push(row);
  });

  projects.push("<br>");
  projects.push(files);
  projects.push("<br>");
  return projects
}

export const PROJECTS = createProject()

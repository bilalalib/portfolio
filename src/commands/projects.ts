import command from '../../config.json' with {type: 'json'};

const createProject = () : string[] => {
  const projects : string[] = [];

  projects.push("<br>");
  projects.push("<span class='output' style='margin-left: 20px; opacity: 0.6; font-style: italic;'>current tech loadout. experimenting with generative AI next.</span>");
  projects.push("<br>");

  command.projects.forEach((ele) => {
    let link = `<a href="${ele[2]}" target="_blank">${ele[0]} ↗</a>`;
    let card = `<span class="project-card">
                  <span class="project-card-title">${link}</span>
                  <span class="project-card-desc">${ele[1]}</span>
                  <span class="project-card-tags">${ele[3]}</span>
                </span>`;
    projects.push(card);
  });

  projects.push(`${command.projects.length} File(s)`);
  projects.push("<br>");
  return projects;
}

export const PROJECTS = createProject();
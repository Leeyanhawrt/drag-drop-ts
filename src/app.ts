import { ProjectInput } from "./components/project-input.js";
import { ProjectList } from "./components/project-list.js";

// Feature of TS and not JS namespace has to match the same namespace that was assigned in exported file
// Need to create an outFile in tsconfig.json to combine all files or their connection will no longer exist. Also need to have "module" option set to 'amd'

new ProjectInput();
new ProjectList("active");
new ProjectList("finished");

import { files } from "./models/files";
import { folders } from "./models/folders";
import { workspaces } from "./models/workspaces";
import { pgEnum } from "drizzle-orm/pg-core";

export const FileTable = files;
export const FolderTable = folders;
export const WorkspaceTable = workspaces;

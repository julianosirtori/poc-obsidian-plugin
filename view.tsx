import { ItemView, WorkspaceLeaf } from "obsidian";
import { Root, createRoot } from "react-dom/client";
import { ReactView } from "./ReactView"

export const VIEW_TYPE_EXAMPLE = "example-view";

export class ExampleView extends ItemView {
  root: Root | null = null;
  constructor(leaf: WorkspaceLeaf) {
    super(leaf);
  }

  getViewType() {
    return VIEW_TYPE_EXAMPLE;
  }

  getDisplayText() {
    return "Example view";
  }

  async onOpen() {
    console.log(this.containerEl.children[1]);
    this.root = createRoot(this.containerEl.children[1]);
    // const Teste = createElement("div", {
    //   children: "Teste"
    // })
    this.root.render(<ReactView />);
  }

  async onClose() {
    // this.root?.unmount();
  }
}
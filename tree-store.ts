interface TreeItem {
  id: string | number;
  parent: string | number;
  type?: string | null;
}

class TreeStore {
  items: TreeItem[];
  constructor(items: TreeItem[]) {
    this.items = items;
  }

  getAll() {
    return this.items;
  }

  getItem(id: string | number) {
    return this.items.find((item) => item.id === id) || null;
  }

  getChildren(id: string | number) {
    return this.items.filter((item) => item.parent === id);
  }

  getAllChildren(id: string | number) {
    const allChildren = Array();
    const currentChildren = this.getChildren(id);
    allChildren.push(...currentChildren);

    currentChildren.forEach((element) => {
      allChildren.push(...this.getAllChildren(element.id));
    });

    return allChildren;
  }

  getAllParents(id: string | number) {
    const allParents = Array();
    let currentItem: TreeItem | null = this.getItem(id);
    if (!currentItem) {
      return [];
    }
    let currentItemParent: string | number | null = currentItem.parent;

    while (currentItemParent && currentItemParent !== "root") {
      let parentItem = this.getItem(currentItemParent);
      if (!parentItem) {
        currentItemParent = null;
        break;
      }
      allParents.push(parentItem);
      currentItemParent = parentItem.parent;
    }

    return allParents;
  }
}

const items: TreeItem[] = [
  { id: 1, parent: "root" },
  { id: 2, parent: 1, type: "test" },
  { id: 3, parent: 1, type: "test" },

  { id: 4, parent: 2, type: "test" },
  { id: 5, parent: 2, type: "test" },
  { id: 6, parent: 2, type: "test" },

  { id: 7, parent: 4, type: null },
  { id: 8, parent: 4, type: null },
];
const ts = new TreeStore(items);

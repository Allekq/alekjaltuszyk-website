/** Keep Markdown tables semantic while giving wide columns a keyboard-accessible scroll area. */
export default function responsiveTables() {
  return (tree) => {
    const wrapTables = (parent) => {
      if (!parent.children) return;

      parent.children = parent.children.map((node) => {
        if (node.type === "element" && node.tagName === "table") {
          return {
            type: "element",
            tagName: "div",
            properties: {
              className: ["legal-table-scroll"],
              role: "region",
              ariaLabel: "Table (scroll horizontally to see all columns)",
              tabIndex: 0,
            },
            children: [node],
          };
        }

        wrapTables(node);
        return node;
      });
    };

    wrapTables(tree);
  };
}

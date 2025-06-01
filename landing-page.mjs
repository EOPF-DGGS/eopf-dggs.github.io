const heroDirective = {
  name: `hero`,
  doc: `A directive for a hero section`,
  body: {
    type: "myst",
  },
  run(data) {
    const div = {
      type: "div",
      style: {
        fontWeight: "bold",
        fontSize: "1em",
        maxWidth: "80%",
        margin: "1em 2em auto auto",
        textAlign: "center",
        lineHeight: "normal",
        overflowWrap: "normal",
      },
      children: data.body,
    };
    return [div];
  },
};

const blockTitleDirective = {
  name: `block-title`,
  doc: `A directive for a block section title`,
  body: {
    type: "myst",
  },
  run(data) {
    const title = {
      type: "div",
      style: { fontSize: "1em", textAlign: "left" },
      children: [
        {
          type: "paragraph",
          children: data.body,
        },
      ],
    };
    return [title];
  },
};
/**  const div = {
        type: "div",
        children: [
          {
            type: "grid",
            columns: [1, 1, 2, 2],
            children: [title, ...data.body],
          },
        ],
        style: {
          margin: "4em auto",
        },
      };
      return [div];
    } else {
      const div = {
        type: "div",
        class: "col-page-inset",
        children: data.body,

        style: {
          margin: "4em auto",
        },
      };
      return [div];
    }
**/

const colorRoles = Object.entries({
  jupyter: "#F37626",
  bigBlue: "#1D4EF5",
  paleBlue: "#F2F5FC",
  midnight: "#230344",
  mauve: "#B86BFC",
  forest: "#057761",
  lightGreen: "#0CEFAE",
  magenta: "#C60A76",
  pink: "#FF808B",
  coral: "#FF4E4F",
  yellow: "#FFDE17",
}).map(([color, hexCode]) => {
  return {
    name: color,
    doc: `A role for 2i2c ${color} text`,
    body: {
      type: "myst",
    },
    run(data) {
      const div = {
        type: "span",
        style: { color: hexCode },
        children: data.body,
      };
      return [div];
    },
  };
});

const blockTransform = {
  name: "block-transform",
  doc: "A transform that pads blocks",
  stage: "document",
  plugin: (_, utils) => (node) => {
    const blocks = utils.selectAll("block", node);
    // Hero elements
    blocks
      .filter((block) => block.data?.class?.includes("hero"))
      .forEach((node) => {
        const div = {
          type: "div",
          style: {
            fontWeight: "bold",
            fontSize: "1em",
            maxWidth: "80%",
            margin: "2em auto auto auto",
            textAlign: "center",
            lineHeight: "normal",
            overflowWrap: "normal",
          },
          children: node.children,
        };
        node.children = [div];
      });
    // Named blocks
    const contentBlocks = Array.from(
      blocks.filter((block) => block.data?.class?.includes("content-block")),
    );
    contentBlocks.forEach((node, index) => {
      let marginDivChildren;
      if (index == 0) {
        marginDivChildren = node.children;
      } else {
        marginDivChildren = [
          {
            type: "div",
            children: [
              {
                type: "thematicBreak",
              },
            ],
            style: { marginBottom: "4em" },
          },
          ...node.children,
        ];
      }
      const marginDiv = {
        type: "div",
        style: {
          margin: "2em auto",
        },
        children: marginDivChildren,
      };
      node.children = [marginDiv];
    });

    const widthRegex = /tool-badge-(\d+px)/;
    utils.selectAll("*[class*=tool-badge]", node).forEach((child) => {
      const nextNode = structuredClone(child);
      const [, width] = child.class.match(widthRegex) ?? [];
      const innerDiv = {
        type: "div",
        children: [nextNode],
        style: {
          width: width ?? "128px",
        },
      };
      child.type = "div";
      child.children = [innerDiv];
      child.class = "";
      child.style = {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
      };
    });
  },
};

const plugin = {
  name: "Landing page extensions",
  roles: [...colorRoles],
  transforms: [blockTransform],
  directives: [heroDirective, blockTitleDirective],
};

export default plugin;

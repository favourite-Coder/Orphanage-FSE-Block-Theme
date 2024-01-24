wp.blocks.registerBlockType("ourblocktheme/blogindex", {
    title: "Online University Blog Index",
    edit: function () {
      return wp.element.createElement("div", { className: "our-placeholder-block" }, "Blog Index Placeholder")
    },
    save: function () {
      return null
    }
  })
  
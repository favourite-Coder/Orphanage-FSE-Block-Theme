wp.blocks.registerBlockType("ourblocktheme/search", {
  title: "Online University Search",
  edit: function () {
    return wp.element.createElement("div", { className: "our-placeholder-block" }, "Search Placeholder")
  },
  save: function () {
    return null
  }
})

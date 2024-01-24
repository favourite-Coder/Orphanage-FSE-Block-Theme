wp.blocks.registerBlockType("ourblocktheme/searchresults", {
  title: "Online University Searc Results",
  edit: function () {
    return wp.element.createElement("div", { className: "our-placeholder-block" }, "Search Results Placeholder")
  },
  save: function () {
    return null
  }
})

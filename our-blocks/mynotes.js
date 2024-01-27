wp.blocks.registerBlockType("ourblocktheme/mynotes", {
  title: "Orphanage My Notes",
  edit: function () {
    return wp.element.createElement("div", { className: "our-placeholder-block" }, "My Notes Placeholder")
  },
  save: function () {
    return null
  }
})

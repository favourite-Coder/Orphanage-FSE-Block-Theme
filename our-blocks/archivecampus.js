wp.blocks.registerBlockType("ourblocktheme/archivecampus", {
  title: "Orphanage Campus Archive",
  edit: function () {
    return wp.element.createElement("div", { className: "our-placeholder-block" }, "Campus Archive Placeholder")
  },
  save: function () {
    return null
  }
})

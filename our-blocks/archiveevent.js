wp.blocks.registerBlockType("ourblocktheme/archiveevent", {
  title: "Orphanage Event Archive",
  edit: function () {
    return wp.element.createElement("div", { className: "our-placeholder-block" }, "Event Archive Placeholder")
  },
  save: function () {
    return null
  }
})

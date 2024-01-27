wp.blocks.registerBlockType("ourblocktheme/singleevent", {
  title: "Orphanage Single Event",
  edit: function () {
    return wp.element.createElement("div", { className: "our-placeholder-block" }, "Single Event Placeholder")
  },
  save: function () {
    return null
  }
})

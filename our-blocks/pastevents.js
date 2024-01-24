wp.blocks.registerBlockType("ourblocktheme/pastevents", {
  title: "Online University Past Events",
  edit: function () {
    return wp.element.createElement("div", { className: "our-placeholder-block" }, "Past Events Placeholder")
  },
  save: function () {
    return null
  }
})

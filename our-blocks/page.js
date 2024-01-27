wp.blocks.registerBlockType("ourblocktheme/page", {
    title: "Orphanage Page",
    edit: function () {
      return wp.element.createElement("div", { className: "our-placeholder-block" }, "Single Page Placeholder")
    },
    save: function () {
      return null
    }
  })
  
import {$} from "@core/dom";

export const resizeHandler = (e, $root) => {
  const $target = $(e.target);
  const isCollType = $target.dataset.resize === 'col';
  const $parent = $target.closest('[data-resizable="true"]')
  const coords = $parent.getCoords()
  let value
  const sideProp = isCollType ? 'bottom' : 'right'

  document.onmousemove = (evt) => {
    $target.css({
      opacity: 1,
      [sideProp]: '-5000px'
    })

    if (isCollType) {
      const delta = Math.floor(evt.pageX - coords.right)
      value = coords.width + delta;
      $target.css({
        right: -delta + 'px',
      })
    } else {
      const delta = Math.floor(evt.pageY - coords.bottom)
      value = coords.height + delta;
      $target.css({
        bottom: -delta + 'px',
      })
    }
  }

  document.onmouseup = () => {
    document.onmouseup = null;
    document.onmousemove = null;

    if (isCollType) {
      $root.findAll(`[data-index="${$parent.$el.dataset.index}"]`)
        .forEach(element => element.style.width = value + 'px')
    } else {
      $parent.css({height: value + 'px'})
    }

    $target.css({
      opacity: 0,
      right: 0,
      bottom: 0,
    })
  }
}

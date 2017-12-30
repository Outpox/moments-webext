export function insertButtonV2() {
  // const actionBar = document.querySelector('#top-level-buttons')
  const youtubeShareAction = document.querySelector('#top-level-buttons ytd-button-renderer')
  const momentsAction = document.createElement('button')
  const momentsActionSpan = document.createElement('span')

  momentsActionSpan.classList.add('yt-uix-button-content')
  momentsActionSpan.innerText = browser.i18n.getMessage("shareButtonText")

  momentsAction.classList.add('yt-uix-button', 'yt-uix-button-size-default', 'yt-uix-button-opacity', 'yt-uix-button-has-icon', 'no-icon-markup', 'pause-resume-autoplay', 'yt-uix-tooltip')
  momentsAction.title = browser.i18n.getMessage("shareTooltipText")
  momentsAction.dataset.tooltipText = browser.i18n.getMessage("shareTooltipText")
  momentsAction.appendChild(momentsActionSpan)

  youtubeShareAction.insertAdjacentElement('afterend', momentsAction)
}
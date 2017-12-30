import { VideoPlayer } from '../helpers/VideoPlayer'

export function insertButtonV1() {
  const youtubeShareAction = document.querySelector('[data-trigger-for="action-panel-share"]')
  const player = new VideoPlayer()

  const momentsActionLink = document.createElement('a')
  const momentsActionButton = document.createElement('button')
  const momentsActionSpan = document.createElement('span')

  momentsActionSpan.classList.add('yt-uix-button-content')
  momentsActionSpan.innerText = browser.i18n.getMessage("shareButtonText")

  momentsActionButton.classList.add('yt-uix-button', 'yt-uix-button-size-default', 'yt-uix-button-opacity', 'yt-uix-button-has-icon', 'no-icon-markup', 'pause-resume-autoplay', 'yt-uix-tooltip')
  momentsActionButton.title = browser.i18n.getMessage("shareTooltipText")
  momentsActionButton.dataset.tooltipText = browser.i18n.getMessage("shareTooltipText")
  momentsActionButton.appendChild(momentsActionSpan)

  momentsActionLink.href = player.getMomentsUrl()
  momentsActionLink.target = '_blank'

  momentsActionLink.addEventListener('click', e => {
    player.playPause()
    momentsActionLink.href = player.getMomentsUrl()
  })
  momentsActionLink.appendChild(momentsActionButton)

  youtubeShareAction.insertAdjacentElement('afterend', momentsActionLink)
}
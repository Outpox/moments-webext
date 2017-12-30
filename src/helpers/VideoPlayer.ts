import { extractYoutubeVideoId } from './utils'

export interface VideoPlayer {
  progressBar: HTMLElement,
  playButton: HTMLElement,
  videoId: string
}

export class VideoPlayer {
  constructor () {
    this.playButton = document.querySelector('.ytp-play-button')
    this.progressBar = document.querySelector('.ytp-progress-bar')
    this.videoId = extractYoutubeVideoId()
  }

  /**
   * Return the player progress, extracted from the aria-valuenow label
   */
  getProgress () {
    return this.progressBar.getAttribute('aria-valuenow')
  }

  /**
   * An eventListener as a promise which returns the new progress everytime it changes
   * 
   * Not really effective right now as the aria label only update when the progress bar is displayed
   */
  progressEventListener (): Promise<string> {
    let progress = this.getProgress()

    return new Promise((resolve, _) => {
      setInterval(() => {
        if (this.getProgress() !== progress) {
          progress = this.getProgress()
          resolve(progress)
        }
      }, 500)
    })
  }

  /**
   * Play and pause the video by simulation a click on the play button
   */
  playPause () {
    this.playButton.click()
  }

  /**
   * Generate the Moments.yt url
   */
  getMomentsUrl () {
    const browser = 'none'
    return `https://moments.yt/video/${this.videoId}/cut?t=${this.getProgress()}&ref=youtube-${browser}`
  }
}
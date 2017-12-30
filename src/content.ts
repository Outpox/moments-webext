/// <reference path="../node_modules/web-ext-types/global/index.d.ts"/>
console.log('[content-script] running')

import { insertButtonV1 } from './elements/buttonV1'
// import { insertButtonV2 } from './elements/buttonV2'

const youtubeV1 = document.querySelector('[data-trigger-for="action-panel-share"]')
if (youtubeV1) {
  insertButtonV1()
} 
// TODO: Properly handle the new Youtube version
// else {
//   insertButtonV2()
// }
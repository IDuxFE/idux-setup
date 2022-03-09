export {}

import { type DrawerProviderRef } from '@idux/components/drawer'
import { type MessageProviderRef } from '@idux/components/message'
import { type ModalProviderRef } from '@idux/components/modal'
import { type NotificationProviderRef } from '@idux/components/notification'

declare global {
  function setInterval(handler: TimerHandler, timeout?: number, ...arguments: any[]): number
  function setTimeout(handler: TimerHandler, timeout?: number, ...arguments: any[]): number
  function clearInterval(handle?: number): void
  function clearTimeout(handle?: number): void

  const __DEV__: boolean

  const $idux: {
    drawer: DrawerProviderRef
    notification: NotificationProviderRef
    modal: ModalProviderRef
    message: MessageProviderRef
  }
}

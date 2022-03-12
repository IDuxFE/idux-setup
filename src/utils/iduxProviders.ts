import { DrawerProviderRef } from '@idux/components/drawer'
import { NotificationProviderRef } from '@idux/components/notification'
import { ModalProviderRef } from '@idux/components/modal'
import { MessageProviderRef } from '@idux/components/message'

let Drawer: DrawerProviderRef | undefined
let Notification: NotificationProviderRef | undefined
let Modal: ModalProviderRef | undefined
let Message: MessageProviderRef | undefined

// 方便在 ts 中直接调用
export function registerProviders(option: {
  drawer: DrawerProviderRef
  notification: NotificationProviderRef
  modal: ModalProviderRef
  message: MessageProviderRef
}): void {
  Drawer = option.drawer
  Notification = option.notification
  Modal = option.modal
  Message = option.message
}

export { Drawer, Notification, Modal, Message }

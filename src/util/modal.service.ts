import emitter from './emmit.service'
import { uid } from 'uid';

export class ModalService {
  static singleton:ModalService;
  static resolvers:any

  static get instance() {
    if (!this.singleton) {
      this.singleton = new this()
    }
    return this.singleton
  }

  static get _resolvers() {
    if (!this.resolvers) {
      this.resolvers = {}
    }
    return this.resolvers
  }

  static addResolvers(id:string, resolve:Object) {
    if (!this.resolvers) {
      this.resolvers = {}
    }
    this.resolvers[id] = resolve
  }

  static getResolvers(id:string) {
    if (!this.resolvers) {
      this.resolvers = []
      return null
    }
    return this.resolvers[id]
  }

  showModal(args:ModalArgs) {
    return new Promise<ModalCloseArgs>((resolve) => {
      ModalService.addResolvers(args.id, resolve)
      emitter.emit('modalOpen',args)
    })
  }

  confirmation(args:ConfirmationArgs) {
    const argsModal = {
        id: uid(16),
        title: args.title,
        actions: ModalActions.CONFIRMATION,
        content: args.content,
    }
    return ModalService.instance.showModal({ ...argsModal})
  }
}

export const modalConfirmation = ModalService.instance.confirmation

export interface ConfirmationArgs  {
    title:string,
    content:string
}
export interface ModalArgs  {
    id: string,
    title: string,
    actions: ModalActions,
    content: string,
}

export interface ModalCloseArgs  {
    id: string,
    confirm:boolean
}

export enum ModalActions {
    CONFIRMATION = 'confirmation'
}
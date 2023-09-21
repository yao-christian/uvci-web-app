import "reflect-metadata";

import { toast } from "react-toastify";
import { injectable } from "tsyringe";

import {
  NotificationService,
  MessageType,
} from "@/core/app/ports/notifications";

@injectable()
export class ToastNotificationService implements NotificationService {
  notify(message: string, messageType: MessageType) {
    toast[messageType](message);
  }
}

import "reflect-metadata";

import { ToastNotificationService } from "@/core/services/notifications";
import { container as DIContainer } from "tsyringe";

export type MessageType = "success" | "error" | "info";

export interface NotificationService {
  notify(message: string, messageType: MessageType): void;
}

export const NotificationServiceToken = Symbol.for("NotificationService");

DIContainer.register<NotificationService>(NotificationServiceToken, {
  useClass: ToastNotificationService,
});

const notificationService = DIContainer.resolve<NotificationService>(
  NotificationServiceToken
);

export { notificationService };

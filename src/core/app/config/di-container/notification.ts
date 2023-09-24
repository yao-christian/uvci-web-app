import "reflect-metadata";
import { container as DIContainer } from "tsyringe";

import {
  NotificationService,
  NotificationServiceToken,
} from "@/core/app/ports/notifications";

import { ToastNotificationService } from "@/core/infra/notifications";

DIContainer.register<NotificationService>(NotificationServiceToken, {
  useClass: ToastNotificationService,
});

const notificationService = DIContainer.resolve<NotificationService>(
  NotificationServiceToken
);

export { notificationService };

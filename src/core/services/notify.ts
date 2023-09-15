import { toast } from "react-toastify";

export class Notify {
  static error(message: string) {
    toast.error(message);
  }

  static info(message: string) {
    toast.info(message);
  }
}

import { toast } from "react-toastify";

export const notify = (message: string) => {
  toast(message, {
    theme: "dark",
    draggable: false,
    position: toast.POSITION.BOTTOM_LEFT,
  });
}

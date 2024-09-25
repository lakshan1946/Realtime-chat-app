import { create } from "zustand";
import { useUserStore } from "./userStore";
export const useChatStore = create((set) => ({
  chatId: null,
  user: null,
  isCurrentUserBlocked: null,
  isReceiverBlocked: null,

  changeChat: (chatId, user) => {
    const currentUser = useUserStore.getState().currentUser;
    // console.log("current user ", currentUser.id);
    // console.log("user ", user);
    // console.log("user 1", user.user.id);

    // Check if the current user is blocked by the receiver
    if (user.user.blocked.includes(currentUser.id)) {
      set({
        chatId,
        user: null,
        isCurrentUserBlocked: true,
        isReceiverBlocked: false,
      });
    }
    // Check if the receiver is blocked by the current user
    else if (currentUser.blocked.includes(user.user.id)) {
      set({
        chatId,
        user: user,
        isCurrentUserBlocked: false,
        isReceiverBlocked: true,
      });
    } else {
      set({
        chatId,
        user,
        isCurrentUserBlocked: false,
        isReceiverBlocked: false,
      });
    }
  },

  // Function to toggle the block status of the receiver
  changeBlock: () => {
    set((state) => ({
      ...state,
      isReceiverBlocked: !state.isReceiverBlocked,
    }));
  },
}));

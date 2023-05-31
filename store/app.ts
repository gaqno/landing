export const useAppStore = defineStore("app", {
  state: () => ({
    darkMode: false,
    loading: false,
    modal: {
      show: false,
      title: "",
      content: "",
    },
    toast: {
      show: false,
      title: "",
      content: "",
    },
  }),
  getters: {},
  actions: {
    toggleDarkMode () {
      this.darkMode = !this.darkMode;
    },
    setLoading (loading: boolean) {
      this.loading = loading;
    },
    setModal (modal: { show: boolean; title: string; content: string }) {
      this.modal = modal;
    },

  },
});

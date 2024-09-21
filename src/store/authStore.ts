import { create } from "zustand";

type authTypes = {
  loading: boolean;
  setLoading: (load: boolean) => void;
};

const useAuth = create<authTypes>()((set) => ({
  loading: false,
  setLoading: (load: boolean) => set({ loading: load }),
}));

export default useAuth;

import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
const { persistAtom } = recoilPersist();

export const authAtom = atom({
    key : "authState",
    default : null,
    effects_UNSTABLE: [persistAtom],
})
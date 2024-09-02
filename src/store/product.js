import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
const { persistAtom } = recoilPersist();

export const productAtom = atom({
    key : "productState",
    default : [],
    effects_UNSTABLE: [persistAtom],
})
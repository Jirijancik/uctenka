import { atom } from 'recoil';

const DEFAULT_CLIENT_ID = null;

export const selectedClientIdState = atom<number | null>({
    key: 'selectedClientIdState',
    default: DEFAULT_CLIENT_ID,
});

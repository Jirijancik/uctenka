import { Client } from '@/api/service/client';
import { atom } from 'recoil';

export const currentClientState = atom<Client | null>({
    key: 'currentClient',
    default: null,
});

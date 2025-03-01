import { User } from '@supabase/supabase-js';
import { atom, useAtom } from 'jotai';

const currentUserAtom = atom<User>();

export const useCurrentUserStore = () => {
  const [currentUser, setCurrentUser] = useAtom(currentUserAtom);
  return { currentUser, set: setCurrentUser };
};

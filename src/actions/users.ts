"use server";

import { createClient } from "@/auth/server";
import { handleError } from "@/lib/utils";
import { error } from "console";

export const loginAction = async (email: string, password: string) => {
  try {
    const { auth } = await createClient();
    const { error } = await auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      throw error;
    }
    return { errorMessage: null };
  } catch (error) {
    return handleError(error);
  }
};

export const logOutAction = async () => {
  try {
    const { auth } = await createClient();
    const { error } = await auth.signOut();

    if (error) {
      throw error;
    }
  } catch (error) {
    return handleError(error);
  }
};

// const signUpAction = async (email: string, password: string) => {
//   const { auth } = await createClient();
//   const { data, error } = auth.signUp({
//     email,
//     password,
//   });

//   if (error) {
//     throw error;
//   }

//   const userId = data.user?.id;
//   if (!userId) throw new Error("Error signing up");

//   await prisma.user.create({
//     data: {
//       id: userId,
//       email,
//     },
//   });
//   try {
//   } catch (error) {
//     return handleError(error);
//   }
// };

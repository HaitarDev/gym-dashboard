import { SignUpFieldValues } from "../ui/SignUpForm";
import supabase from "./supabase";

export type DataLogin = {
  email: string;
  password: string;
};

export async function loginUser(value: DataLogin) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: value.email,
    password: value.password,
  });

  if (error) {
    console.error(error.message);
    throw new Error("Error happened in login user");
  }
  return data;
}

export async function checkIfAuthenticated() {
  const { data: session } = await supabase.auth.getSession();

  if (!session.session) return null;

  const { data: user, error } = await supabase.auth.getUser();

  if (error) {
    console.error(error?.message);
    throw new Error("error on checking if user is authenticated");
  }

  return user.user;
}

export async function logout() {
  const { error } = await supabase.auth.signOut();

  if (error) {
    console.error(error.message);
    throw new Error("Error happened in login out");
  }
}

export async function signUp({
  email,
  password,
  firstname,
  lastname,
}: SignUpFieldValues) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: { data: { firstname, lastname } },
  });

  if (error) {
    console.error(error.message);
    throw new Error("Error happened in login out");
  }

  return data;
}

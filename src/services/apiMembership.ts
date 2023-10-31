import { getToday } from "../utils/service";
import supabase from "./supabase";

export interface EditProp {
  id: number;
  value: object;
}

// READ ROWS
export async function getMembers() {
  const { data: membership, error } = await supabase
    .from("membership")
    .select("*");
  if (error) {
    console.error(error);
    throw new Error("membership error");
  }

  return membership;
}

//INSERT ROW
export async function insertMember(value: object) {
  const { data, error } = await supabase
    .from("membership")
    .insert([value])
    .select();

  if (error) {
    console.error(error.message);
    throw new Error("inserting membership error");
  }

  return data;
}

//DELETE ROW
export async function deleteMember(id: number) {
  const { error } = await supabase.from("membership").delete().eq("id", id);

  if (error) {
    console.error(error.message);
    throw new Error("deleting membership error");
  }
}

export async function editMember({ id, value }: EditProp) {
  const { data, error } = await supabase
    .from("membership")
    .update(value)
    .eq("id", id)
    .select();

  if (error) {
    console.error(error.message);
    throw new Error("edit member error");
  }

  return data;
}

export type Data = {
  created_at: Date;
  price: string;
  date_end: string;
  name: string;
};
// fetch members before date
export async function getMembersBeforeDate(date: string): Promise<Data[]> {
  const { data, error } = await supabase
    .from("membership")
    .select("created_at , price, date_end, name")
    .gte("created_at", date)
    .lte("created_at", getToday({ end: true }));

  if (error) {
    console.error(error.message);
    throw new Error("cannot load members after date");
  }

  return data;
}

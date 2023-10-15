import supabase from "./supabase";

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
    console.error(error);
    throw new Error("inserting membership error");
  }

  return data;
}

//DELETE ROW
export async function deleteMember(id: number) {
  const { error } = await supabase.from("membership").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("deleting membership error");
  }
}

export interface EditProp {
  id: number;
  value: object;
}

export async function editMember({ id, value }: EditProp) {
  const { data, error } = await supabase
    .from("membership")
    .update(value)
    .eq("id", id)
    .select();

  if (error) {
    console.error(error);
    throw new Error("edit member error");
  }

  return data;
}

import supabase from './supabase';

export async function getCabins() {
  let { data, error } = await supabase.from('cabins').select('*');

  if (error) {
    console.error(error.message);
    throw new Error(error.message);
  }

  return data;
}

export async function deleteCabin(id) {
  let { error } = await supabase.from('cabins').delete().eq('id', id);

  if (error) {
    console.error(error.message);
    throw new Error('Could not delete cabin');
  }
}

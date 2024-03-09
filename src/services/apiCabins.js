import supabase from './supabase';

export async function getCabins() {
  const { data, error } = await supabase.from('cabins').select('*');

  if (error) {
    console.error(error.message);
    throw new Error(error.message);
  }

  return data;
}

export async function deleteCabin(id) {
  const { error } = await supabase.from('cabins').delete().eq('id', id);

  if (error) {
    console.error(error.message);
    throw new Error('Could not delete cabin');
  }
}

export async function createCabin(cabin) {
  const { data, error } = await supabase.from('cabins').insert([cabin]);

  if (error) {
    console.error(error.message);
    throw new Error('Could not create cabin');
  }

  return data;
}

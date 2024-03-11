import supabase, { supabaseUrl } from './supabase';

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
  // https://bftjanmteamurqirncij.supabase.co/storage/v1/object/public/cabin-images/cabin-001.jpg - sample URL
  // Creat a unique name for the image
  const imageName = `${Math.random()}-${cabin.image.name}`.replaceAll('/', '');
  const imagePath = `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

  // 1. Create a new cabin
  const { data, error } = await supabase
    .from('cabins')
    .insert([{ ...cabin, image: imagePath }]);

  if (error) {
    console.error(error.message);
    throw new Error('Could not create cabin');
  }

  // 2. Upload the image
  const { error: storageError } = await supabase.storage
    .from('cabin-images')
    .upload(imageName, cabin.image);

  // 3. Delete the cabin if the image upload fails
  if (storageError) {
    console.error(storageError.message);
    await supabase.from('cabins').delete().eq('id', data.id);
    throw new Error('Could not upload image');
  }

  return data;
}

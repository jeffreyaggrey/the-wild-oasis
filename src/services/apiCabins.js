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

export async function createEditCabin(cabin, id) {
  const hasImagePath = cabin.image?.startsWith?.(supabaseUrl);

  const imageName = `${Math.random()}-${cabin.image.name}`.replaceAll('/', '');
  // Check if there is an image path or a file
  const imagePath = hasImagePath
    ? cabin.image
    : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

  let query = supabase.from('cabins');

  // - Create a new cabin
  if (!id) query = query.insert([{ ...cabin, image: imagePath }]);

  // - Edit an existing cabin
  if (id) query = query.update({ ...cabin, image: imagePath }).eq('id', id);

  const { data, error } = await query.select().single();

  if (error) {
    console.error(error.message);
    throw new Error('Could not create cabin');
  }

  // 2. Upload the image
  if (hasImagePath) return data;

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

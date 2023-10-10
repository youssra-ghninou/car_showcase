export async function fetchCars() {
  const headers = {
    "X-RapidAPI-Key": "5db230f3f2msh3abe4b8396bb503p1d8857jsn030977b04679",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };
  const response = await fetch(
    "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars",
    { headers: headers }
  );

  const result = await response.json();
  return result;
}

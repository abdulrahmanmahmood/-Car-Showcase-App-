export async function fetchCars() {
  const headers = {
    "X-RapidAPI-Key": "b0003ffafcmsh2615a686cdc9040p1caab8jsnd5f806425d42",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };
  const response = await fetch(
    "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla",
    {headers:headers}
  );

  const result = await response.json();
  return result;

}


export const calculateCar
export const filterData = (searchTxt, restaurants) => {
  const filterData = restaurants.filter((restaurant) => {
    return restaurant.data?.name
      .toLocaleLowerCase()
      .includes(searchTxt.toLocaleLowerCase());
  });

  return filterData;
};

export const addRoom = async (room) => {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/addRooms`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(room),
  });
  const data = await res.json();
  return data;
};

export const getRooms = async () => {
  const url = `${import.meta.env.VITE_API_URL}/rooms`;
  const res = await fetch(url);
  const data = await res.json();
  return data;
};

export const getRoom = async (id) => {
  const url = `${import.meta.env.VITE_API_URL}/rooms/${id}`;
  const res = await fetch(url);
  const data = await res.json();
  return data;
};

//checkMyListing which rooms was I am added

// export const getMyRooms = async (email) => {
//   const url = `${import.meta.env.VITE_API_URL}/getMyAddedRooms/${email}`;

//   const res = await fetch(url, {
//     headers: {
//       authorization: `Bearer ${localStorage.getItem("access-token")}`,
//     },
//   });
//   const data = await res.json();
//   return data;
// };

//myListing my rooms delete singleRoom

export const deleteListedRoom = async (id) => {
  const url = `${import.meta.env.VITE_API_URL}/deleteSingleRoom/${id}`;

  const res = await fetch(url, {
    method: "DELETE",
  });
  const data = await res.json();
  return data;
};

export const updateRoom = async (id, updateData) => {
  const url = `${import.meta.env.VITE_API_URL}/updateRoom/${id}`;

  const res = await fetch(url, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${localStorage.getItem("access-token")}`,
    },
    body: JSON.stringify(updateData),
  });
  const data = await res.json();
  return data;
};

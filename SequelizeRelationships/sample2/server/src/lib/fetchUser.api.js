export async function getUserOne(userId) {
  const response = await fetch(`localhost:8001/test/user/${userId}`);
  JSON.stringify(response);
  console.log(response);

  return response;
}
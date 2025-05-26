import { BASE_URL } from "../utils/url";

export async function addAnNews(values, name) {
  try {
    const response = await fetch(`${BASE_URL}/post/add`, {
      method: "POST",
      body: JSON.stringify({ ...values, user: name }),
      headers: {
        "Content-type": "application/json",
      },
    });
    const addedNews = await response.json();
    return addedNews;
  } catch (error) {
    console.log(error);
  }
}

export async function getAllNews() {
  try {
    const response = await fetch(`${BASE_URL}/post`, {
      method: "GET",
    });
    const news = await response.json();
    return news;
  } catch (error) {
    console.log(error);
  }
}

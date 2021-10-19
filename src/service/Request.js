// import { Component } from "react";
const BASE_URL = "https://api.themoviedb.org/3";
export async function fetchTranding() {
  const res = await fetch(
    `${BASE_URL}/trending/movie/week?api_key=2497cc3d1941bf2f5c8a3541a4d85ed3`
  );
  return res.ok ? await res.json() : "Error";
}
export async function fetchMovieDetails(filmsId) {
  const res = await fetch(
    `${BASE_URL}/movie/${filmsId}?api_key=2497cc3d1941bf2f5c8a3541a4d85ed3&language=en-US`
  );
  return res.ok ? await res.json() : "Error";
}
export async function fetchMovieDetailsAuthors(filmsId) {
  const res = await fetch(
    `${BASE_URL}/movie/${filmsId}/credits?api_key=2497cc3d1941bf2f5c8a3541a4d85ed3&language=en-US`
  );
  return res.ok ? await res.json() : "Error";
}
export async function fetchMovieDetailsReviews(filmsId) {
  const res = await fetch(
    `${BASE_URL}/movie/${filmsId}/reviews?api_key=2497cc3d1941bf2f5c8a3541a4d85ed3&language=en-US`
  );
  return res.ok ? await res.json() : "Error";
}
export async function fetchSearchMovie(valueInput) {
  const res = await (valueInput
    ? fetch(
        `${BASE_URL}/search/movie?&api_key=2497cc3d1941bf2f5c8a3541a4d85ed3&query=${valueInput}&language=en-US&page=1&include_adult=false`
      )
    : "");
  return res.ok ? await res.json() : "Error";
}

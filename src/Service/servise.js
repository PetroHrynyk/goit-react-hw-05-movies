import axios from 'axios';
const myKey = 'api_key=3ad61d03a4fee35a02b0181321c49002';
const trendMovies = '/trending/movie/day?';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
});

export const getMovies = async () => {
  const result = await instance.get(`${trendMovies}${myKey}`);
  const { data } = result;
  const { results } = data;
  return results;
};

export const getSingleMovie = async id => {
  const result = await instance.get(`/movie/${id}?${myKey}`);
  const { data } = result;
  return data;
};

export const getSearchMovies = async query => {
  const result = await instance.get(`/search/movie?query=${query}&${myKey}`);
  const { data } = result;
  const { results } = data;
  return results;
};

export const getActor = async id => {
  const result = await instance.get(`/movie/${id}/credits?${myKey}`);
  const { data } = result;
  const { cast } = data;
  return cast;
};

export const getReviews = async id => {
  const result = await instance.get(`/movie/${id}/reviews?${myKey}&page=1`);
  const { data } = result;
  const { results } = data;
  return results;
};

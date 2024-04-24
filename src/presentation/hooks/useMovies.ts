import { useState, useEffect } from 'react';
import axios from 'axios';

export const useMovies = () => {

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const searchMovies = async (term: string) => {
    try {
      setLoading(true);
      const response = await axios.get(`http://www.omdbapi.com/?s=${term}&apikey=1c3296b4`);
      setMovies(response.data.Search || []);

      console.log(response.data.Search);
      
    } catch (error) {
      throw new Error("Method not implemented.");
      
    } finally {
      setLoading(false);
    }
  };

  return { movies, loading, error, searchMovies };
};
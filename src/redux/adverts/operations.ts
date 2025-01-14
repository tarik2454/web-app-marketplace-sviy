import { API } from '@/config-api/global-config-api';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../store';
import axios from 'axios';

// Типы данных для объявления и ответа
// interface Address {
//   city: string;
//   street: string;
//   number: string;
// }

interface AdvertData {
  owner: number;
  category: number;
  name: string;
  descr: string;
  price: string;
  unit: string;
  availability: string;
  location: string;
  delivery_methods: string[];
  delivery_comment: string;
  payment_methods: string[];
  payment_card: string;
  payment_comment: string;
}

interface AdvertResponse extends AdvertData {
  id: number;
}

export const createAdvertThunk = createAsyncThunk<
  AdvertResponse, // Тип данных, возвращаемых асинхронным действием
  AdvertData, // Тип параметра асинхронного действия (данные для создания объявления)
  { rejectValue: string } // Тип дополнительных параметров асинхронного действия, включая RootState
>('adverts/createAdvert', async (credentials, ThunkAPI) => {
  try {
    const response = await API.post('/api/catalog/adverts/', credentials, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const status = error.response?.status;
      if (status === 401) {
        return ThunkAPI.rejectWithValue('Користувач не автентифікований.');
      }
    }
    return ThunkAPI.rejectWithValue('Щось пішло не так! Спробуйте знову....');
  }
});

export const getAdvertListThunk = createAsyncThunk<
  AdvertResponse[],
  undefined,
  { rejectValue: string }
>('adverts/fetchAdverts', async (_, ThunkAPI) => {
  try {
    const response = await API.get('/api/catalog/adverts/');
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const status = error.response?.status;
      if (status === 401) {
        return ThunkAPI.rejectWithValue('Користувач не автентифікований.');
      }
    }
    return ThunkAPI.rejectWithValue('Щось пішло не так! Спробуйте знову....');
  }
});

export const getAdvertThunk = createAsyncThunk<
  AdvertResponse,
  number,
  { rejectValue: string }
>('adverts/fetchAdvertById', async (id, ThunkAPI) => {
  try {
    const response = await API.get(`/api/catalog/adverts/${id}/`);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const status = error.response?.status;
      if (status === 401) {
        return ThunkAPI.rejectWithValue('Користувач не автентифікований.');
      }
    }
    return ThunkAPI.rejectWithValue('Щось пішло не так! Спробуйте знову....');
  }
});

export const updateAdvertThunk = createAsyncThunk<
  AdvertResponse,
  { id: number; data: Partial<AdvertData> },
  { rejectValue: string }
>('adverts/updateAdvert', async ({ id, data }, ThunkAPI) => {
  try {
    const response = await API.patch(`/api/catalog/adverts/${id}`, data);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const status = error.response?.status;
      if (status === 401) {
        return ThunkAPI.rejectWithValue('Користувач не автентифікований.');
      }
    }
    return ThunkAPI.rejectWithValue('Щось пішло не так! Спробуйте знову....');
  }
});

export const deleteAdvertThunk = createAsyncThunk<
  number,
  number,
  { rejectValue: string }
>('adverts/deleteAdvert', async (id, ThunkAPI) => {
  try {
    await API.delete(`/api/catalog/adverts/${id}`);
    return id;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const status = error.response?.status;
      if (status === 401) {
        return ThunkAPI.rejectWithValue('Користувач не автентифікований.');
      }
    }
    return ThunkAPI.rejectWithValue('Щось пішло не так! Спробуйте знову....');
  }
});

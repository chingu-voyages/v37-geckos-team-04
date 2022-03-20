import * as api from '../api/Api';
import { get, create, update, remove } from './sleepSlice';

export const getSleepData = (id) => async (dispatch) => {
  try {
    const { data } = await api.getSleepData(id);
    dispatch(get(data));
  } catch (error) {
    console.log(error.message);
  }
};

export const createSleep = (formData) => async (dispatch) => {
  try {
    const { data } = await api.createSleep(formData);
    dispatch(create(data));
  } catch (error) {
    console.log(error.message);
  }
};

export const updateSleep = (id, formData) => async (dispatch) => {
  try {
    const { data } = await api.updateSleep(id, formData);
    dispatch(update(data));
  } catch (error) {
    console.log(error.message);
  }
};

export const removeSleep = (id) => async (dispatch) => {
  try {
    await api.removeSleep(id);
    dispatch(remove(id));
  } catch (error) {
    console.log(error.message);
  }
};

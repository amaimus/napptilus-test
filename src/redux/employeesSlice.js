// src/redux/employeesSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  employees: [],
  filter: '',
  page: 1,
  totalPages: null,
};

const concatEmployeesData = (employees) => {
  return employees.map(employee => ({
    ...employee,
    searchKey: `${employee.first_name} ${employee.last_name} ${employee.profession}`,
  }));
};

const employeesSlice = createSlice({
  name: 'employees',
  initialState,
  reducers: {
    addEmployee(state, action) {
      const data = concatEmployeesData(action.payload);
      state.employees = [...state.employees, ...data];
    },
    setFilter(state, action) {
      state.filter = action.payload;
    },
    setPage(state, action) {
      state.page = action.payload;
    },
    setTotalPages(state, action) {
      state.totalPages = action.payload;
    }
  }
});

export const { addEmployee, setFilter, setPage, setTotalPages } = employeesSlice.actions;
export default employeesSlice.reducer;

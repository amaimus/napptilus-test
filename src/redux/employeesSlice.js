// src/redux/employeesSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  employees: [],
  filter: '',
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
      const data = concatEmployeesData(action.payload)
      state.employees.push(data);
    },
    setFilter(state, action) {
      state.filter = action.payload;
    },
  }
});

export const { addEmployee, setFilter } = employeesSlice.actions;
export default employeesSlice.reducer;

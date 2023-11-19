import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    assignments: [],
    assignment: {
        title: "New Assignment", 
        description: "New Description",
        start: "2023-09-10", 
        end: "2023-12-15", 
        points: "100", 
        due: "2023-12-15"
    },
};

const assignmentSlice = createSlice({
    name: "assignments",
    initialState,
    reducers: {
        addAssignment: (state, action) => {
            state.assignments = [
                { ...action.payload, _id: new Date().getTime().toString() },
                ...state.assignments,
            ];
        },
        deleteAssignment: (state, action) => {
            state.assignments = state.assignments.filter(
                (assignment) => assignment._id !== action.payload
            );
        },
        updateAssignment: (state, action) => {
            state.assignments = state.assignments.map((assignment) => {
                if (assignment._id === action.payload._id) {
                    return action.payload;
                } else {
                    return assignment;
                }
            });
        },
        setAssignment: (state, action) => {
            state.assignment = action.payload;
        },
        setAssignments: (state, action) => {
            state.assignments = action.payload;
        }

    }
});

export const { addAssignment, deleteAssignment,
    updateAssignment, setAssignment, setAssignments} = assignmentSlice.actions;
export default assignmentSlice.reducer;
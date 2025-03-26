<?php

namespace App\Http\Controllers;

use App\Models\Employee;
use Illuminate\Http\Request;

class EmployeeController extends Controller
{
    // Fetch all employees
    public function index()
    {
        return Employee::all();
    }

    // Create a new employee
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:employees,email',
            'position' => 'required|string|max:255',
            'salary' => 'required|numeric',
        ]);

        $employee = Employee::create($request->all());

        return response()->json($employee, 201);
    }

    // Display a specific employee
    public function show($id)
    {
        return Employee::findOrFail($id);
    }

    // Update an employee
    public function update(Request $request, $id)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:employees,email,' . $id,
            'position' => 'required|string|max:255',
            'salary' => 'required|numeric',
        ]);

        $employee = Employee::findOrFail($id);
        $employee->update($request->all());

        return response()->json($employee, 200);
    }

    // Delete an employee
    public function destroy($id)
    {
        $employee = Employee::findOrFail($id);
        $employee->delete();

        return response()->json(null, 204);
    }
}

<?php

use App\Http\Controllers\EmployeeController;
use Illuminate\Support\Facades\Route;

// Define API routes here
Route::middleware('api')->group(function () {
    Route::apiResource('employees', EmployeeController::class);
});

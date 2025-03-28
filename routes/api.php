<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\InquiriesController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/inquiries', [InquiriesController::class, 'index']);
Route::post('/inquiries', [InquiriesController::class, 'store']);
Route::put('/inquiries/{id}', [InquiriesController::class, 'update']);
Route::delete('/inquiries/{id}', [InquiriesController::class, 'destroy']);
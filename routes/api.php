<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\InquiriesController;
use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\Api\UserController;
use App\Http\Controllers\Api\EventController;

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

Route::get('/users', [UserController::class, 'index']);
Route::post('/create-user', [UserController::class, 'store']);
Route::put('/users/{id}', [UserController::class, 'update']);
Route::delete('/users/{id}', [UserController::class, 'delete']);

Route::get('/inquiries', [InquiriesController::class, 'index']);
Route::post('/inquiries', [InquiriesController::class, 'store']);
Route::put('/inquiries/{id}', [InquiriesController::class, 'update']);
Route::delete('/inquiries/{id}', [InquiriesController::class, 'destroy']);

Route::apiResource('events', EventController::class);
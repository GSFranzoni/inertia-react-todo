<?php

use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\LogoutController;
use App\Http\Controllers\FakeController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\TodoController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::get('/home', TodoController::class)->name('todos.index');
Route::post('/todos', [TodoController::class, 'store'])->name('todos.store');

/*
|--------------------------------------------------------------------------
| Auth Routes
|--------------------------------------------------------------------------
*/
Route::get('/', [LoginController::class, 'index'])->name('auth.login.index');
Route::post('/auth/login', LoginController::class)->name('auth.login');
Route::post('/auth/logout', LogoutController::class)->name('auth.logout');

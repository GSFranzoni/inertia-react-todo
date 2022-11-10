<?php

use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\FakeController;
use App\Http\Controllers\HomeController;
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
Route::get('/home', HomeController::class)->name('home');
Route::post('/fake', FakeController::class)->name('fake');

/*
|--------------------------------------------------------------------------
| Auth Routes
|--------------------------------------------------------------------------
*/
Route::get('/', [LoginController::class, 'index'])->name('auth.login.index');
Route::post('/auth/login', LoginController::class)->name('auth.login');

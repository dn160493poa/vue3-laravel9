<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\Post\DeleteController;
use App\Http\Controllers\Post\IndexController;
use App\Http\Controllers\Post\ShowController;
use App\Http\Controllers\Post\StoreController;
use App\Http\Controllers\Post\UpdateController;
use App\Http\Controllers\User\UpdateController as UpdateUserController;
use App\Http\Controllers\User\ShowController as ShowUserController;
use App\Http\Controllers\Post\Like\StoreController as LikeStoreController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group(['middleware' => 'api', 'prefix' => 'auth'], function ($router) {
    Route::post('register', [AuthController::class, 'register']);
    Route::post('login', [AuthController::class, 'login']);
    Route::post('logout', [AuthController::class, 'logout']);
    Route::post('refresh', [AuthController::class, 'refresh']);
    Route::post('me', [AuthController::class, 'me']);
});

Route::group(['namespace' => 'Post', 'prefix' => 'post'], function (){
    Route::get('/', [IndexController::class, '__invoke']);
    Route::get('/{post}', [ShowController::class, '__invoke']);
    Route::delete('/{post}', [DeleteController::class, '__invoke']);
    Route::post('/', [StoreController::class, '__invoke']);
    Route::patch('/{post}', [UpdateController::class, '__invoke']);
});

Route::group(['namespace' => 'Profile', 'prefix' => 'profile'], function (){
    Route::get('/{user}', [ShowUserController::class, '__invoke']);
});


Route::group(['middleware' => 'auth:api'], function (){
    Route::group(['namespace' => 'Post', 'prefix' => 'post'], function (){

        Route::group(['namespace' => 'Like', 'prefix' => '{post}/like'], function (){
            Route::post('/', [LikeStoreController::class, '__invoke']);
        });
    });

    Route::group(['namespace' => 'User', 'prefix' => 'user'], function (){
        Route::patch('/{user}', [UpdateUserController::class, '__invoke']);
    });

});

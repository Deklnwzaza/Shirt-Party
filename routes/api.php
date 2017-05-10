<?php

use Illuminate\Http\Request;

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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('user/create', ['middleware' => 'cors', 'UserController@createUser']);

Route::post('user/login',  ['middleware' => 'cors', 'UserAuthController@loginUser']);

Route::post('shirt/create',  ['middleware' => 'cors', 'StripedShirtController@createShirt']);

Route::post('sticker/create',  ['middleware' => 'cors', 'StickerController@createSticker']);

Route::get('shirt/all',  ['middleware' => 'cors', 'StripedShirtController@getAllShirt']);

Route::get('shirt/{id}', ['middleware' => 'cors', 'StripedShirtController@getShirt']);

Route::get('sticker/all',  ['middleware' => 'cors', 'StickerController@getAllSticker']);

Route::get('sticker/{id}',  ['middleware' => 'cors', 'StickerController@getSticker']);
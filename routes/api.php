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

Route::post('user/create', 'UserController@createUser');

Route::post('user/login', 'UserAuthController@loginUser');

Route::post('shirt/create', 'StripedShirtController@createShirt');

Route::post('sticker/create', 'StickerController@createSticker');

Route::get('shirt/all', 'StripedShirtController@getAllShirt');

Route::get('shirt/{id}', 'StripedShirtController@getShirt');

Route::get('sticker/all', 'StickerController@getAllSticker');

Route::get('sticker/{id}', 'StickerController@getSticker');
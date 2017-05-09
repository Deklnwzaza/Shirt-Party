<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function index()
    {
        $users = User::all();
        return $users;
    }

    public function createUser(Request $request)
    {
        $events = $request->all();
        $arrData = [
            'email' => $events['email'],
            'password' => password_hash($events['password'], PASSWORD_DEFAULT),
            'first_name' => $events['first_name'],
            'last_name' => $events['last_name'],
        ];
        $user = User::create($arrData);
        return $user;
    }

}

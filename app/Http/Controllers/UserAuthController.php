<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;

class UserAuthController extends Controller
{
    public function loginUser(Request $request)
    {
        $email = $request->input('email');
        $password = $request->input('password');
        //Log::info('password: '.$password);
        $user = User::where('email', '=', $email)->first();
        if($user != null){
            if(password_verify($password, $user->password)){
                return $user;
            }else{
                return response()->json(['msg' => 'password is incorrect']);
            }
        }else{
            return response()->json(['msg' => 'username is incorrect']);
        }
    }
    public function logout(Request $request)
    {
        //remove all data from this session with flush
        $request->session()->flush();
        return response()->json(['msg' => 'logout complete']);
    }
}

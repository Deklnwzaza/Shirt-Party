<?php

namespace App\Http\Controllers;

use App\StripedShirt;
use Illuminate\Http\Request;

class StripedShirtController extends Controller
{
    public function index()
    {
        $shirts = StripedShirt::all();
        return view('index', ['shirts' => $shirts]);
    }

    public function createShirt(Request $request)
    {
        $events = $request->all();
        $arrData = [];
        foreach ($events as $event){
            $arrData = [
           'buyer_name' => $events['buyer_name'],
           'front' => $event['front'],
           'back' => $event['back'],
           'sticker' => $event['sticker'],
       ];
            StripedShirt::create($arrData);
        }
        /*$arrData = [
            'buyer_name' => $events['buyer_name'],
            'front' => $events['front'],
            'back' => $events['back'],
            'sticker' => $events['sticker'],
        ];*/
        return $arrData;
    }

    public function getAllShirt()
    {
        $shirts = StripedShirt::all();
        return $shirts;
    }

    public function getShirt($id)
    {
        $shirt = StripedShirt::findOrFail($id);

        return $shirt;
    }
}

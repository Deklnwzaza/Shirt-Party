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
        for($i = 0; i < count($events['image']); ++$i){
            $arrData[$i] = [
                'buyer_name' => $events['buyer_name'],
                'front' => $events['image'][$i]['front'],
                'back' => $events['image'][$i]['back'],
                'sticker' => $events['sticker'],
            ];
            StripedShirt::create($arrData[$i]);
        }
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

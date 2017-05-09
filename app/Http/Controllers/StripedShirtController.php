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
        $arrData = [
            'buyer_name' => $events['buyer_name'],
            'front' => $events['image']['front'],
            'back' => $events['image']['back'],
            'sticker' => $events['sticker'],
        ];
        $shirt = StripedShirt::create($arrData);
        return $shirt;
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

<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class StickerController extends Controller
{
    public function index()
    {
        $stickers = Sticker::all();
        return view('index', ['stickers' => $stickers]);
    }

    public function createSticker(Request $request)
    {
        $events = $request->all();
        $arrData = [
            'create_by' => $events['create_by'],
            'image' => $events['image'],
        ];
        $sticker = Sticker::create($arrData);
        return $sticker;
    }

    public function getAllSticker()
    {
        $stickers = Sticker::all();
        return $stickers;
    }

    public function getSticker($id)
    {
        $sticker = Sticker::findOrFail($id);
        return $sticker;
    }
}

<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class StripedShirt extends Model
{
    public $timestamps = true;
    protected $fillable = [
        'buyer_name', 'front', 'back', 'sticker',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'created_at','updated_at',
    ];
}

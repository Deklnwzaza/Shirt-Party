<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateStripedShirtsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('striped_shirts', function (Blueprint $table) {
            $table->increments('id');
            $table->string('buyer_name');
            $table->longText('front');
            $table->longText('back');
            $table->integer('sticker');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('striped_shirts');
    }
}

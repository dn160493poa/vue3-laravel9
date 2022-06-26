<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('post_likes', function (Blueprint $table) {
            $table->id();

            $table->unsignedInteger('post_id');
            $table->unsignedInteger('user_id');

            $table->timestamps();

            //IDX
            $table->index('post_id', 'post_user_post_idx');
            $table->index('user_id', 'post_user_user_idx');
            //FK
            $table->foreign('post_id', 'post_user_post_fk')->on('posts')->references('id');
            $table->foreign('user_id', 'post_user_user_fk')->on('users')->references('id');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('post_likes');
    }
};

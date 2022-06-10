<?php


namespace App\Services\Post;

use App\Models\Post;
use Illuminate\Support\Facades\DB;

class Service
{
    public function deletePost($post){
        try{
            DB::beginTransaction();

            $affected = DB::table('posts')
                ->where('id', $post->id)
                ->update(['active' => false]);

            DB::commit();

        }catch (\Exception $exception){
            DB::rollBack();
            return $exception->getMessage();
        }

        return $affected > 0 ? true : false;
    }

    public function store($data){
        try{
            DB::beginTransaction();

            if(isset($data['categories'])){
                $categories = $data['categories'];
                unset($data['categories']);

                $post = Post::create($data);

                $post->categories()->attach($categories);
            }else{
                $post = Post::create($data);
            }

            DB::commit();
        }catch (\Exception $exception){
            DB::rollBack();
            return $exception->getMessage();
        }

        return $post->fresh();
    }
}